import React from 'react';
import { 
  Button,
  Form 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ToRecover() {
  return (
    <div className="login">
    <main className='d-flex'>
    <section className='background'></section>
      <section className='from-login d-flex align-items-center'>
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="">
              <h1>MonzoYetu</h1>
              <h4>Recuperar senha</h4>
              </div>
              <Form className='mt-4'>
              {/*
                <div className="alert alert-danger mb-4  border-0" role="alert">
                Esse <b>email</b> não existe
              </div>
              <div class="alert alert-success border-0" role="alert">
                Acção realizada com <b>sucesso</b>, verifique seu email 
              </div>
              */}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="nome@endereço.com" className='border height-45 imput-from'/>
                </Form.Group>
                <div className='mt-4 d-grid'>
                  <Button variant="primary" type="submit" className='height-45 imput-from'>
                    Enviar
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
export default ToRecover;