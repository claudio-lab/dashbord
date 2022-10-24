import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form
} from 'react-bootstrap';
import {
  IoEye,
  IoEyeOff
} from "react-icons/io5";
function ChangePassword() {

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  }
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const [passwordType2, setPasswordType2] = useState("password");
  const [passwordInput2, setPasswordInput2] = useState("");
  const handlePasswordChange2 = (evnt) => {
    setPasswordInput2(evnt.target.value);
  }
  const togglePassword2 = () => {
    if (passwordType2 === "password") {
      setPasswordType2("text")
      return;
    }
    setPasswordType2("password")
  }

  return (
    <div className="login">
      <main className='d-flex'>
        <section className='from-login  h-100 w-100 d-flex align-items-center'>
          <div className="container pt-5 pb-5">
            <div className="row justify-content-center">
              <div className="col-lg-3">
                <div className="">
                  <h1>MonzoYetu</h1>
                  <h4>Alterar senha</h4>
                </div>
                <Form className='mt-4'>
                  {/*<div className="alert alert-danger mb-4  border-0" role="alert">
                <b>Senha</b> fraca
              </div>
              <div className="alert alert-success border-0" role="alert">
                Senha <b>alterada</b> com sucesso
              </div>*/}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nova senha</Form.Label>
                    <div className="input-group">
                      <Form.Control type={passwordType} onChange={handlePasswordChange} value={passwordInput} placeholder="Senha" className='border border-end-0 height-45 imput-from' />
                      <span className="btn border border-start-0 pt-2" onClick={togglePassword}>
                        {passwordType === "password" ? <IoEye /> : <IoEyeOff />}
                      </span>
                    </div>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword" className='mt-3'>
                    <div className="d-flex justify-content-between">
                      <Form.Label>Confirma nova senha</Form.Label>
                    </div>
                    <div className="input-group">
                      <Form.Control type={passwordType2} onChange={handlePasswordChange2} value={passwordInput2} placeholder="Senha" className='border border-end-0 height-45 imput-from' />
                      <span className="btn border border-start-0 pt-2" onClick={togglePassword2}>
                        {passwordType2 === "password" ? <IoEye /> : <IoEyeOff />}
                      </span>
                    </div>
                  </Form.Group>
                  <div className='mt-4 d-grid'>
                    <Button variant="primary" type="submit" className='height-45 imput-from'>
                      Alterar
                    </Button>
                    <div className='text-center mt-3'>
                      <Link to="/" className='a-link-form'>Voltar à tela de login</Link>
                    </div>
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
export default ChangePassword;