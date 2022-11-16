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
import { api } from '../../services/api';
import marisa from './../../assets/photos/marisa.jpg'
import chiao from './../../assets/photos/chiao.jpg'
import cassia from './../../assets/photos/cassia.jpg'
import matheus from './../../assets/photos/matheus.jpg'
import paula from './../../assets/photos/paula.jpg'


function Lote() {
  const [open1, setOpen1] = useState(false);

  const [typologies, setTypologies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSubmitTypology, setLoadingSubmitTypology] = useState(false);

  const [typology, setTypology] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLoading(true);
    getTypologies();

  }, []);

  async function getTypologies() {
    try {
      const response = await api.get('v1/listTipologias/1');
      setTypologies(response.data);

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
      setTypologies(response.data);

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
      setTypologies(response.data);

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

  async function handleSaveTypology(condominio_id) {
    try {
      setLoadingSubmitTypology(true);

      if (!typology) return alert('Tipologia é obrigatório!');

      const data = {
        tipologia: typology,
        condominio_id: condominio_id
      }

      const response = await api.post('v1/addTipologia', data);

      if (response.data.success) {
        alert(response.data.msg);
      }

      handleClose();
      getTypologies();
      setLoadingSubmitTypology(false);
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
      setLoadingSubmitTypology(false);
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
              <div className='d-flex justify-content-between w-max-1200'>
                <div><h4 className=''>Estrutura</h4></div>
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
                        <input type="search" className="form-control border-0" placeholder="Pesquisar" />
                      </div>
                      <div className='mt-2 ms-2'>
                        <button type="button" className="btn btn-primary btn-sm"><HiOutlineSearch /></button>
                      </div>
                      <div className='mt-2 ms-2'>
                        <button type="button" className="btn btn-primary btn-sm"><HiOutlineEye /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>

              <div className='mt-4'>
                <div className="btn-group border-botton-right-0">
                  <Link to="/typology" className="btn border-botton-right-0 btn-light-tabs " >Tipologias</Link>
                  <Link to="/lote" className="btn border-botton-right-0 btn-light-tabs active">Lote</Link>
                  <Link to="/quadra" className="btn border-botton-right-0 btn-light-tabs ">Quadra</Link>
                </div>
                <div className="card border-0 border-botton-right-left-0 card-table">
                  <div className="card-body pb-2"></div>
                  <div className='table-h'>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className='ps-4'>Tipo</th>
                          <th>Nº Quadra</th>
                          <th>Nº Residência</th>
                          <th>Nº Estabelecimento</th>
                          <th className='text-right pe-4'>Acções</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          !loading ?
                            typologies?.data?.map(employee => (
                              <tr key={employee.id}>
                                <th scope="row" className='ps-4'>
                                  {employee.name}
                                </th>
                                <th>
                                  {employee.name}
                                </th>
                                <th>
                                  {employee.name}
                                </th>
                                <th>
                                  {employee.name}
                                </th>
                                <td className='text-right pe-4'>
                                  <Dropdown>
                                    <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                                      <IoEllipsisHorizontal />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                                      <Dropdown.Item href="#/action-1">Apagar</Dropdown.Item>
                                      <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
                                      <Dropdown.Item href="#/action-3">Detalhes</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </td>
                              </tr>
                            ))
                            :
                            <>
                              <tr>
                                <td
                                  colSpan={3}
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

                            typologies?.from + ' - ' + typologies?.to + '- ' + typologies?.total : '0 - 0 itens '

                        }
                        itens
                      </div>
                      <div>
                        <nav className='nav-pagination'>
                          <ul className="pagination">
                            {
                              !loading ?

                                typologies?.prev_page_url ?
                                  <li className="page-item"><button className="page-link" onClick={() => handlePrevPage(typologies?.prev_page_url)} href="#">&laquo;</button></li>
                                  : <li className="page-item"><button className="page-link">&laquo;</button></li>
                                :
                                <>
                                  <li className="page-item"><button className="page-link">&laquo;</button></li>
                                </>
                            }

                            {
                              typologies?.next_page_url ?
                                <li className="page-item"><button className="page-link" onClick={() => handleNextPage(typologies?.next_page_url)}>&raquo;</button></li>
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
          <h5 className='mt-3'>Adicionar tipologia</h5>
        </Modal.Header>
        <Modal.Body className='pt-0'>
          <form action="">
            <label className='mt-2 mb-2'><b>Tipologia *</b></label>
            <Form.Control
              type="text"
              required
              placeholder="Tipologia"
              onChange={(event) => setTypology(event.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Button variant="secondary" onClick={handleClose} className='btn-sm'>
            Cancelar
          </Button>

          {

            !loadingSubmitTypology
              ? <Button variant="primary" onClick={() => handleSaveTypology(1)} className='btn-sm'>
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

export default Lote;