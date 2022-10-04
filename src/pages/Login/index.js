import React, { useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import { 
  Button,
  Form 
} from 'react-bootstrap';
import { 
  IoEye, 
  IoEyeOff 
} from "react-icons/io5";
function Login() {
  const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
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
                <Form className='mt-4'>
                {/*<div className="alert alert-danger mb-4  border-0" role="alert">
                  <b>Senha</b> ou <b>email</b> inválido
                </div>*/}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="nome@endereço.com" className='border height-45 imput-from'/>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword" className='mt-3'>
                    <div className="d-flex justify-content-between">
                    <Form.Label>Senha</Form.Label>
                    <Form.Label><Link to="/toRecover" className='a-link-form'>Esqueceu a senha?</Link></Form.Label>
                    </div>
                    <div className="input-group">
                    <Form.Control type={passwordType} onChange={handlePasswordChange} value={passwordInput} placeholder="Senha" className='border border-end-0 height-45 imput-from'/>
                    <span className="btn border border-start-0 pt-2" onClick={togglePassword}>
                     { passwordType==="password"? <IoEye/> : <IoEyeOff/> }
                     </span>
                    </div>
                  </Form.Group>
                  <div className='mt-4 d-grid'>
                    <Button variant="primary" type="submit" className='height-45 imput-from'>
                      Entrar
                    </Button>
                  </div>
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