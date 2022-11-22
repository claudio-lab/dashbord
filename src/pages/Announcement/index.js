import React, { useState, useEffect } from 'react';
import { Menu } from '../../components/Menu';
import {
  Link
} from "react-router-dom";
import { toast } from 'react-toastify';
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

import user from './../../assets/photos/user.png';
import { api } from './../../services/api';

function Announcement() {
  const [open1, setOpen1] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [announcement, setAnnouncement] = useState("");
  const [loadingSubmitAnnouncement, setLoadingSubmitAnnouncement] = useState(false);
  const [loadingSubmitTypology, setLoadingSubmitTypology] = useState(false);
  const [loading, setLoading] = useState(false);
  {/*--------------------------------------------*/ }
  const [show, setShow] = useState(false);
  const handleClose5 = () => setShow(false);
  const handleShow = () => setShow(true);
  {/*--------------------------------------------*/ }
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [titulo, setTitulo] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [playersId, setPlayersId] = useState([]);
  const [moradores, setMoradores] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAnnouncements();
    getMoradores();

  }, [isSubmitted]);

  async function getMoradores() {
    try {
      const response = await api.get('v1/list_moradores/1/0000?todos=all');
      setMoradores(response);

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
    console.log('ok', from, to, titulo);
    try {

      setLoading(true);

      if (to) {

        if (from) { } else {
          setLoading(false);
          return;
        }

      }

      const response = await api.get(`v1/list_comunicados/1?data_de=${from}&data_ate=${to}&titulo=${titulo}`);
      setAnnouncements(response.data.data?.comunicado);
      console.log(response.data.data?.comunicado);

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

  async function getAnnouncements() {
    try {
      const response = await api.get('v1/list_comunicados/1');
      setAnnouncements(response.data.data?.comunicado);

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
      setAnnouncements(response.data.data?.comunicado);

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
      setAnnouncements(response.data.data?.comunicado);

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
  async function handleSaveAnnouncement(morador_id) {
    try {
      setLoadingSubmitAnnouncement(true);
      if (!announcement) return alert('Tipologia é obrigatório!');

      const data = {
        title: announcement,
        morador_id: morador_id
      }

      const response = await api.post('v1/addTipologia', data);

      if (response.data.success) {
        alert(response.data.msg);
      }

      handleClose5();
      getAnnouncements();
      setLoadingSubmitAnnouncement(false);
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
      setLoadingSubmitAnnouncement(false);
    }
  }

  async function handleSubmitUser() {
    try {

      setIsSubmitted(true);

      if (!title) {
        toast.error('O title é obrigatório');
        setIsSubmitted(false);
        return;
      }

      if (!userId) {
        toast.error('Deve selecionar os usuários');
        setIsSubmitted(false);
        return;
      }

      if (!message) {
        toast.error('O comunicado é obrigatório');
        setIsSubmitted(false);
        return;
      }

      if (userId === 'todos') {

        for (var i = 0; i <= moradores?.data?.length; i++) {
          const data = {
            title,
            message,
            morador_id: moradores.id
          }

          const response = await api.post('v1/add_comunicado/1', data);

        }

        toast.success('Usuários notificados com sucesso');
        setIsSubmitted(false);
        handleClose5();
        return;
      }

      const data = {
        title,
        message,
        morador_id: userId
      }

      const response = await api.post('v1/add_comunicado/1', data);

      toast.success('Usuário notificado com sucesso');


      setIsSubmitted(false);
      handleClose5();

    } catch (error) {
      if (error.message === "Network Error") {
        toast.error("Por favor verifique sua conexão com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        toast.error("Erro ao notificar o usuário, por favor, tente adicionar mais tarde!");
      } else if (error.message === "Request failed with status code 400") {
        toast.error("Erro ao notificar usuários, por favor, tente adicionar mais tarde!");
      } else if (error.status === 500) {
        toast.error("Erro interno, por favor, contactar o suporte!");
      }
      setIsSubmitted(false);
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
                <div><h4 className=''>Comunicados</h4></div>
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
                          <th className='text-right pe-4'>Acções</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          !loading ?
                            announcements?.data?.map(announcement => (
                              <tr key={announcement.id}>
                                <th scope="row" className='ps-4'>
                                  <div className="vatar-tab">
                                    <img src={user} alt="" />
                                  </div>
                                </th>
                                <td>{announcement.adm}</td>
                                <td>{announcement.title}</td>
                                <td>{format(new Date(announcement.created_at), 'dd/MM/yyyy')}</td>
                                <td className='text-right pe-4'>
                                  <Link to={`/announcement/${announcement.id}`} className="p-0 rounded-pill btn btn-light"><HiOutlineEye /></Link>
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

                            announcements?.from + ' - ' + announcements?.to + '- ' + announcements?.total : '0 - 0 itens '

                        }
                      </div>
                      <div>
                        <nav className='nav-pagination'>
                          <ul className="pagination">
                            {
                              !loading ?

                                announcements?.prev_page_url ?
                                  <li className="page-item"><button className="page-link" onClick={() => handlePrevPage(announcements?.prev_page_url)} href="#">&laquo;</button></li>
                                  : <li className="page-item"><button className="page-link">&laquo;</button></li>
                                :
                                <>
                                  <li className="page-item"><button className="page-link">&laquo;</button></li>
                                </>
                            }

                            {
                              announcements?.next_page_url ?
                                <li className="page-item"><button className="page-link" onClick={() => handleNextPage(announcements?.next_page_url)}>&raquo;</button></li>
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
        onHide={handleClose5}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton className='border-0'>
          <h5 className='mt-3'>Notificar Moradores</h5>
        </Modal.Header>
        <Modal.Body className='pt-0'>
          <form action="">
            <label className='mt-2 mb-2'><b>Para  *</b></label>
            <Form.Select className='form-control' onChange={(event) => { setUserId(event.target.value); }} aria-label="Default select example">
              <option value="">Selecionar</option>
              <option value="todos">Todos moradores</option>
              {
                moradores?.data?.map(morador => (
                  <option value={morador.id}>{morador.nome}</option>
                ))
              }
            </Form.Select>
            <label className='mt-2 mb-2'><b>Assunto  *</b></label>
            <Form.Control
              type="text"
              placeholder="Comunicado"
              required onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
            <label className='mt-2 mb-2'><b>Comunicado  *</b></label>
            <textarea
              className="form-control"
              placeholder="Discrição do comunicado"
              rows="3"
              value={message}
              required
              onChange={(event) => setMessage(event.target.value)}>
            </textarea>

          </form>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          {
            !isSubmitted
              ?
              <>
                <Button variant="secondary" onClick={handleClose5} className='btn-sm'>
                  Cancelar
                </Button>

                <Button variant="primary" onClick={() => handleSubmitUser()} className='btn-sm'>
                  Enviar
                </Button>
              </>
              :
              <>

                <Button variant="secondary" disabled className='btn-sm'>
                  Cancelar
                </Button>

                <Button variant="primary" disabled className='btn-sm'>
                  Enviando...
                </Button>

              </>
          }
        </Modal.Footer>
      </Modal>
      {/*modal*/}
    </div>
  );
}

export default Announcement;