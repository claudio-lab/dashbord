import React from 'react';
import './erro400.scss'
function Erro400() {
  return (
    <div className="erro400 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6>404 ERROR</h6>
            <h1><b>There’s no page here</b></h1>
            <p className='mt-3'>Looks like you ended up here by accident?</p>
            <button type="button" className="font-size-14 btn btn-primary mt-3 height-45">Return to your dashboard</button>
          </div> 
        </div>
      </div>
    </div>
  );
}
export default Erro400;