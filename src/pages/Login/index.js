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

      console.log(data);
      return;

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
                <Form className='mt-4' onSubmit={handleLogin}>
                  {/*<div className="alert alert-danger mb-4  border-0" role="alert">
                  <b>Senha</b> ou <b>email</b> inválido
                </div>*/}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="nome@endereco.com"
                      className='border height-45 imput-from'
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword" className='mt-3'>
                    <div className="d-flex justify-content-between">
                      <Form.Label>Senha</Form.Label>
                      <Form.Label><Link to="/toRecover" className='a-link-form'>Esqueceu a senha?</Link></Form.Label>
                    </div>
                    <div className="input-group">
                      <Form.Control
                        type={passwordType}
                        onChange={handlePasswordChange}
                        value={passwordInput}
                        placeholder="Senha"
                        className='border border-end-0 height-45 imput-from'
                        required
                      />
                      <span className="btn border border-start-0 pt-2" onClick={togglePassword}>
                        {passwordType === "password" ? <IoEye /> : <IoEyeOff />}
                      </span>
                    </div>
                  </Form.Group>


                  {
                    !loading ?
                      <>
                        <div className='mt-4 d-grid'>
                          <button
                            variant="primary"
                            type="submit"
                            className='height-45 imput-from'
                          >
                            Entrar
                          </button>

                        </div>

                      </>
                      :
                      <>
                        <div className='mt-4 d-grid'>
                          <Button
                            variant="primary"
                            disabled
                            className='height-45 imput-from'
                          >
                            <Spinner animation="grow" className="me-2" size="sm" role="status"></Spinner>
                            Entrando...
                          </Button>

                        </div>

                      </>
                  }
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Login;