import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { api } from './../../services/api';



export const AuthContext = createContext();

export function signOut() {
  destroyCookie(undefined, 'monzo.token');
  //destroyCookie(undefined, 'monzo.token');
  destroyCookie(undefined, 'monzo.id');

  //Router.push('/portal/login');
  return window.location.href = '/';
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const isAuthenticated = !!user;
  const navigate = useNavigate();

  useEffect(() => {
    const { 'monzo.token': token, 'monzo.id': id } = parseCookies();

    if (token) {
      /*api.get('v1/me/' + id).then((response) => {
        const { nome, email } = response.data.dados;

        setUser({
          name: nome,
          email,
          permissions: ['']
        });
      })
        .catch(() => {
          signOut();
        });*/
    }
  }, []);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('v1/login', {
        email,
        password
      });

      const { nome, id } = response.data.user;
      const { token } = response.data.token;

      console.log(token, response.data.token);

      setCookie(undefined, 'monzo.token', response.data.token, {
        maxAge: 60 * 60 * 24 * 38,
        path: '/'
      });

      setCookie(undefined, 'monzo.token', response.data.token);
      setCookie(undefined, 'monzo.id', id);

      setUser({
        name: nome,
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
      } else if (err.response.status === 404) {
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