import React, { useState, useEffect } from 'react';
import { Menu } from '../../components/Menu';
import {
  Link
} from "react-router-dom";
import { format } from 'date-fns';
import {
  HiAdjustments,
  HiRefresh,
  HiOutlineSearch,
  HiOutlineEye,
  HiOutlinePlusSm
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
import { MenuTop } from '../../components/MenuTop';
import { Modal, Button, } from 'react-bootstrap';

import './visita.scss';
import {
  Spinner,
  Collapse,
  Form
} from 'react-bootstrap';
import user from './../../assets/photos/user.png'
import cassia from './../../assets/photos/cassia.jpg'
import matheus from './../../assets/photos/matheus.jpg'


import { api } from '../../services/api';

function Garantia() {
  const [open1, setOpen1] = useState(false);

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
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    {/*--------------------------------------------*/ }

  const [appointments, setAppointments] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [telefone, setTelefone] = useState(false);
  const [nome, setNome] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [status, setStatus] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [cat, setCat] = useState('');
  const [subcat, setSubCat] = useState('');
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAppointments();
    getCategorias();

  }, []);

  async function listSubCat(id) {
    
    try {
     
      const response = await api.get(`v1/listLotes/${id}`);
      setSubCategorias(response.data);

      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        console.log("Por favor verifique sua conex??o com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a p??gina!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a p??gina!");
      } else if (error.status === 500) {
        console.log("Erro interno, por favor, contactar o suporte!");
      }
      setLoading(false);
    }
  }

  async function getCategorias() {
    try {
      const response = await api.get('v1/listCategoria/1');
      setCategorias(response.data);

      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        console.log("Por favor verifique sua conex??o com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a p??gina!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a p??gina!");
      } else if (error.status === 500) {
        console.log("Erro interno, por favor, contactar o suporte!");
      }
      setLoading(false);
    }
  }

  async function handleChangeFilterByDateFromTo() {
    
    try {
      setLoading(true);

      /*if (!from || !to) {
        setLoading(false);
        return;
      }*/

      if (status) {
        var stat = status;
       }else{
        var stat = '0000';

       }

       if (nome) {
        var nom = nome;
       }else{
        var nom = '';
       }

       if (telefone) {
        var tel = telefone;

       }else{
        var tel = '';

       }


      if (to) {

       if(from){}else{
        setLoading(false);
        return;
       }
        
      }

      if (subcat) {

        if(cat){}else{
         setLoading(false);
         return;
        }
         
      }

      const response = await api.get(`v1/list_reclamacao_g/1/${stat}?morador=${nom}&telefone=${tel}&categoria=${cat}&sub_categoria=${subcat}&de=${from}&ate=${to}`);
      setAppointments(response.data);
      setLoading(false);
  
    } catch (error) {
      if (error.message === "Network Error") {
        console.log("Por favor verifique sua conex??o com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar cursos, por favor, tente recarregar a p??gina!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar cursos, por favor, tente recarregar a p??gina!");
      } else if (error.status === 500) {
        console.log("Erro interno, por favor, contactar o suporte!");
      }
      setLoading(false);
    }
  }

  async function getAppointments() {
    try {
      const response = await api.get('v1/list_reclamacao_g/1/0000');
      setAppointments(response.data);
      console.log(response.data);

      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        console.log("Por favor verifique sua conex??o com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a p??gina!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a p??gina!");
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
        console.log("Por favor verifique sua conex??o com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a p??gina!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a p??gina!");
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
        console.log("Por favor verifique sua conex??o com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a p??gina!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a p??gina!");
      } else if (error.status === 500) {
        console.log("Erro interno, por favor, contactar o suporte!");
      }
      setLoading(false);
    }
  }

  return (
    <div className="dashboard">
      <main className='d-flex'>
        <Menu />
        <section className='w-100 h-100 height-overflow'>
          <MenuTop />
          <div className="p-4">
            <div className="container ">
              <div className='d-flex w-max-1200 justify-content-between'>
                <div><h4 className=''>Reclama????o garantia</h4></div>
                <div>
                  <Button
                    onClick={() => setOpen1(!open1)}
                    className='btn-sm'
                    aria-expanded={open1}
                  >
                    <HiAdjustments />
                  </Button>
                  <Button className='btn-sm ms-1'>
                    <HiRefresh />
                  </Button>
                 {/*<Button className='btn-sm ms-1' onClick={handleShow5}>
                    <HiOutlinePlusSm />
                  </Button>*/}
                </div>
              </div>
              <Collapse className='w-max-1200' in={open1}>
                <div id="example-collapse-text">
                  <div className="d-flex flex-row-reverse">
                    <div className='d-flex'>
                      <div className="w-280px">
                        <div className="input-group input-group-sm rounded mt-2 input-group-data">
                          <Form.Select onChange={(event) => { setStatus(event.target.value); }} className='border-0'>
                            <option value="0000">Todos estados</option>
                            <option value="pendente">Pendentes</option>
                            <option value="andamento">Em andamento</option>
                            <option value="concluido">Conclu??dos</option>
                            <option value="cancelado">Cancelados</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="input-group input-group-sm rounded mt-2 input-group-data">
                        <span className="input-group-text" id="basic-addon1"><b>De</b></span>
                        <input type="date" onChange={(event) => { setFrom(event.target.value); }} className="form-control" placeholder="Username" />
                        <span className="input-group-text" id="basic-addon1"><b>Ate</b></span>
                        <input type="date"  onChange={(event) => { setTo(event.target.value); }} className="form-control" placeholder="Username" />
                      </div>
                      <div className="input-group input-group-sm rounded mt-2 input-group-data">
                      <Form.Select className='border-0' onChange={(event) => { listSubCat(event.target.value); setCat(event.target.value);}} aria-label="Default select example">
                          <option value="">Todas quadra</option>
                          {
                            categorias?.data?.map(categoria => (
                              <option value={categoria.id}>{categoria.quadra}</option>
                            ))
                          }
                        </Form.Select>
                        <Form.Select className='border-0' onChange={(event) => { setSubCat(event.target.value);}}  aria-label="Default select example">
                          <option value="">Todos lotes</option>
                          
                          {
                            subcategorias?.data?.map(subcategoria => (
                              <option value={subcategoria.id}>{subcategoria.lote}</option>
                            ))
                          }
                        </Form.Select>
                      </div>
                      <div className="input-group input-group-sm rounded mt-2 input-group-data">
                        <input type="number" onKeyUp={(event) => { setTelefone(event.target.value);}} className="form-control" placeholder="Telefone" />
                      </div>
                      <div className="input-group input-group-sm rounded mt-2 input-group-data">
                        <input type="text" onKeyUp={(event) => { setNome(event.target.value);}} className="form-control" placeholder="Morador" />
                      </div>
                      <div className='mt-2 ms-2'>
                        <button type="button" onClick={() => { handleChangeFilterByDateFromTo(); console.log("passou..."); }} className="btn btn-primary btn-sm"><HiOutlineSearch /></button>
                      </div>
                      {/*<div className='mt-2 ms-2'>
                        <button type="button" className="btn btn-primary btn-sm"><HiOutlineEye /></button>
                      </div>*/}
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
                        <th className='ps-4'>Item</th>
                        <th>Titulo</th>
                          <th>Morador</th>
                          <th>Resid??ncia</th>
                          <th>Data</th>
                          <th>Estado</th>
                          <th className='text-right pe-4'>Detalhes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          !loading ?
                            appointments?.data?.map(appointment => (
                              <tr key={appointment.id}>
                                <th scope="row" className='ps-4'>
                                  {appointment.iten}
                                </th>
                                <td>{appointment.title}</td>
                                <td>{appointment.nome} <br></br> {appointment.telefone}</td>
                                <td>Q-{appointment.quadra} - L{appointment.lote}</td>
                                <td>{appointment.created_at}</td>
                                <td>
                                  {
                                    (appointment.status === '3') ?
                                      <span className="badge rounded-pill estado-bg-danger">Cancelado</span>
                                      : (appointment.status === '0') ? <span className="badge rounded-pill estado-bg-warning">Pendente</span>
                                        : (appointment.status === '1') ? <span className="badge rounded-pill estado-bg-primary">Em andamento</span>
                                            : <span className="badge rounded-pill estado-bg-success">Conclu??do</span>
                                  }
                                </td>
                                <td className='text-right pe-4'>
                                  <Button className="btn btn-light p-0 m-0 " /*</td>onClick={handleShow}*/>
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
      <Modal show={show} size="lg" backdrop="static" centered onHide={handleClose} className='border-0'>
        <Modal.Header closeButton className='border-0 pb-1'>
          <div>
            <h5 className='mt-1'>Detalhes</h5>
            <div className="ss"><span className="badge rounded-pill estado-bg-primary">Adendamento</span></div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span className="badge rounded-pill estado-bg-primary">Adendamento</span></div>
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
            <div className="ss"><span className="badge rounded-pill estado-bg-success">Concluido</span></div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span className="badge rounded-pill estado-bg-primary">Adendamento</span></div>
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
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className="ss"><span className="badge rounded-pill estado-bg-success">Saida</span></div>
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
            <div className="ss"><span className="badge rounded-pill estado-bg-warning">Expirado</span></div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span className="badge rounded-pill estado-bg-primary">Agendado</span></div>
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
            <div className="ss"><span className="badge rounded-pill estado-bg-danger">Cancelado</span></div>

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
                    <div className=""><span className="badge rounded-pill estado-bg-primary">Agendado</span></div>
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
            <div className="ss"><span className="badge rounded-pill estado-bg-secondary">No condom??nio</span></div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span className="badge rounded-pill estado-bg-primary">Adendamento</span></div>
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
            {/*modal*/}
            <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton className='border-0'>
          <h5 className='mt-3'>Adicionar Funcionario </h5>
        </Modal.Header>
        <Modal.Body className='pt-0'>
          <form action="">
            <label className='mt-2 mb-2'><b>Nome *</b></label>
            <Form.Control type="text" placeholder="Nome de administrador" />
            <label className='mt-2 mb-2'><b>Telefone *</b></label>
            <Form.Control type="number" placeholder="Telefone" />
            <label className='mt-2 mb-2'><b>Email *</b></label>
            <Form.Control type="email" placeholder="Email" />
            <label className='mt-2 mb-2'><b>N??vel de Acesso *</b></label>
            <Form.Select aria-label="Default select example">
              <option value="">Selecione</option>
            </Form.Select>
            <label className='mt-2 mb-2'><b>Senha *</b></label>
            <Form.Control type="password" placeholder="Senha" />
            <label className='mt-2 mb-2'><b>Confirma senha *</b></label>
            <Form.Control type="password" placeholder="Confirma Senha" />
          </form>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Button variant="secondary" onClick={handleClose} className='btn-sm'>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose} className='btn-sm'>
            Adicional
          </Button>
        </Modal.Footer>
      </Modal>
      {/*modal*/}
      {/*modal*/}
      <Modal show={show5}
        onHide={handleClose5}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton className='border-0'>
          <h5 className='mt-3'>Agendar Visita</h5>
        </Modal.Header>
        <Modal.Body className='pt-0'>
          <form action="">
            <label className='mt-2 mb-2'><b>Nome *</b></label>
            <Form.Control type="text" placeholder="Nome do visitante" />
            <div className="row">
              <div className='col-6'>
              <label className='mt-2 mb-2'><b>Data da Visita * *</b></label>
              <Form.Control type="date"/>
              </div>
              <div className='col-6'>
              <label className='mt-2 mb-2'><b>Hora *</b></label>
              <Form.Control type="time"/>
              </div>
            </div>
            <label className='mt-2 mb-2'><b>Motivo da Visita *</b></label>
            <textarea className="form-control" placeholder="Nome do visitante" rows="3"></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Button variant="secondary" onClick={handleClose5} className='btn-sm'>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose5} className='btn-sm'>
            Adicional
          </Button>
        </Modal.Footer>
      </Modal>
      {/*modal*/}
    </div>
  );
}

export default Garantia;