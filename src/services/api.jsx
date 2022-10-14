import axios from 'axios';
//import { Router } from 'react-router-dom';
import { parseCookies, setCookie } from 'nookies';
import { signOut } from './../components/contexts/AuthContext';

let cookies = parseCookies();
let isRefreshing = false;
let filedRequestQueue = [];

const api = axios.create({
  baseURL: 'https://webapi.monzoyetu.com/api',
  headers: {
    Authorization: `Bearer ${cookies['essca.token']}`
  }
});

export default api;

api.interceptors.response.use(response => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    //if (error.response.data?.title === 'Unauthorized') {
    cookies = parseCookies();

    const { 'essca.token': token, 'essca.refreshToken': refreshToken } = cookies;
    const originalConfig = error.config;

    if (!isRefreshing) {
      isRefreshing = true;

      api.post('/v1/Utilizadores/refresh', {
        token,
        refreshToken
      }).then((response) => {
        const { token } = response.data.dados;

        setCookie(undefined, 'essca.token', token, {
          maxAge: 60 * 60 * 24 * 38,
          path: '/'
        });

        setCookie(undefined, 'essca.refreshToken', response.data.dados.refreshToken);
        setCookie(undefined, 'essca.id', response.data.dados?.objecto.id);

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