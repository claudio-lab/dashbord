import React, { useState } from 'react';
import { Menu } from '../../components/Menu';
import {
  Link
} from "react-router-dom";
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
  IoClipboardOutline,
  IoTimeOutline,
  IoAlertCircleOutline,
  IoPersonOutline
} from "react-icons/io5";
import { MenuTop } from '../../components/MenuTop';
import { Modal, Button, Spinner } from 'react-bootstrap';
import {
  Collapse,
  Form
} from 'react-bootstrap';
import marisa from './../../assets/photos/marisa.jpg'
import chiao from './../../assets/photos/chiao.jpg'
import cassia from './../../assets/photos/cassia.jpg'
import matheus from './../../assets/photos/matheus.jpg'
import paula from './../../assets/photos/paula.jpg'
import { useEffect } from 'react';
import { api } from './../../services/api';
import ShowVisitorDetails from '../../components/modal/ShowVisitorDetails';

function Agendadas() {

  const [open1, setOpen1] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  {/*--------------------------------------------*/ }
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const handleClose4 = () => setShow4(false);
  const [show4, setShow4] = useState(false);
  function handleShow4(appointmentID) {
    setAppointmentId(appointmentID);

    setShow4(true);
  }
  {/*--------------------------------------------*/ }

  const [appointments, setAppointments] = useState([]);
  const [appointmentId, setAppointmentId] = useState(''); 
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAppointments();
    getCategorias();
    getMoradores();

  }, []);

  async function getPdf() {
    console.log('ok', from, to, cat, subcat,morad);
    try {
      const pdf = `https://webapi.monzoyetu.com/api/v1/list_visitas_/1/agendadas?data_de=${from}&data_ate=${to}&categoria=${cat}&sub_categoria=${subcat}&morador=${morad}&export=pdf`;
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
    console.log('ok', from, to, cat, subcat,morad);
    try {
      const excel = `https://webapi.monzoyetu.com/api/v1/list_visitas_/1/agendadas?data_de=${from}&data_ate=${to}&categoria=${cat}&sub_categoria=${subcat}&morador=${morad}&export=excel`;
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
      const response = await api.get('v1/list_visitas/1/agendadas');
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

  async function handleChangeFilterByDateFromTo() {
    console.log('ok', from, to, cat, subcat,morad);
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

      const response = await api.get(`v1/list_visitas/1/agendadas?data_de=${from}&data_ate=${to}&categoria=${cat}&sub_categoria=${subcat}&morador=${morad}`);
      setAppointments(response.data);
      console.log(response.data);
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
        <Menu />
        <section className='w-100 h-100 height-overflow'>
          <MenuTop />
          <div className="p-4">
            <div className="container">
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
                      <div className="input-group input-group-sm rounded mt-2 input-group-data">
                        <span className="input-group-text" id="basic-addon1"><b>De</b></span>
                        <input type="date" onChange={(event) => { setFrom(event.target.value); }} className="form-control" placeholder="Username" />
                        <span className="input-group-text" id="basic-addon1"><b>Ate</b></span>
                        <input type="date" onChange={(event) => { setTo(event.target.value); }} className="form-control" placeholder="Username" />
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
                        <Form.Select className='border-0' onChange={(event) => { setSubCat(event.target.value);}} aria-label="Default select example">
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
                <div className="btn-group w-max-1200 border-botton-right-0">
                  <Link to="/visitors" className="btn border-botton-right-0 btn-light-tabs" >Todas</Link>
                  <Link to="/agendadas" className="btn border-botton-right-0 btn-light-tabs active">Agendadas</Link>
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
                          <th>Residencia</th>
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
                                    <img src={marisa} alt="" />
                                  </div>
                                </th>
                                <td>{appointment.nome_morador}</td>
                                <td>{appointment.nome}</td>
                                <td>{appointment.residencia_morador}</td>
                                <td>{appointment.data}</td>
                                <td>
                                  {
                                    (appointment.status === '0') ?
                                      <span className="badge rounded-pill estado-bg-primary">Cancelado</span>
                                      : (appointment.status === '1') ? <span className="badge rounded-pill estado-bg-primary">Expirado</span>
                                        : (appointment.status === '2') ? <span className="badge rounded-pill estado-bg-primary">Agendado</span>
                                          : (appointment.status === '3') ? <span className="badge rounded-pill estado-bg-primary">No condomínio</span>
                                            : <span className="badge rounded-pill estado-bg-primary">Concluído</span>
                                  }
                                </td>
                                <td className='text-right pe-4'>
                                <Button className="btn btn-light p-0 m-0 " onClick={() => handleShow4(appointment.id)}>
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
            <div className="ss"><span className="badge rounded-pill estado-bg-primary">Agendamentos</span></div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span className="badge rounded-pill estado-bg-primary">Agendamentos</span></div>
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
            status="Agendamento"
            status_n="2"
          />
          :
          <></>
      }
    </div>
  );
}

export default Agendadas;