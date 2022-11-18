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
  IoPersonOutline,

} from "react-icons/io5";
import { MenuTop } from '../../components/MenuTop';
import { Modal, Button, } from 'react-bootstrap';
import { format } from 'date-fns';

import {
  Card,
  Table,
  Dropdown,
  Collapse,
  Form,
  Spinner
} from 'react-bootstrap';
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
  const handleShow = () => setShow(true);

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [from, setFrom] = useState('');
  const [status, setStatus] = useState('');
  const [to, setTo] = useState('');
  const [cat, setCat] = useState('');
  const [subcat, setSubCat] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubCategorias] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [func, setFunc] = useState([]);
  
  useEffect(() => {

    setLoading(true);
    getEmployees();
    getCategorias();
    getfuncionarios();

  }, []);

  async function getfuncionarios() {
    try {
      const response = await api.get('v1/list_funcionario/1?todos=all');
      setFuncionarios(response);
     
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

      const response = await api.get(`v1/logs_function/1?status=${status}&situation=&categoria=${cat}&sub_categoria=${subcat}&funcionario=${func}&data_de=${from}&data_ate=${to}`);
      setEmployees(response.data);
      
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

  async function getEmployees() {
    try {
      const response = await api.get('v1/logs_function/1');
      setEmployees(response.data);

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
      setEmployees(response.data);

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
      setEmployees(response.data);

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
                <div><h4 className=''>Funcionários das Residências</h4></div>
                <div>
                  <Button
                    onClick={() => setOpen1(!open1)}
                    className='btn-sm'
                    aria-expanded={open1}
                  >
                    <HiAdjustments />
                  </Button>
                  <Button
                    onClick={() => setOpen2(!open2)}
                    className='btn-sm ms-1'
                    aria-expanded={open2}
                  >
                    <HiOutlineUserCircle />
                  </Button>
                  <Button className='btn-sm ms-1'>
                    <HiRefresh />
                  </Button>
                </div>
              </div>
              <Collapse className='w-max-1200' in={open1}>
                <div id="example-collapse-text">
                  <div className="d-flex flex-row-reverse">
                    <div className='d-flex'>
                      <div className='input-group input-group-sm  me-3 rounded mt-2 w-100px input-group-data'>
                        <span className="input-group-text" id="basic-addon1"><b>Estado</b></span>
                        <Form.Select className='border-0 ' onChange={(event) => { setStatus(event.target.value);}} aria-label="Default select example">
                          <option value="">Todas</option>
                          <option value="1">Dentro do condomínio</option>
                          <option value="0">Fora do condomínio</option>
                        </Form.Select>
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
                        <Form.Select className='border-0' onChange={(event) => { setFunc(event.target.value);}} aria-label="Default select example">
                          <option value="">Todos Funcionarios</option>
                          {
                            funcionarios?.data?.map(func => (
                              <option value={func.id}>{func.nome}</option>
                            ))
                          }
                        </Form.Select>
                      </div>
                      <div className='mt-2 ms-2'>
                        <button type="button" onClick={() => { handleChangeFilterByDateFromTo(); console.log("passou..."); }} className="btn btn-primary btn-sm"><HiOutlineSearch /></button>
                      </div>
                      <div className='mt-2 ms-2'>
                        <button type="button" className="btn btn-primary btn-sm"><HiOutlineEye /></button>
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
                          <option value="">Todos</option>
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
                          <th>Residência</th>
                          <th>Hora</th>
                          <th>Data</th>
                          <th>Estado</th>
                          <th className='text-right pe-4'>Detalhes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          !loading ?
                            employees?.data?.map(employee => (
                              <tr key={employee.id}>
                                <th scope="row" className='ps-4'>
                                  <div className="vatar-tab">
                                    <img src={employee.foto} alt="" />
                                  </div>
                                </th>
                                <td>{employee.nome}</td>
                                <td>{"Q-" + employee.quadra + " - L-" + employee.lote}</td>
                                <td>{format(new Date(employee.created_at), "H:i:s")}</td>
                                <td>{format(new Date(employee.created_at), "dd/MM/yyyy")}</td>
                                <td>
                                {
                                    (employee.status === '0') ?
                                      <span className="badge rounded-pill estado-bg-danger">Fora do condomínio</span>
                                    :  <span className="badge rounded-pill estado-bg-primary">Dentro do condomínio</span>
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

                            employees?.from + ' - ' + employees?.to + '- ' + employees?.total : '0 - 0 itens '

                        } itens
                      </div>
                      <div>
                        <nav className='nav-pagination'>
                          <ul className="pagination">
                            {
                              !loading ?

                                employees?.prev_page_url ?
                                  <li className="page-item"><button className="page-link" onClick={() => handlePrevPage(employees?.prev_page_url)} href="#">&laquo;</button></li>
                                  : <li className="page-item"><button className="page-link">&laquo;</button></li>
                                :
                                <>
                                  <li className="page-item"><button className="page-link">&laquo;</button></li>
                                </>
                            }

                            {
                              employees?.next_page_url ?
                                <li className="page-item"><button className="page-link" onClick={() => handleNextPage(employees?.next_page_url)}>&raquo;</button></li>
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
                    <IoCalendarOutline /> <font className='font-size-14'>24/05/2022</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> 13h:30m</font><br />
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