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
  HiOutlineUserCircle,
  HiOutlinePaperClip
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
import { format } from 'date-fns';
import { api } from './../../services/api';

import marisa from './../../assets/photos/marisa.jpg'
function Documents_() {
  const [open, setOpen] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    setLoading(true);
    getDocuments();

  }, []);

  async function getDocuments() {
    try {
      const response = await api.get('v1/getDocumentos/1');
      setDocuments(response.data.data.documentos);

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
    console.log('ok', from, to, titulo,);
    try {
      setLoading(true);
      
      if (to) {

        if(from){}else{
         setLoading(false);
         return;
        }
         
      }

      const response = await api.get(`v1/getDocumentos/1?data_de=${from}&data_ate=${to}&titulo=${titulo}`);
      setDocuments(response.data.data.documentos);
      console.log(response.data.data.documentos);
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
      setDocuments(response.data.documentos);

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
      setDocuments(response.data.documentos);

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
                <div><h4 className=''>Documentos</h4></div>
                <div>
                  <Button
                    onClick={() => setOpen(!open)}
                    className='btn-sm'
                    aria-expanded={open}
                  >
                    <HiAdjustments />
                  </Button>
                  <Button className='btn-sm ms-1'>
                    <HiRefresh />
                  </Button>
                </div>
              </div>

              <Collapse className='w-max-1200' in={open}>
                <div id="example-collapse-text">
                  <div className="d-flex flex-row-reverse">
                    <div className='d-flex'>
                    <div className="input-group input-group-sm rounded mt-2 input-group-data">
                        <span className="input-group-text" id="basic-addon1"><b>De</b></span>
                        <input type="date" onChange={(event) => { setFrom(event.target.value); }} className="form-control" placeholder="Date" />
                        <span className="input-group-text" id="basic-addon1"><b>Até</b></span>
                        <input type="date" onChange={(event) => { setTo(event.target.value); }} className="form-control" placeholder="Date" />
                      </div>
                      <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
                        <input type="text" onKeyUp={(event) => { setTitulo(event.target.value); }} className="form-control" placeholder="Pesquisar titulo" />
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
                          <th className='ps-4'>Avatar</th>
                          <th>Nome</th>
                          <th>Titulo</th>
                          <th>Data e hora</th>
                          <th>Anexo</th>
                          <th className='text-right pe-4'>Acções</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          !loading ?
                            documents?.data?.map(document => (
                              <tr key={document.id}>
                                <th scope="row" className='ps-4'>
                                  <div className="vatar-tab">
                                    <img src={marisa} alt="" />
                                  </div>
                                </th>
                                <td>Marisa Francisco</td>
                                <td>{document.title}</td>
                                <td>{format(new Date(document.created_at), 'dd/MM/yyyy')}</td>
                                <td><HiOutlinePaperClip className='HiDD' /></td>
                                <td className='text-right pe-4'>
                                  <Link  className='btn btn-light p-0 rounded-pill'><HiOutlineEye /></Link>
                                </td>
                              </tr>
                            ))
                            :
                            <>
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

                            documents?.from + ' - ' + documents?.to + '- ' + documents?.total : '0 - 0 itens '

                        }
                        itens</div>
                      <div>
                        <nav className='nav-pagination'>
                          <ul className="pagination">
                            {
                              !loading ?

                                documents?.prev_page_url ?
                                  <li className="page-item"><button className="page-link" onClick={() => handlePrevPage(documents?.prev_page_url)} href="#">&laquo;</button></li>
                                  : <li className="page-item"><button className="page-link">&laquo;</button></li>
                                :
                                <>
                                  <li className="page-item"><button className="page-link">&laquo;</button></li>
                                </>
                            }

                            {
                              documents?.next_page_url ?
                                <li className="page-item"><button className="page-link" onClick={() => handleNextPage(documents?.next_page_url)}>&raquo;</button></li>
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
    </div>
  );
}

export default Documents_;