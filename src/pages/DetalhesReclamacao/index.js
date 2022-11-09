import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import {
  Link
} from "react-router-dom";
import { format } from 'date-fns';
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
  HiOutlineEyeOff,
  HiArrowSmLeft,
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
import { Modal, Button, } from 'react-bootstrap';

import {
  Card,
  Table,
  Dropdown,
  Collapse,
  Form,
  Spinner
} from 'react-bootstrap';

import { api } from '../../services/api';

import marisa from './../../assets/photos/marisa.jpg'
import chiao from './../../assets/photos/chiao.jpg'
import cassia from './../../assets/photos/cassia.jpg'
import matheus from './../../assets/photos/matheus.jpg'
import paula from './../../assets/photos/paula.jpg'

function DetalhesReclamacao() {
  let params = useParams();
  let id = params.id;
  const [open1, setOpen1] = useState(false);

  const [comunicado, setComunicado] = useState([]);
  const [data, setData] = useState([]);
  const [comunicadoListByUser, setComunicadoListByUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoadingList(true);

    getComunicadoData();
    getComunicadoList();
    getComunicadoById();

  }, []);

  async function getComunicadoById() {
    try {
      const response = await api.get(`v1/show_comunicado/${id}`);
      setComunicado(response.data.data.comunicado);

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

  async function getComunicadoData() {
    try {
      const response = await api.get(`v1/count_comunicados/${id}`);
      setData(response.data);

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

  async function getComunicadoList() {
    try {
      const response = await api.get(`v1/list_user_comunicados/${id}`);
      setComunicadoListByUser(response.data.data.user_comunicado);

      setLoadingList(false);
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
      setLoadingList(false);
    }
  }

  async function handlePrevPage(link) {
    try {
      setLoadingList(true);
      const response = await api.get(link);
      setComunicadoListByUser(response.data.data.user_comunicado);

      setLoadingList(false);
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
      setLoadingList(false);
    }
  }

  async function handleNextPage(link) {
    try {
      setLoadingList(true);
      const response = await api.get(link);
      setComunicadoListByUser(response.data.data.user_comunicado);

      setLoadingList(false);
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
      setLoadingList(false);
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
              <div className="card border-0 card-body">
                <div className='d-flex justify-content-between'>
                  <div>
                    <Link to="/announcement" className="btn btn-primary btn-sm"><HiArrowSmLeft /> voltar</Link>
                    <button type="button" className="btn btn-light me-3 ms-3 btn-sm"><HiOutlineEyeOff /> Visualizada: {data?.data?.count_vizualizados ? data?.data?.count_vizualizados : '0'}</button>
                    <button type="button" className="btn btn-light btn-sm"><HiOutlineEye /> Não visualizada: {data?.data?.count_n_vizualizados ? data?.data?.count_n_vizualizados : '0'}</button>
                  </div>
                  {/*<div><h4 className=''>Detalhes Comunicados</h4></div>*/}
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
                  </div>
                </div>
                <Collapse in={open1}>
                  <div id="example-collapse-text">
                    <div className="d-flex flex-row-reverse">
                      <div className='d-flex'>
                        <div className="input-group input-group-sm w-280px rounded mt-2 border">
                          <select className="form-select border-0">
                            <option value="">Visto</option>
                            <option value="1">Nao visto</option>
                          </select>
                        </div>
                        <div className="input-group ms-3 input-group-sm rounded mt-2 ">
                          <input type="text" className="form-control border" placeholder="Pesquisar residencia" />
                        </div>
                        <div className="input-group ms-3 input-group-sm rounded mt-2 border ">
                          <select className="form-select border-0 ">
                            <option value="">Principal</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <select className="form-select border-0">
                            <option value="">Agregado</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className='mt-2 ms-2'>
                          <button type="button" className="btn btn-primary btn-sm"><HiOutlineSearch /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>

              <div className='mt-4'>
                <div className="container p-0">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="card border-0 card-table">
                        <div className="card-body">
                          <h4 className='mb-3'>Informações</h4>
                          <b>Assunto:</b> {comunicado?.title ? comunicado?.title : ' '} <br />
                          <b>Comunicado por:</b> {comunicado?.adm ? comunicado?.adm : ' '}  <br /><br />
                          <b>Descrição:</b> {comunicado?.message ? comunicado?.message : ' '} <br /><br />

                          <b>Data da comunicação:</b> {comunicado?.created_at ? format(new Date(comunicado?.created_at), 'dd/MM/yyyy') : ' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card border-0 card-table">
                        <div className="card-body pb-2"></div>
                        <div className='tale-h'>
                          <table className="table">
                            <thead>
                              <tr>
                                <th className='ps-4'>Avatar</th>
                                <th>Nome</th>
                                <th>Tipo</th>
                                <th className='text-right pe-4'>Estado</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                !loadingList ?
                                  comunicadoListByUser?.data?.map((user) => (
                                    <tr key={user.id}>
                                      <th scope="row" className='ps-4'>
                                        <div className="vatar-tab">
                                          <img src={cassia} alt="" />
                                        </div>
                                      </th>
                                      <td>{user.nome}</td>
                                      <td>Agregado</td>
                                      {
                                        (user.status === '0') ?
                                          <td className='text-right pe-4'><span className="badge bg-secondary rounded-pill">Não visualizou</span></td>
                                          :
                                          <td className='text-right pe-4'><span className="badge bg-success rounded-pill">20/03/2022</span></td>
                                      }

                                    </tr>
                                  ))
                                  :
                                  <>
                                    <tr>
                                      <td
                                        colSpan={4}
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
                            <div className='pt-2'>{
                              !loadingList ?

                                comunicadoListByUser?.from + ' - ' + comunicadoListByUser?.to + '- ' + comunicadoListByUser?.total + ' ' : '0 - 0 itens '

                            } itens</div>
                            <div>
                              <nav className='nav-pagination'>
                                <ul className="pagination">
                                  {
                                    !loadingList ?

                                      comunicadoListByUser?.prev_page_url ?
                                        <li className="page-item"><button className="page-link" onClick={() => handlePrevPage(comunicadoListByUser?.prev_page_url)} href="#">&laquo;</button></li>
                                        : <li className="page-item"><button className="page-link">&laquo;</button></li>
                                      :
                                      <>
                                        <li className="page-item"><button className="page-link">&laquo;</button></li>
                                      </>
                                  }

                                  {
                                    comunicadoListByUser?.next_page_url ?
                                      <li className="page-item"><button className="page-link" onClick={() => handleNextPage(comunicadoListByUser?.next_page_url)}>&raquo;</button></li>
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DetalhesReclamacao;