import React, { useState, useEffect } from 'react';
import { Menu } from '../../components/Menu';
import { 
  Link
} from "react-router-dom";
import { 
  HiOutlineUserGroup, 
  HiOutlineUsers,
  HiOutlineHome,
  HiOutlineViewGrid,
  HiDotsHorizontal,
  HiSearch,
  HiAdjustments,
  HiRefresh,
  HiOutlineSearch,
  HiOutlineEye,
  HiOutlineUserCircle
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
import { MenuTop } from '../../components/MenuTop';
import { Modal, Button, Spinner } from 'react-bootstrap';

import {Card, 
        Table,
        Dropdown, 
        Collapse,
        Form 
} from 'react-bootstrap';
import marisa from './../../assets/photos/marisa.jpg'
import chiao from './../../assets/photos/chiao.jpg'
import cassia from './../../assets/photos/cassia.jpg'
import matheus from './../../assets/photos/matheus.jpg'
import paula from './../../assets/photos/paula.jpg'
import { api } from './../../services/api';
function Announcement() {
  const [open1, setOpen1] = useState(false);

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAppointments();

  }, []);


  async function getAppointments() {
    try {
      const response = await api.get('v1/logs_morador/1');
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
    <div className="dashboard">
    <main className='d-flex'>
      <Menu/>
      <section className='w-100 h-100 height-overflow'>
        <MenuTop/>
      <div className="p-4">
          <div className="container">
          <div className='d-flex w-max-1200 justify-content-between'>
          <div><h4 className=''>Comunicados</h4></div>
           <div>
           <Button
          onClick={() => setOpen1(!open1)}
          className='btn-sm'
          aria-expanded={open1}
        >
          <HiAdjustments/>
        </Button>
        <Button className='btn-sm ms-1'>
          <HiRefresh/>
        </Button>
          </div>            
          </div>
          <Collapse className='w-max-1200' in={open1}>
            <div id="example-collapse-text">
              <div className="d-flex flex-row-reverse">
              <div className='d-flex'>
              <div className="input-group input-group-sm rounded mt-2 input-group-data">
                <span className="input-group-text" id="basic-addon1"><b>De</b></span>
                <input type="date" className="form-control" placeholder="Username" />
                <span className="input-group-text" id="basic-addon1"><b>Ate</b></span>
                <input type="date" className="form-control" placeholder="Username" />
                </div>
              <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
              <input type="text" class="form-control"  placeholder="Pesquisar titulo"/>
              </div>
              <div className='mt-2 ms-2'>
              <button type="button" class="btn btn-primary btn-sm"><HiOutlineSearch/></button>
              </div>
              </div>
              </div>
            </div>
          </Collapse>

          <div className='mt-4'>
          <div className="card border-0 card-table">
          <div className="card-body pb-2"></div>
              <div className='table-h'>
                <table className="table">
                <thead>
                    <tr>
                    <th className='ps-4'>Avatar</th>
                      <th>Nome</th>
                      <th>Residencia</th>
                      <th>Cargo</th>
                      <th>Telefone</th>
                      <th>Morador</th>
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
                                  <img src={appointment.foto} alt="" />
                                </div>
                                </th>
                                <td>{appointment.nome}</td>
                                <td>Lote {appointment.lote} - Quadra {appointment.quadra}</td>
                                <td>{appointment.cargo}</td>
                                <td>{appointment.telefone}</td>
                                <td>{appointment.moradoror}</td>
                                <td>
                                  {
                                    (appointment.status === '0') ?
                                      <span className="badge rounded-pill estado-bg-success">Em serviço</span>
                                      : (appointment.status === '1') ? <span className="badge rounded-pill estado-bg-success">Em serviço</span>
                                        : (appointment.status === '2') ? <span className="badge rounded-pill estado-bg-danger">Fora de serviço</span>
                                            : <span className="badge rounded-pill estado-bg-success">Em serviço</span>
                                  }
                                </td>
                                <td className='text-right pe-4'>
                                <Link to="/detalhesComunicado" className="p-0 rounded-pill btn btn-light"><HiOutlineEye/></Link>
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
                      <div className='pt-2'> {
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

                            {/*<li className="page-item"><a className="page-link border-0 activee" href="#">1</a></li>
                            <li className="page-item"><a className="page-link border-0" href="#">2</a></li>
                            <li className="page-item"><a className="page-link border-0" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>*/}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
          </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  </div>
  );
}

export default Announcement;