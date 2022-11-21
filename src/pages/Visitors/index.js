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


import { api } from './../../services/api';
import ShowVisitorDetails from '../../components/modal/ShowVisitorDetails';

function Visitors() {
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
  //const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  //const handleShow4 = () => setShow4(true);
  const [show4, setShow4] = useState(false);
  function handleShow4(appointmentID,sta,status) {
    setAppointmentId(appointmentID);
    setAppointmentSta(sta);
    setAppointmentStatus(status);

    setShow4(true);
  }
  {/*--------------------------------------------*/ }
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  
  {/*--------------------------------------------*/ }

  const [appointments, setAppointments] = useState([]);
  const [appointmentId, setAppointmentId] = useState('');
  const [appointmentsta, setAppointmentSta] = useState('');
  const [appointmentstatus, setAppointmentStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [cat, setCat] = useState('');
  const [subcat, setSubCat] = useState('');
  const [morad, setMorador] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubCategorias] = useState([]);
  const [moradores, setMoradores] = useState([]);
  const [pdf, setpdf] = useState([]); 
  const [excel, setexcel] = useState([]); 

  
  useEffect(() => {
    setLoading(true);
    getAppointments();
    getCategorias();
    getMoradores();
  }, []);

  async function getPdf() {
    //console.log('ok', from, to, cat, subcat,morad);
    try {
      const pdf = `https://webapi.monzoyetu.com/api/v1/list_visitas_/1/0000?data_de=${from}&data_ate=${to}&categoria=${cat}&sub_categoria=${subcat}&morador=${morad}&export=pdf`;
      setpdf(pdf);

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
  async function getExcel() {
    //console.log('ok', from, to, cat, subcat,morad);
    try {
      const excel = `https://webapi.monzoyetu.com/api/v1/list_visitas_/1/0000?data_de=${from}&data_ate=${to}&categoria=${cat}&sub_categoria=${subcat}&morador=${morad}&export=excel`;
      setexcel(excel);

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

  async function getMoradores() {
    try {
      const response = await api.get('v1/list_moradores/1/0000?todos=all');
      setMoradores(response);
      console.log(response);

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

  async function listSubCat(id) {
    
    try {
      console.log(id);
      setSubCategorias([]);
      const response = await api.get(`v1/listLotes/${id}?todos=all`);
      setSubCategorias(response.data.data);

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

  async function getCategorias() {
    try {
      const response = await api.get('v1/listCategoria/1?todos=all');
      setCategorias(response.data.data);
     
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

  async function getAppointments() {
    try {
      const response = await api.get('v1/list_visitas/1/0000');
      setAppointments(response.data);
     
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

  async function handleChangeFilterByDateFromTo() {
    //console.log('ok', from, to, cat, subcat,morad);
    try {
      setLoading(true);

      /*if (!from || !to) {
        setLoading(false);
        return;
      }*/

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

      const response = await api.get(`v1/list_visitas/1/0000?data_de=${from}&data_ate=${to}&categoria=${cat}&sub_categoria=${subcat}&morador=${morad}`);
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
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a página!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a página!");
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
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a página!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a página!");
      } else if (error.status === 500) {
        console.log("Erro interno, por favor, contactar o suporte!");
      }
      setLoading(false);
    }
  }

  async function handleFilterFromDate(date) {
    setLoading(true);

    if (!date)
      return getAppointments();

    try {

      const data = {
        data_de: format(new Date(date), 'yyyy-MM-dd'),
      }

      const response = await api.post('v1/filtro_visitas', data);
      console.log(response.data)
      setAppointments(response.data.agendamento.data);
      setStartDate(format(new Date(date), 'yyyy-MM-dd'));

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

  async function handleFilterFromDateToEndDate(end_date) {
    setLoading(true);

    if (!end_date)
      return getAppointments();

    try {

      const data = {
        data_de: startDate,
        data_ate: format(new Date(end_date), 'yyyy-MM-dd'),
      }

      const response = await api.post('v1/filtro_visitas', data);
      console.log(response.data)
      setAppointments(response.data.agendamento.data);
      setEndDate(format(new Date(end_date), 'yyyy-MM-dd'));

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

  return (
    <div className="dashboard">
      <main className='d-flex'>
        <Menu />
        <section className='w-100 h-100 height-overflow'>
          <MenuTop />
          <div className="p-4">
            <div className="container ">
              <div className='d-flex w-max-1200 justify-content-between'>
                <div><h4 className=''>Visitantes</h4></div>
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
                  <Button className='btn-sm ms-1' onClick={handleShow5}>
                    <HiOutlinePlusSm />
                  </Button>
                </div>
              </div>
              <Collapse className='w-max-1200' in={open1}>
                <div id="example-collapse-text">
                  <div className="d-flex flex-row-reverse">
                    <div className='d-flex'>
                      <div className="w-280px">
                        {/*<div className="input-group input-group-sm rounded mt-2 input-group-data">
                          <Form.Select className='border-0'>
                            <option value="">Todos porteiros</option>
                            <option value="1">Matheus Fernandes</option>
                            <option value="2">Paulo Maria</option>
                            <option value="3">Daniel Filipe</option>
                          </Form.Select>
                        </div>*/}
                      </div>
                      <div className="input-group input-group-sm rounded mt-2 input-group-data">
                        <span className="input-group-text" id="basic-addon1"><b>De</b></span>
                        <input type="date" onChange={(event) => { setFrom(event.target.value); }} className="form-control" placeholder="Date" />
                        <span className="input-group-text" id="basic-addon1"><b>Até</b></span>
                        <input type="date" onChange={(event) => { setTo(event.target.value); }} className="form-control" placeholder="Date" />
                      </div>
                      <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
                        <Form.Select className='border-0' onChange={(event) => { listSubCat(event.target.value); setCat(event.target.value);}} aria-label="Default select example">
                          <option value="">Todas quadra</option>
                          {
                            categorias?.cat?.map(categoria => (
                              <option value={categoria.id}>{categoria.quadra}</option>
                            ))
                          }
                        </Form.Select>
                        <Form.Select className='border-0' onChange={(event) => { setSubCat(event.target.value);}}  aria-label="Default select example">
                          <option value="">Todos lotes</option>
                          
                          {
                            subcategorias?.sub_cat?.map(subcategoria => (
                              <option value={subcategoria.id}>{subcategoria.lote}</option>
                            ))
                          }
                        </Form.Select>
                        <Form.Select className='border-0' onChange={(event) => { setMorador(event.target.value);}} aria-label="Default select example">
                          <option value="">Todos moradores</option>
                          {
                            moradores?.data?.map(morador => (
                              <option value={morador.id}>{morador.nome}</option>
                            ))
                          }
                        </Form.Select>
                      </div>
                      <div className='mt-2 ms-2'>
                        <button type="button" onClick={() => { handleChangeFilterByDateFromTo(); console.log("passou..."); }} className="btn btn-primary btn-sm"><HiOutlineSearch /></button>
                      </div>
                      {/*<div className='mt-2 ms-2'>
                        <button type="button" className="btn btn-primary btn-sm"><HiOutlineEye /></button>
                      </div>*/}
                      <div className='mt-2 ms-2'>
                        <a type="button" href={pdf} onClick={() => { getPdf(); console.log("passou..."); }}  className="btn btn-primary btn-sm">PDF</a>
                      </div> 
                      <div className='mt-2 ms-2'>
                        <a type="button" href={excel} onClick={() => { getExcel(); console.log("passou..."); }} className="btn btn-primary btn-sm">EXCEL</a>
                      </div> 
                    </div>
                  </div>
                </div>
              </Collapse>
              <div className='mt-4'>
                <div className="btn-group border-botton-right-0 w-max-1200">
                  <Link to="/visitors" className="btn border-botton-right-0 btn-light-tabs active" >Todas</Link>
                  <Link to="/agendadas" className="btn border-botton-right-0 btn-light-tabs">Agendadas</Link>
                  <Link to="/condominio" className="btn border-botton-right-0 btn-light-tabs">No condomínio</Link>
                  <Link to="/concluido" className="btn border-botton-right-0 btn-light-tabs">Concluido</Link>
                  <Link to="/cancelados" className="btn border-botton-right-0 btn-light-tabs">Cancelados</Link>
                  <Link to="/expiradas" className="btn border-botton-right-0 btn-light-tabs">Expiradas</Link>
                </div>
                <div className="card border-0 border-botton-right-left-0 card-table">
                  <div className="card-body pb-2"></div>
                  <div className='table-h'>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className='ps-4'>Avatar</th>
                          <th>Morador</th>
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
                              <tr key={appointment.id}>
                                <th scope="row" className='ps-4'>
                                  <div className="vatar-tab">
                                  <img src={appointment.foto ? appointment.foto : user} alt="" />
                                  </div>
                                </th>
                                <td>{appointment.nome_morador}</td>
                                <td>{appointment.nome}</td>
                                <td>{appointment.residencia_morador}</td>
                                <td>{appointment.data}</td>
                                <td>
                                  {
                                    (appointment.status === '0') ?
                                      <span className="badge rounded-pill estado-bg-danger">Cancelado</span>
                                      : (appointment.status === '1') ? <span className="badge rounded-pill estado-bg-warning">Expirado</span>
                                        : (appointment.status === '2') ? <span className="badge rounded-pill estado-bg-primary">Agendado</span>
                                          : (appointment.status === '3') ? <span className="badge rounded-pill estado-bg-secondary">No condomínio </span>
                                            : <span className="badge rounded-pill estado-bg-success">Concluído</span>
                                  }
                                </td>
                                <td className='text-right pe-4'>
                                {
                                    (appointment.status === '0') ?
                                      
                                      <Button className="btn btn-light p-0 m-0 " onClick={() => handleShow4(appointment.id,appointment.status,'Cancelados')}>
                                      <HiOutlineEye />
                                    </Button>
                                      : (appointment.status === '1') ? 
                                      
                                      <Button className="btn btn-light p-0 m-0 " onClick={() => handleShow4(appointment.id,appointment.status,'Expirados')}>
                                      <HiOutlineEye />
                                    </Button>
                                        : (appointment.status === '2') ? 
                                       
                                        <Button className="btn btn-light p-0 m-0 " onClick={() => handleShow4(appointment.id,appointment.status,'Agendamento')}>
                                        <HiOutlineEye />
                                      </Button>
                                          : (appointment.status === '3') ? 
                                        
                                          <Button className="btn btn-light p-0 m-0 " onClick={() => handleShow4(appointment.id,appointment.status,'NoCondominio')}>
                                          <HiOutlineEye />
                                        </Button>
                                            : 
                                           
                                            <Button className="btn btn-light p-0 m-0 " onClick={() => handleShow4(appointment.id,appointment.status,'Concluidos')}>
                                            <HiOutlineEye />
                                          </Button>
                                  }
                               
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
                <Form.Control type="date" />
              </div>
              <div className='col-6'>
                <label className='mt-2 mb-2'><b>Hora *</b></label>
                <Form.Control type="time" />
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

      {
        show4 ?
          <ShowVisitorDetails
            isOpen={show4}
            handleClose={handleClose4}
            appointmentId={appointmentId}
            status={appointmentstatus}
            status_n={appointmentsta}
          />
          :
          <></>
      }
    </div>
  );
}

export default Visitors;