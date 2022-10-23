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
      setLoading(true);

      if (!email) return toast.error("Email é obrigatório!");
      if (!passwordInput) return toast.error("A senha é obrigatória!");

      const data = {
        email,
        password: passwordInput
      }



      //setLoading(true);
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
                <div className=" mb-3">
                  <h1>MonzoYetu</h1>
                  Bem vindo de volta! Por favor acesse sua conta
                </div>
                <form onSubmit={handleLogin}>
                  <label>Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mt-1 border h-45 font-size-14 mb-3" placeholder="email" required />
                  <div className="d-flex justify-content-between">
                    <label>Senha</label>
                    <Link to="/toRecover" className='a-link-form'>Esqueceu a senha?</Link>
                  </div>
                  <div className="input-group">
                    <input type={passwordType} onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput} className="form-control border-end-0 mt-1 border h-45 font-size-14 mb-3" placeholder="senha" required />
                    <span className="btn border h-45 border-start-0 pt-2 mt-1" onClick={togglePassword}>
                      {passwordType === "password" ? <IoEye /> : <IoEyeOff />}
                    </span>
                  </div>
                  <div className='d-grid'>
                    {
                      !loading ? <button type="submit" className="btn btn-primary mb-3 h-45 font-size-14">Entrar</button> : <button disabled className="btn btn-primary mb-3 h-45 font-size-14">Entrando...</button>
                    }
                  </div>
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