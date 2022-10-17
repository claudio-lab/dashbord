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