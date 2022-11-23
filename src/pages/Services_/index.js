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
  HiOutlinePlusSm,
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

import {
  Card,
  Table,
  Dropdown,
  Collapse,
  Form
} from 'react-bootstrap';
import { api } from './../../services/api';
import marisa from './../../assets/photos/marisa.jpg'
import chiao from './../../assets/photos/chiao.jpg'
import cassia from './../../assets/photos/cassia.jpg'
import matheus from './../../assets/photos/matheus.jpg'
import paula from './../../assets/photos/paula.jpg'


function Services_() {
  const [open1, setOpen1] = useState(false);

  const [services, setServices] = useState([]);
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSubmitService, setLoadingSubmitService] = useState(false);
  {/*--------------------------------------------*/ }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  {/*--------------------------------------------*/ }

  const [servic, setServic] = useState('');

  useEffect(() => {
    setLoading(true);
    getServices();

  }, []);

  async function handleChangeFilterByDateFromTo() {
    //console.log('ok', status, telefone, cat, subcat,nome);
    try {
      setLoading(true);

      /*if (!from || !to) {
        setLoading(false);
        return;
      }*/

      const response = await api.get(`v1/servico_list/1?servico=${servic}`);
      setServices(response.data);
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

  async function getServices() {
    try {
      const response = await api.get('v1/servico_list/1');
      setServices(response.data);

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
      setServices(response.data);

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
      setServices(response.data);

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

  async function handleSaveService(condominio_id) {
    try {
      setLoadingSubmitService(true);

      if (!service) return alert('Serviço é obrigatório!'); setLoadingSubmitService(false);
      if (!description) return alert('Descrição é obrigatório!'); setLoadingSubmitService(false);

      const data = {
        tipo: service,
        descricao: description,
        condominio_id: condominio_id
      }

      const response = await api.post('v1/add_servico', data);

      if (response.data.success) {
        alert(response.data.msg);
      }

      handleClose();
      getServices();
      setLoadingSubmitService(false);
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
      setLoadingSubmitService(false);
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
                <div><h4 className=''>Serviço</h4></div>
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
                  <Button className='btn-sm ms-1' onClick={handleShow}>
                    <HiOutlinePlusSm />
                  </Button>
                </div>
              </div>
              <Collapse className='w-max-1200' in={open1}>
                <div id="example-collapse-text">
                  <div className="d-flex flex-row-reverse">
                    <div className='d-flex'>
                      <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
                        <input type="search" onKeyUp={(event) => { setServic(event.target.value); }} className="form-control border-0" placeholder="Pesquisar" />
                      </div>
                      <div className='mt-2 ms-2'>
                        <button type="button" onClick={() => { handleChangeFilterByDateFromTo(); console.log("passou..."); }} className="btn btn-primary btn-sm"><HiOutlineSearch /></button>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </Collapse>
              <div className='mt-4'>
                <div className="card border-0  card-table">
                  <div className="card-body pb-2"></div>
                  <div className='table-h'>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className='ps-4'>Nome</th>
                          <th className='text-right pe-4'>Acções</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          !loading ?
                            services?.data?.map(service => (
                              <tr key={service.id}>
                                <th scope="row" className='ps-4'>
                                  {service.tipo}
                                </th>
                                <td className='text-right pe-4'>
                                  <Dropdown>
                                    <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                                      <IoEllipsisHorizontal />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                                      <Dropdown.Item href="#/action-1">Reenviar senha</Dropdown.Item>
                                      <Dropdown.Item href="#/action-2">Activar</Dropdown.Item>
                                      <Dropdown.Item href="#/action-3">Desativa</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </td>
                              </tr>
                            ))
                            :
                            <>
                              <tr>
                                <td
                                  colSpan={2}
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

                            services?.from + ' - ' + services?.to + '- ' + services?.total : '0 - 0 itens '

                        }
                        itens
                      </div>
                      <div>
                        <nav className='nav-pagination'>
                          <ul className="pagination">
                            {
                              !loading ?

                                services?.prev_page_url ?
                                  <li className="page-item"><button className="page-link" onClick={() => handlePrevPage(services?.prev_page_url)} href="#">&laquo;</button></li>
                                  : <li className="page-item"><button className="page-link">&laquo;</button></li>
                                :
                                <>
                                  <li className="page-item"><button className="page-link">&laquo;</button></li>
                                </>
                            }

                            {
                              services?.next_page_url ?
                                <li className="page-item"><button className="page-link" onClick={() => handleNextPage(services?.next_page_url)}>&raquo;</button></li>
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
      {/*modal*/}
      <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton className='border-0'>
          <h5 className='mt-3'>Novo Serviço</h5>
        </Modal.Header>
        <Modal.Body className='pt-0'>
          <form action="">
            <label className='mt-2 mb-2'><b>Serviço  *</b></label>
            <Form.Control type="text" placeholder="Serviço" required onChange={(e) => setService(e.target.value)} />
            <label className='mt-2 mb-2'><b>Descrição do Serviço  *</b></label>
            <textarea className="form-control" placeholder="Discrição do Serviço" required onChange={(e) => setDescription(e.target.value)} rows="3"></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Button variant="secondary" onClick={handleClose} className='btn-sm'>
            Cancelar
          </Button>


          {

            !loadingSubmitService
              ? <Button variant="primary" onClick={() => handleSaveService(1)} className='btn-sm'>
                Adicionar
              </Button>
              : <Button variant="primary" disabled className='btn-sm'>
                Adicionando...
              </Button>

          }
        </Modal.Footer>
      </Modal>
      {/*modal*/}
    </div>
  );
}

export default Services_;