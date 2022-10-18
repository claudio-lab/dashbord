import axios from 'axios';
//import { Router } from 'react-router-dom';
import { parseCookies, setCookie } from 'nookies';
import { signOut } from './../components/contexts/AuthContext';

let cookies = parseCookies();
let isRefreshing = false;
let filedRequestQueue = [];

export const api = axios.create({
  baseURL: 'https://webapi.monzoyetu.com/api',
  headers: {
    Authorization: `Bearer ${cookies['monzo.token']}`
  }
});

api.interceptors.response.use(response => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    //if (error.response.data?.title === 'Unauthorized') {
    cookies = parseCookies();

    const { 'monzo.token': token, 'monzo.refreshToken': refreshToken } = cookies;
    const originalConfig = error.config;

    if (!isRefreshing) {
      isRefreshing = true;

      api.get('/v1/refresh', {
        token
      }).then((response) => {
        const { token } = response.data;

        setCookie(undefined, 'monzo.token', token, {
          maxAge: 60 * 60 * 24 * 38,
          path: '/'
        });

        setCookie(undefined, 'monzo.refreshToken', token);
        //setCookie(undefined, 'monzo.id', response.data.dados?.objecto.id);

        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        filedRequestQueue.forEach(request => request.onSuccess(token));
        filedRequestQueue = [];
      })
        .catch((err => {
          filedRequestQueue.forEach(request => request.onFailure(err));
          filedRequestQueue = [];
        }))
        .finally(() => {
          isRefreshing = false;
        });
      //}

      return new Promise((resolve, reject) => {
        filedRequestQueue.push({
          onSuccess: (token) => {
            originalConfig.headers['Authorization'] = `Bearer ${token}`;

            resolve(api(originalConfig));
          },
          onFailure: (err) => {
            reject(err);
          }
        });
      });

    } else {
      signOut();
    }
  }

  return Promise.reject(error);
});