import React, { useState, useContext } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Spinner
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import {
  IoEye,
  IoEyeOff
} from "react-icons/io5";

import { AuthContext } from './../../components/contexts/AuthContext';


function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  }

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const [loading, setLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  function handleLogin(event) {
    event.preventDefault();
    try {


      if (!email) return toast.error("Email é obrigatório!");
      if (!passwordInput) return toast.error("A senha é obrigatória!");

      const data = {
        email,
        password: passwordInput
      }



      setLoading(true);
      signIn(data);
      setLoading(false);
      return;

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

      setEmail('');
      setPasswordInput('');
      setLoading(false);
    }
  }

  return (
    <div className="login">
      <main className='d-flex'>
        <section className='background'></section>
        <section className='from-login d-flex align-items-center'>
          <div className="container pt-5 pb-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="">
                  <h1>MonzoYetu</h1>
                  Bem vindo de volta! Por favor acesse sua conta
                </div>
                <form onSubmit={handleLogin}>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" required />
                  <input type="password" onChange={(e) => setPasswordInput(e.target.value)} className="form-control" placeholder="senha" required />
                  <button type="submit" className="btn btn-primary mb-3">entrars</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Login;