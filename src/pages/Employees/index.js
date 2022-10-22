import React, { useState, useEffect } from 'react';
import { Menu } from '../../components/Menu';
import { 
  Link
} from "react-router-dom";
import { 
  HiAdjustments,
  HiRefresh,
  HiOutlineSearch,
  HiOutlineEye,
  HiOutlineUserCircle
} from "react-icons/hi";
import { 
  IoEllipsisHorizontal,
  IoCalendarOutline,
  IoTimeOutline, 
} from "react-icons/io5";
import { MenuTop } from '../../components/MenuTop';
import { Spinner, Modal, Button,  } from 'react-bootstrap';
import { Collapse, Form } from 'react-bootstrap';
import marisa from './../../assets/photos/marisa.jpg'
import chiao from './../../assets/photos/chiao.jpg'
import cassia from './../../assets/photos/cassia.jpg'
import matheus from './../../assets/photos/matheus.jpg'
import paula from './../../assets/photos/paula.jpg'
import { api } from './../../services/api';
function Employees() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow= () => setShow(true);

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAppointments();

  }, []);


  async function getAppointments() {
    try {
      const response = await api.get('v1/list_funcionario/1');
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
          <div><h4 className=''>Funcionários das Residências</h4></div>
           <div>
           <Button
          onClick={() => setOpen1(!open1)}
          className='btn-sm'
          aria-expanded={open1}
        >
          <HiAdjustments/>
        </Button>
        <Button
          onClick={() => setOpen2(!open2)}
          className='btn-sm ms-1'
          aria-expanded={open2}
        >
          <HiOutlineUserCircle/>
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
              <div className='input-group input-group-sm  me-3 rounded mt-2 w-100px input-group-data'>
              <span className="input-group-text" id="basic-addon1"><b>Estado</b></span>
              <Form.Select className='border-0 ' aria-label="Default select example">
                <option>Todas</option>
                <option value="1">Dentro do condominio</option>
                <option value="2">Fora do condominio</option>
              </Form.Select>
              </div>
              <div className="input-group input-group-sm rounded mt-2 input-group-data">
              <span className="input-group-text" id="basic-addon1"><b>De</b></span>
              <input type="date" className="form-control" placeholder="Username" />
              <span className="input-group-text" id="basic-addon1"><b>Ate</b></span>
              <input type="date" className="form-control" placeholder="Username" />
              </div>
              <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
              <Form.Select className='border-0' aria-label="Default select example">
                <option>Todas quadra</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select className='border-0' aria-label="Default select example">
                <option>Todos lotes</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select className='border-0' aria-label="Default select example">
                <option>Todos Funcionarios</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              </div>
              <div className='mt-2 ms-2'>
              <button type="button" class="btn btn-primary btn-sm"><HiOutlineSearch/></button>
              </div>
              <div className='mt-2 ms-2'>
              <button type="button" class="btn btn-primary btn-sm"><HiOutlineEye/></button>
              </div>
              </div>
              </div>
            </div>
          </Collapse>
          <Collapse className='w-max-1200' in={open2}>
            <div id="example-collapse-text">
              <div className="d-flex flex-row-reverse">
              <div>
              <div className='input-group w-100px input-group-sm  rounded mt-2 w-280px input-group-data'>
              <span className="input-group-text" id="basic-addon1"><b>Porteiro</b></span>
              <Form.Select className='border-0 ' aria-label="Default select example">
                <option>Todos</option>
                <option value="1">Marcio Morais</option>
                <option value="2">Antonio Martins</option>
              </Form.Select>
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
                                      <span className="badge rounded-pill estado-bg-primary">Cancelado</span>
                                      : (appointment.status === '1') ? <span className="badge rounded-pill estado-bg-primary">Activo</span>
                                        : (appointment.status === '2') ? <span className="badge rounded-pill estado-bg-danger">Desativado</span>
                                            : <span className="badge rounded-pill estado-bg-primary">Concluído</span>
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
    <Modal show={show}  size="lg" backdrop="static" centered onHide={handleClose} className='border-0'>
    <Modal.Header closeButton className='border-0 pb-1'>
        <div>
        <h5 className='mt-1'>Detalhes</h5>
        </div>
      </Modal.Header>
      <Modal.Body className='border-0'>
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-4">
              <div className="card border">
                <div className="card-body">
                  <div className='d-flex mt-3 mb-3'>
                    <div className="avatar-mini">
                      <img src={matheus} alt="" />
                    </div>
                    <div className=' ms-2'>
                      <b>Matheus Fernandes</b><br />
                      <div className='font-size-12'>Porteiro</div>
                    </div>
                  </div>
                  <IoCalendarOutline/> <font className='font-size-14'>24/05/2022</font> <IoTimeOutline className='ms-3'/> <font className='font-size-14'> 13h:30m</font><br />
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

export default Employees;