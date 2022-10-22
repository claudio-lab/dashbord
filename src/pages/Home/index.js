import React, { useState, useEffect } from 'react';
import {
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineHome,
  HiOutlineViewGrid,
  HiDotsHorizontal
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
import { FaUserCheck } from 'react-icons/fa';
import { Modal, Button, Spinner } from 'react-bootstrap';
import './home.scss';
import { Menu } from '../../components/Menu';
import { MenuTop } from '../../components/MenuTop';
import BarChart from '../../components/BarChart';
import { UserData } from "./../../Data";

import { api } from './../../services/api';

import daniel from './../../assets/photos/daniel.jpg'
import marisa from './../../assets/photos/marisa.jpg'
import chiao from './../../assets/photos/chiao.jpg'
import cassia from './../../assets/photos/cassia.jpg'
import matheus from './../../assets/photos/matheus.jpg'
import paula from './../../assets/photos/paula.jpg'

function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  {/*--------------------------------------------*/ }
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  {/*--------------------------------------------*/ }
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  {/*--------------------------------------------*/ }
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  {/*--------------------------------------------*/ }
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  {/*--------------------------------------------*/ }
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Monzoyeto",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#84a7d7",
          "#4a79bb",
        ],
        borderWidth: 0,
        barPercentage: 0.5,
        barThickness: 10,
        maxBarThickness: 16,
        minBarLength: 2,
        borderRadius: 50,
        data: [60, 40, 30, 60, 80, 50, 30, 50, 80, 70, 30, 30]
      },
    ],
  });

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAppointments();

  }, []);

  async function getAppointments() {
    try {
      const response = await api.get('v1/list_visitas/1/0000');
      setAppointments(response.data);

      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        console.log("Por favor verifique sua conexão com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar cursos, por favor, tente recarregar a página!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar cursos, por favor, tente recarregar a página!");
      } else if (error.status === 500) {
        console.log("Erro interno, por favor, contactar o suporte!");
      }
      setLoading(false);
    }
  }

  async function handlePrevPage(link) {
    try {
      setLoading(true);
      const response = await api.get(link);
      setAppointments(response.data);

      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        console.log("Por favor verifique sua conexão com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar cursos, por favor, tente recarregar a página!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar cursos, por favor, tente recarregar a página!");
      } else if (error.status === 500) {
        console.log("Erro interno, por favor, contactar o suporte!");
      }
      setLoading(false);
    }
  }

  async function handleNextPage(link) {
    try {
      setLoading(true);
      const response = await api.get(link);
      setAppointments(response.data);

      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        console.log("Por favor verifique sua conexão com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar cursos, por favor, tente recarregar a página!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar cursos, por favor, tente recarregar a página!");
      } else if (error.status === 500) {
        console.log("Erro interno, por favor, contactar o suporte!");
      }
      setLoading(false);
    }
  }

  return (
    <div className="home">
      <MenuTop />
      <div className="p-4">
        <div className="container">
          <h4 className='mb-4'>Painel de controle</h4>
          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="card">
                <div className="card-body d-flex justify-content-between pb-3">
                  <div>
                    <font className="font-size-15 font-sub-title"><b>Moradores</b></font>
                    <h4>500</h4>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className="card-icon-primary">
                      <HiOutlineUserGroup className='icon-card' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="card">
                <div className="card-body pb-3 d-flex justify-content-between">
                  <div>
                    <font className="font-size-15 font-sub-title"><b>Porteiros</b></font>
                    <div className="d-flex">
                      <h4>24</h4>
                    </div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className="card-icon-success">
                      <HiOutlineUsers className='icon-card' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="card">
                <div className="card-body d-flex justify-content-between pb-3">
                  <div>
                    <font className="font-size-15 font-sub-title"><b>Quadras</b></font>
                    <div className="d-flex">
                      <h4>2500</h4>
                    </div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className="card-icon-danger">
                      <HiOutlineViewGrid className='icon-card' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="card">
                <div className="card-body d-flex justify-content-between pb-3">
                  <div>
                    <font className="font-size-15 font-sub-title"><b>Lotes</b></font>
                    <div className="d-flex">
                      <h4>500</h4>
                    </div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className="card-icon-warning">
                      <HiOutlineHome className='icon-card' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashbord  p-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className="card border-0">
                <div className="card-body">
                  <h5>Visitas -  2022</h5>
                  <BarChart chartData={userData} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0">
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <h5> Comunicado</h5>
                  </div>
                  <div className='div-comunicad  mb-3'>
                    <div className='border-bottom pb-3 mt-4'>
                      <div className="user-comu d-flex justify-content-between mb-2">
                        <b>Lorem ipsum </b> <font className="font-size-12">20/09/2022</font>
                      </div>
                      orem ipsum dolor, sit amet consectetur adipisicing elit. Iste, delectus ipsum
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-0 card-table">
            <div className="card-body pb-2">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Agendamentos</h5>
                </div>
              </div>
            </div>
            <div className='table-h'>
              <table class="table">
                <thead>
                  <tr>
                    <th className='ps-4'>Morador</th>
                    <th>Visitante</th>
                    <th>Residência</th>
                    <th>Data</th>
                    <th>Estado</th>
                    <th className='text-right pe-4'>Detalhes</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    !loading ?
                      appointments?.data?.map(appointment => (
                        <tr>
                          <th scope="row" className='ps-4'>
                            <div className="vatar-tab">
                              <FaUserCheck />
                            </div>
                          </th>
                          <td>{appointment.nome_morador}</td>
                          <td>{appointment.nome}</td>
                          <td>{appointment.residencia_morador}</td>
                          <td>
                            {
                              (appointment.status === '0') ?
                                <span class="badge rounded-pill estado-bg-danger">Cancelado</span>
                                : (appointment.status === '1') ? <span class="badge rounded-pill estado-bg-warning">Expirado</span>
                                  : (appointment.status === '2') ? <span className="badge rounded-pill estado-bg-primary">Agendado</span>
                                    : (appointment.status === '3') ? <span class="badge rounded-pill estado-bg-secondary">No condomínio </span>
                                      : <span class="badge rounded-pill estado-bg-success">Concluído</span>
                            }
                          </td>
                          <td className='text-right pe-4'>
                            <Button className="btn btn-light p-0 m-0 " onClick={handleShow}>
                              <IoEllipsisHorizontal />
                            </Button>
                          </td>
                        </tr>
                      ))
                      :
                      <>
                        <tr>
                          <td
                            colSpan={7}
                            className="text-center"
                          >
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            Carregando...
                          </td>

                        </tr>
                      </>
                  }
                </tbody>
              </table>
            </div>
            <div className="card-body pt-0">
              <div className="d-flex justify-content-between">
                <div className='pt-2'>
                  {
                    !loading ?

                      appointments?.from + ' - ' + appointments?.to + '- ' + appointments?.total : '0 - 0 itens '

                  }
                  itens
                </div>
                <div>
                  <nav className='nav-pagination'>
                    <ul className="pagination">
                      {
                        !loading ?

                          appointments?.prev_page_url ?
                            <li className="page-item"><button className="page-link" onClick={() => handlePrevPage(appointments?.prev_page_url)} href="#">&laquo;</button></li>
                            : <li className="page-item"><button className="page-link">&laquo;</button></li>
                          :
                          <>
                            <li className="page-item"><button className="page-link">&laquo;</button></li>
                          </>
                      }

                      {
                        appointments?.next_page_url ?
                          <li className="page-item"><button className="page-link" onClick={() => handleNextPage(appointments?.next_page_url)}>&raquo;</button></li>
                          : <li className="page-item"><button className="page-link" >&raquo;</button></li>
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} size="lg" backdrop="static" centered onHide={handleClose} className='border-0'>
        <Modal.Header closeButton className='border-0 pb-1'>
          <div>
            <h5 className='mt-1'>Detalhes</h5>
            <div className="ss"><span class="badge rounded-pill estado-bg-primary">Adendamento</span></div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span class="badge rounded-pill estado-bg-primary">Adendamento</span></div>
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={show1} size="lg" backdrop="static" centered onHide={handleClose1} className='border-0'>
        <Modal.Header closeButton className='border-0 pb-1'>
          <div>
            <h5 className='mt-1'>Detalhes</h5>
            <div className="ss"><span class="badge rounded-pill estado-bg-success">Concluido</span></div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span class="badge rounded-pill estado-bg-primary">Adendamento</span></div>
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
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className="ss"><span class="badge rounded-pill estado-bg-secondary">Entrada</span></div>
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
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className="ss"><span class="badge rounded-pill estado-bg-success">Saida</span></div>
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
                    <IoClipboardOutline /> <font className='font-size-14'>Morador: Sem obs</font> <br />
                    <IoClipboardOutline /> <font className='font-size-14'>Porteiro : Sem obs</font> <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={show2} size="lg" backdrop="static" centered onHide={handleClose2} className='border-0'>
        <Modal.Header closeButton className='border-0 pb-1'>
          <div>
            <h5 className='mt-1'>Detalhes</h5>
            <div className="ss"><span class="badge rounded-pill estado-bg-warning">Expirado</span></div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span class="badge rounded-pill estado-bg-primary">Agendado</span></div>
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={show3} size="lg" backdrop="static" centered onHide={handleClose3} className='border-0'>
        <Modal.Header closeButton className='border-0 pb-1'>
          <div>
            <h5 className='mt-1'>Detalhes</h5>
            <div className="ss"><span class="badge rounded-pill estado-bg-danger">Cancelado</span></div>

            <div className='mt-3'>
              <IoClipboardOutline /> <font className='font-size-14'>Sem obs</font>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span class="badge rounded-pill estado-bg-primary">Agendado</span></div>
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={show4} size="lg" backdrop="static" centered onHide={handleClose4} className='border-0'>
        <Modal.Header closeButton className='border-0 pb-1'>
          <div>
            <h5 className='mt-1'>Detalhes</h5>
            <div className="ss"><span class="badge rounded-pill estado-bg-secondary">No condomínio</span></div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span class="badge rounded-pill estado-bg-primary">Adendamento</span></div>
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
                    <div className="ss"><span class="badge rounded-pill estado-bg-secondary">Entrada</span></div>
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
    </div>
  );
}
export default Home;