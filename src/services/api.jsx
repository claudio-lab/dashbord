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
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd2ViYXBpLm1vbnpveWV0dS5jb21cL2FwaVwvdjFcL2xvZ2luIiwiaWF0IjoxNjY1OTgzMTM4LCJuYmYiOjE2NjU5ODMxMzgsImp0aSI6IklFcExCeTJ1S2dEVk5MOXoiLCJzdWIiOjk5LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.OfevTmTDDZLrWk3Q2gzo-7WY1j1JQDLHE-jlKBczbV0`
  }
});

/*
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

      api.get('/v1/refresh', {
        token
      }).then((response) => {
        const { token } = response.data;

        setCookie(undefined, 'essca.token', response.data.token, {
          maxAge: 60 * 60 * 24 * 38,
          path: '/'
        });

        setCookie(undefined, 'essca.token', response.data.token);
        setCookie(undefined, 'essca.id', response.data.token);

        api.defaults.headers['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd2ViYXBpLm1vbnpveWV0dS5jb21cL2FwaVwvdjFcL2xvZ2luIiwiaWF0IjoxNjY1OTgzMTM4LCJuYmYiOjE2NjU5ODMxMzgsImp0aSI6IklFcExCeTJ1S2dEVk5MOXoiLCJzdWIiOjk5LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.OfevTmTDDZLrWk3Q2gzo-7WY1j1JQDLHE-jlKBczbV0`;
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
            originalConfig.headers['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd2ViYXBpLm1vbnpveWV0dS5jb21cL2FwaVwvdjFcL2xvZ2luIiwiaWF0IjoxNjY1OTgzMTM4LCJuYmYiOjE2NjU5ODMxMzgsImp0aSI6IklFcExCeTJ1S2dEVk5MOXoiLCJzdWIiOjk5LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.OfevTmTDDZLrWk3Q2gzo-7WY1j1JQDLHE-jlKBczbV0`;

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
});*/