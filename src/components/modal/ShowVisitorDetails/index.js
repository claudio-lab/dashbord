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

import { api } from './../../../services/api';

// import { Container } from './styles';

function ShowVisitorDetails({ isOpen, handleClose, appointmentId, status }) {
  const [appointmentDetails, setAppointmentDetails] = useState([]);
  const [statusAppointment, setStatusAppointment] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setStatusAppointment(status);
    getAppointmentById();

  }, [])

  async function getAppointmentById() {
    try {

      const response = await api.get(`v1/show_visitas/${appointmentId}`);
      setAppointmentDetails(response.data.data.agendamento[0]);


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
          <div className="ss"><span className="badge rounded-pill estado-bg-secondary">No condomínio</span></div>
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
                              <IoClipboardOutline /> <font className='font-size-14'>{appointmentDetails.observacao}</font>
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
                            :
                            (statusAppointment === 'Expirados') ?
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