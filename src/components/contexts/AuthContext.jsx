import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { api } from './../../services/api';



export const AuthContext = createContext();

export function signOut() {
  //const navigate = useNavigate();
  destroyCookie(undefined, 'monzo.token');
  destroyCookie(undefined, 'monzo.refreshToken');
  destroyCookie(undefined, 'monzo.id');

  //Router.push('/portal/login');
  //return navigate('/');
  return window.location.href = '/';
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const isAuthenticated = !!user;
  const navigate = useNavigate();

  useEffect(() => {
    const { 'monzo.token': token, 'monzo.id': id, 'monzo.refreshToken': refreshToken } = parseCookies();

    if (token) {
      api.get('v1/profile/' + id).then((response) => {
        const { name, email } = response.data.user;

        setUser({
          name,
          email,
          permissions: ['']
        });
      })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('v1/login', {
        email,
        password
      });

      const { name, id } = response.data.user;
      const { token } = response.data;

      setCookie(undefined, 'monzo.token', response.data.token, {
        maxAge: 60 * 60 * 24 * 38,
        path: '/'
      });

      setCookie(undefined, 'monzo.token', token);
      setCookie(undefined, 'monzo.refreshToken', token);
      setCookie(undefined, 'monzo.id', id);

      setUser({
        name,
        email,
        permissions: ['']
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      //Router.push('/portal/administration/dashboard');
      navigate('/dashboard');
    } catch (err) {
      if (err.message === "Network Error") {
        toast.error("Por favor verifique sua conexão com a internet!");
      } else if (err.message === "Request failed with status code 401") {
        toast.error("Usuário invalido!");
      } else if (err.message === "Request failed with status code 400") {
        toast.error("Usuário invalido!");
      } else {
        toast.error("Usuário invalido!");
      }
    }

    //saveLocalStorageData(response.data);
  }

  return (
    <AuthContext.Provider value={{ signIn, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}