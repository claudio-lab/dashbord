import React from 'react';
import {
  HiAdjustments,
  HiRefresh,
  HiOutlineSearch,
  HiOutlineEye
} from "react-icons/hi";
import {
  IoEllipsisHorizontal,
  IoCalendarOutline,
  IoPeopleOutline,
  IoCarSportOutline,
  IoClipboardOutline,
  IoTimeOutline,
  IoAlertCircleOutline,
  IoPersonOutline
} from "react-icons/io5";
import { Modal, Button, Spinner } from 'react-bootstrap';
import matheus from './../../../assets/photos/matheus.jpg'
import cassia from './../../../assets/photos/cassia.jpg'

// import { Container } from './styles';

function ShowVisitorDetails({ isOpen, handleClose, appointmentId, status }) {

  /*"id": 4909,
  "nome": "Eduarda Simões",
  "telefone": null,
  "status": "2",
  "data": "2022-11-17",
  "hora": "16:00:00",
  "motivo": "um campo não obrigatório...",
  "observacao": null,
  "created_at": "2022-11-17 16:08:02",
  "deleted_at": null,
  "end_observation": null,
  "entry_date": null,
  "exit_date": null,
  "user_id": 926,
  "foto": "https://apps.monzoyetu.com/images/resident/1666068087.jpg",
  "motivo_id": 1,
  "condominio_id": 1,
  "o_motivo": "Visita Familiar",
  "nome_morador": "Nilton",
  "residencia_morador": "L-1-Q-2",
  "lote": "2",
  "lot_id": 29,
  "quadra": "1",
  "quad_id": 34*/
  return <>
    <Modal show={isOpen} size="lg" backdrop="static" centered onHide={handleClose} className='border-0'>
      <Modal.Header closeButton className='border-0 pb-1'>
        <div>
          <h5 className='mt-1'>Detalhes</h5>
          <div className="ss"><span className="badge rounded-pill estado-bg-secondary">No condomínio</span></div>
        </div>
      </Modal.Header>
      <Modal.Body className='border-0'>
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-4">
              <div className="card border">
                <div className="card-body">
                  <div className=""><span className="badge rounded-pill estado-bg-primary">Agendamento</span></div>
                  <div className='d-flex mt-3 mb-3'>
                    <div className="avatar-mini">
                      <img src={cassia} alt="" />
                    </div>
                    <div className=' ms-2'>
                      <b>Cassia Fernandes</b><br />
                      <div className='font-size-12'>Morador</div>
                    </div>
                  </div>
                  <IoCalendarOutline /> <font className='font-size-14'>24/05/2022</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> 13h:30m</font><br />
                  <IoPersonOutline /> <font className='font-size-14'>Carla Fernandes</font><br />
                  <IoAlertCircleOutline /> <font className='font-size-14'>visita familiar</font><br />
                  <IoClipboardOutline /> <font className='font-size-14'>Sem obs</font>
                </div>
              </div>
            </div>
            {/*<div className="col-lg-4">
                <borderDashdetal/>
              </div>*/}
            <div className="col-lg-4">
              <div className="card border">
                <div className="card-body">
                  <div className="ss"><span className="badge rounded-pill estado-bg-secondary">Entrada</span></div>
                  <div className='d-flex mt-3 mb-3'>
                    <div className="avatar-mini">
                      <img src={matheus} alt="" />
                    </div>
                    <div className=' ms-2'>
                      <b>Matheus Francisco</b><br />
                      <div className='font-size-12'>porteiro</div>
                    </div>
                  </div>
                  <IoCalendarOutline /> <font className='font-size-14'>24/05/2022</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> 13h:30m</font><br />
                  <IoPeopleOutline /> <font className='font-size-14'>5 acompanhantes</font><br />
                  <IoCarSportOutline /> <font className='font-size-14'>Sem viatura</font><br />
                  <IoClipboardOutline /> <font className='font-size-14'>Sem obs</font>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  </>
}

export default ShowVisitorDetails;