import React, { useState, useEffect } from 'react';
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
import { format } from 'date-fns';
import { api } from './../../../services/api';

// import { Container } from './styles';

function ShowVisitorDetails({ isOpen, handleClose, appointmentId, status ,status_n}) {
  const [appointmentDetails, setAppointmentDetails] = useState([]);
  const [appointmentPort, setport] = useState([]);
  const [appointmentPortS, setportS] = useState([]);
  const [statusAppointment, setStatusAppointment] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setStatusAppointment(status);
    getAppointmentById();

  }, []) 

  async function getAppointmentById() {   
    try {

      const stat = status_n;
      console.log(stat);
      if (stat == '0') {
        const response = await api.get(`v1/show_visitas/${appointmentId}?status=${stat}`);
        setAppointmentDetails(response.data.data.agendamento[0]);
        console.log(response.data.data.agendamento[0]);
      } else if (stat == '1') {
        const response = await api.get(`v1/show_visitas/${appointmentId}?status=${stat}`);
        setAppointmentDetails(response.data.data.agendamento[0]);
        console.log(response.data.data.agendamento[0]);
      } else if (stat == '2') {
        const response = await api.get(`v1/show_visitas/${appointmentId}?status=${stat}`);
        setAppointmentDetails(response.data.data.agendamento[0]);
        console.log(response.data.data.agendamento[0]);
      } else if (stat == '3') {
        const response = await api.get(`v1/show_visitas/${appointmentId}?status=${stat}`);
        setAppointmentDetails(response.data.data.agendamento[0]);
        setport(response.data.data.porteiro[0]);
      } else if (stat == '4') {
        const response = await api.get(`v1/show_visitas/${appointmentId}?status=${stat}`);
        setAppointmentDetails(response.data.data.agendamento[0]);
        console.log(response.data.data.agendamento[0]);
        setport(response.data.data.porteiro[0]);
        setportS(response.data.data.porteiro_s[0]);
      } else {
       
      }
      


      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        console.log("Por favor verifique sua conexão com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a página!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a página!");
      } else if (error.status === 500) {
        console.log("Erro interno, por favor, contactar o suporte!");
      }
      setLoading(false);
    }
  }

  return <>
    <Modal show={isOpen} size="lg" backdrop="static" centered onHide={handleClose} className='border-0'>
      <Modal.Header closeButton className='border-0 pb-1'>
        <div>
          <h5 className='mt-1'>Detalhes</h5>
         
        </div>
      </Modal.Header>
      <Modal.Body className='border-0'>
        <div className="container p-0">
          <div className="row">
            {
              !loading ?
                <>
                  {
                    (statusAppointment === 'Agendamento') ?
                      <>
                        <div className="col-lg-4">
                          <div className="card border">
                            <div className="card-body">
                              <div className=""><span className="badge rounded-pill estado-bg-primary">Agendamento</span></div>
                              <div className='d-flex mt-3 mb-3'>
                                <div className="avatar-mini">
                                  <img src={appointmentDetails.foto ? appointmentDetails.foto : cassia} alt={appointmentDetails.nome_morador} />
                                </div>
                                <div className=' ms-2'>
                                  <b>{appointmentDetails.nome_morador}</b><br />
                                  <div className='font-size-12'>Morador</div>
                                </div>
                              </div>
                              <IoCalendarOutline /> <font className='font-size-14'>{appointmentDetails.data}</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> {appointmentDetails.hora}</font><br />
                              <IoPersonOutline /> <font className='font-size-14'>{appointmentDetails.nome}</font><br />
                              <IoAlertCircleOutline /> <font className='font-size-14'>{appointmentDetails.o_motivo}</font><br />
                              <IoClipboardOutline /> <font className='font-size-14'> {
                                    (appointmentDetails.observacao == null) ?
                                     'Sem observação'
                                      : appointmentDetails.observacao 
                                  }</font>
                            </div>
                          </div>
                        </div>
                      </>
                      :
                      (statusAppointment === 'NoCondominio') ?
                        <>
                          <div className="col-lg-4">
                            <div className="card border">
                              <div className="card-body">
                                <div className=""><span className="badge rounded-pill estado-bg-primary">Agendamento</span></div>
                                <div className='d-flex mt-3 mb-3'>
                                  <div className="avatar-mini">
                                    <img src={appointmentDetails.foto ? appointmentDetails.foto : cassia} alt={appointmentDetails.nome_morador} />
                                  </div>
                                  <div className=' ms-2'>
                                    <b>{appointmentDetails.nome_morador}</b><br />
                                    <div className='font-size-12'>Morador</div>
                                  </div>
                                </div>
                                <IoCalendarOutline /> <font className='font-size-14'>{appointmentDetails.data}</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'>  {appointmentDetails.hora}</font><br />
                                <IoPersonOutline /> <font className='font-size-14'>{appointmentDetails.nome}</font><br />
                                <IoAlertCircleOutline /> <font className='font-size-14'>{appointmentDetails.o_motivo}</font><br />
                                <IoClipboardOutline /> <font className='font-size-14'>
                                 
                                  {
                                    (appointmentDetails.observacao == null) ?
                                     'Sem observação'
                                      : appointmentDetails.observacao 
                                  }
                                  </font>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="card border">
                              <div className="card-body">
                                <div className="ss"><span className="badge rounded-pill estado-bg-secondary">Entrada</span></div>
                                <div className='d-flex mt-3 mb-3'>
                                  <div className="avatar-mini">
                                    <img src={matheus} alt="" />
                                  </div>
                                  <div className=' ms-2'>
                                    <b>{appointmentPort.nome}</b><br />
                                    <div className='font-size-12'>Porteiro</div>
                                  </div>
                                </div>
                                <IoCalendarOutline /> <font className='font-size-14'>{format(new Date(appointmentDetails.entry_date), "dd/MM/yyyy")}</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> {format(new Date(appointmentDetails.entry_date), "H:m")}m</font><br />
                                <IoPeopleOutline /> <font className='font-size-14'>

                                {
                                    (appointmentDetails.number_companions == null) ?
                                     'Sem acompanhantes'
                                      : appointmentDetails.number_companions +' acompanhantes'
                                  } 
                                  </font><br />
                                <IoCarSportOutline /> <font className='font-size-14'>
                                  {
                                    (appointmentDetails.came_by_car == '') ?
                                     'Sem viatura'
                                      : appointmentDetails.came_by_car 
                                  }
                                  </font><br />
                                <IoClipboardOutline /> <font className='font-size-14'>
                                  
                                  {
                                    (appointmentDetails.end_observation == null) ?
                                     'Sem observação'
                                      : appointmentDetails.end_observation 
                                  }
                                  </font>
                              </div>
                            </div>
                          </div>
                        </>
                        :

                        (statusAppointment === 'Concluidos') ?
                          <>
                            <div className="col-lg-4">
                              <div className="card border">
                                <div className="card-body">
                                  <div className=""><span className="badge rounded-pill estado-bg-primary">Agendamento</span></div>
                                  <div className='d-flex mt-3 mb-3'>
                                    <div className="avatar-mini">
                                      <img src={appointmentDetails.foto ? appointmentDetails.foto : cassia} alt={appointmentDetails.nome_morador} />
                                    </div>
                                    <div className=' ms-2'>
                                      <b>{appointmentDetails.nome_morador}</b><br />
                                      <div className='font-size-12'>Morador</div>
                                    </div>
                                  </div>
                                  <IoCalendarOutline /> <font className='font-size-14'>{appointmentDetails.data}</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> {appointmentDetails.hora}</font><br />
                                  <IoPersonOutline /> <font className='font-size-14'>{appointmentDetails.nome}</font><br />
                                  <IoAlertCircleOutline /> <font className='font-size-14'>{appointmentDetails.o_motivo}</font><br />
                                  <IoClipboardOutline /> <font className='font-size-14'>{appointmentDetails.observacao}</font>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4">
                            <div className="card border">
                              <div className="card-body">
                                <div className="ss"><span className="badge rounded-pill estado-bg-secondary">Entrada</span></div>
                                <div className='d-flex mt-3 mb-3'>
                                  <div className="avatar-mini">
                                    <img src={matheus} alt="" />
                                  </div>
                                  <div className=' ms-2'>
                                    <b>{appointmentPort.nome}</b><br />
                                    <div className='font-size-12'>Porteiro</div>
                                  </div>
                                </div>
                                <IoCalendarOutline /> <font className='font-size-14'>{format(new Date(appointmentDetails.entry_date), "dd/MM/yyyy")}</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> {format(new Date(appointmentDetails.entry_date), "H:m")}m</font><br />
                                <IoPeopleOutline /> <font className='font-size-14'>

                                {
                                    (appointmentDetails.number_companions == null) ?
                                     'Sem acompanhantes'
                                      : appointmentDetails.number_companions +' acompanhantes'
                                  } 
                                  </font><br />
                                <IoCarSportOutline /> <font className='font-size-14'>
                                  {
                                    (appointmentDetails.came_by_car == '') ?
                                     'Sem viatura'
                                      : appointmentDetails.came_by_car 
                                  }
                                  </font><br />
                                <IoClipboardOutline /> <font className='font-size-14'>
                                  
                                  {
                                    (appointmentDetails.end_observation == null) ?
                                     'Sem observação'
                                      : appointmentDetails.end_observation 
                                  }
                                  </font>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="card border">
                              <div className="card-body">
                                <div className="ss"><span className="badge rounded-pill estado-bg-success">Saida</span></div>
                                <div className='d-flex mt-3 mb-3'>
                                  <div className="avatar-mini">
                                    <img src={matheus} alt="" />
                                  </div>
                                  <div className=' ms-2'>
                                  <b>{appointmentPortS.nome}</b><br />
                                    <div className='font-size-12'>porteiro</div>
                                  </div>
                                </div>
                                <IoCalendarOutline /> <font className='font-size-14'>{format(new Date(appointmentDetails.exit_date), "dd/MM/yyyy")}</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> {format(new Date(appointmentDetails.exit_date), "H:m")}m</font><br />
                                <IoClipboardOutline /> <font className='font-size-14'>Morador: 
                                {
                                    (appointmentDetails.end_observation == null) ?
                                     ' Sem obs'
                                      : appointmentDetails.end_observation 
                                  }
                                </font> <br />
                                <IoClipboardOutline /> <font className='font-size-14'>Porteiro :
                                {
                                    (appointmentDetails.exit_observation == null) ?
                                     ' Sem obs'
                                      : appointmentDetails.exit_observation 
                                  }</font> <br />
                              </div>
                            </div>
                          </div>

                          </>
                          :
                          (statusAppointment === 'Cancelados') ?
                            <>
                              <div className="col-lg-4">
                                <div className="card border">
                                  <div className="card-body">
                                    <div className=""><span className="badge rounded-pill estado-bg-primary">Agendamento</span></div>
                                    <div className='d-flex mt-3 mb-3'>
                                      <div className="avatar-mini">
                                        <img src={appointmentDetails.foto ? appointmentDetails.foto : cassia} alt={appointmentDetails.nome_morador} />
                                      </div>
                                      <div className=' ms-2'>
                                        <b>{appointmentDetails.nome_morador}</b><br />
                                        <div className='font-size-12'>Morador</div>
                                      </div>
                                    </div>
                                    <IoCalendarOutline /> <font className='font-size-14'>{appointmentDetails.data}</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> {appointmentDetails.hora}</font><br />
                                    <IoPersonOutline /> <font className='font-size-14'>{appointmentDetails.nome}</font><br />
                                    <IoAlertCircleOutline /> <font className='font-size-14'>{appointmentDetails.o_motivo}</font><br />
                                    <IoClipboardOutline /> <font className='font-size-14'>{appointmentDetails.observacao}</font>
                                  </div>
                                </div>
                              </div>

                           
                            </>
                            :
                            (statusAppointment === 'Expirados') ?
                              <>
                                <div className="col-lg-4">
                                  <div className="card border">
                                    <div className="card-body">
                                      <div className=""><span className="badge rounded-pill estado-bg-warning">Expirado</span></div>
                                      <div className='d-flex mt-3 mb-3'>
                                        <div className="avatar-mini">
                                          <img src={appointmentDetails.foto ? appointmentDetails.foto : cassia} alt={appointmentDetails.nome_morador} />
                                        </div>
                                        <div className=' ms-2'>
                                          <b>{appointmentDetails.nome_morador}</b><br />
                                          <div className='font-size-12'>Morador</div>
                                        </div>
                                      </div>
                                      <IoCalendarOutline /> <font className='font-size-14'>{appointmentDetails.data}</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> {appointmentDetails.hora}</font><br />
                                      <IoPersonOutline /> <font className='font-size-14'>{appointmentDetails.nome}</font><br />
                                      <IoAlertCircleOutline /> <font className='font-size-14'>{appointmentDetails.o_motivo}</font><br />
                                      <IoClipboardOutline /> <font className='font-size-14'> {
                                            (appointmentDetails.observacao == null) ?
                                            'Sem observação'
                                              : appointmentDetails.observacao 
                                          }</font>
                                    </div>
                                  </div>
                                </div>
                              </>
                             
                              :
                              <>
                                <div className="col-lg-4">
                                  <div className="card border">
                                    <div className="card-body">
                                      <div className=""><span className="badge rounded-pill estado-bg-primary">Agendamento</span></div>
                                      <div className='d-flex mt-3 mb-3'>
                                        <div className="avatar-mini">
                                          <img src={appointmentDetails.foto ? appointmentDetails.foto : cassia} alt={appointmentDetails.nome_morador} />
                                        </div>
                                        <div className=' ms-2'>
                                          <b>{appointmentDetails.nome_morador}</b><br />
                                          <div className='font-size-12'>Morador</div>
                                        </div>
                                      </div>
                                      <IoCalendarOutline /> <font className='font-size-14'>{appointmentDetails.data}</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> {appointmentDetails.hora}</font><br />
                                      <IoPersonOutline /> <font className='font-size-14'>{appointmentDetails.nome}</font><br />
                                      <IoAlertCircleOutline /> <font className='font-size-14'>{appointmentDetails.o_motivo}</font><br />
                                      <IoClipboardOutline /> <font className='font-size-14'>{appointmentDetails.observacao}</font>
                                    </div>
                                  </div>
                                </div>

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
                              </>

                  }

                </>
                :
                <>
                  <Spinner />
                  Carregando...
                </>
            }

          </div>
        </div>
      </Modal.Body>
    </Modal>
  </>
}

export default ShowVisitorDetails;