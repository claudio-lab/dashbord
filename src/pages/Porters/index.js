import React, { useState, useEffect } from 'react';
import { Menu } from '../../components/Menu';
import { toast } from 'react-toastify';
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
  HiOutlinePlusSm,
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
import user from './../../assets/photos/user.png';
import matheus from './../../assets/photos/matheus.jpg';
import { format } from 'date-fns';
import { api } from './../../services/api';

function Porters() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loadingSubmitConcierges, setLoadingSubmitConcierges] = useState(false);
  const [concierge, setconcierge] = useState("");


  const [concierges, setConcierges] = useState([]);
  const [portnam, setNome] = useState('');
  const [portte, setTelefone] = useState('');
  const [stat, setStatus] = useState('');
  
  const [portname, setName] = useState('');
  const [pottel, setTel] = useState('');
  const [loading, setLoading] = useState(false);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  useEffect(() => {
    setLoading(true);
    getConcierges();
  }, []);

  async function handleChangeFilterByDateFromTo() {
    //console.log('ok', status, telefone, cat, subcat,nome);
    try {
      setLoading(true);

      /*if (!from || !to) {
        setLoading(false);
        return;
      }*/

      const response = await api.get(`v1/list_porteiros_condominio/1?nome=${portnam}&telefone=${portte}&status=${stat}`);
      setConcierges(response.data);
      console.log(response.data);

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

  async function handleDeletd(userId) {
    try {

      setLoading(true);
      if (!userId) {
        toast.error('user id is required');
        return;
      }

      const response = await api.delete('v1/delete_porteiro/' + userId);
      toast.success('Usu??rio deletado com sucesso!');
      getConcierges();
      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        toast.error("Por favor verifique sua conex??o com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        toast.error("Erro ao add , por favor, tente adicionar mais tarde!");
      } else if (error.message === "Request failed with status code 400") {
        toast.error("Erro ao add , por favor, tente adicionar mais tarde!");
      } else if (error.status === 500) {
        toast.error("Erro interno, por favor, contactar o suporte!");
      }
    }
  }

  async function handleChangePin(userId) {
    try {
      setLoading(true);
      if (!userId) {
        toast.error('user id is required');
        return;
      }

      const response = await api.put('v1/changPassword_porteiro/' + userId);
      toast.success('Senha reenviada com sucesso!');
      setLoading(false);

    } catch (error) {
      if (error.message === "Network Error") {
        toast.error("Por favor verifique sua conex??o com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        toast.error("Erro ao add , por favor, tente adicionar mais tarde!");
      } else if (error.message === "Request failed with status code 400") {
        toast.error("Erro ao add , por favor, tente adicionar mais tarde!");
      } else if (error.status === 500) {
        toast.error("Erro interno, por favor, contactar o suporte!");
      }
    }
  }

  async function handleChangeStatus(userId) {
    try {

      setLoading(true);
      if (!userId) {
        toast.error('user id is required');
        return;
      }

      const response = await api.put('v1/status_porteiro/' + userId);
      toast.success('Status de usu??rio alterado com sucesso!');
      getConcierges();
      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        toast.error("Por favor verifique sua conex??o com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        toast.error("Erro ao add , por favor, tente adicionar mais tarde!");
      } else if (error.message === "Request failed with status code 400") {
        toast.error("Erro ao add , por favor, tente adicionar mais tarde!");
      } else if (error.status === 500) {
        toast.error("Erro interno, por favor, contactar o suporte!");
      }
    }
  }

  async function getConcierges() {
    try {
      const response = await api.get('v1/list_porteiros_condominio/1');
      setConcierges(response.data);
      console.log(response.data);

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

  async function handlePrevPage(link) {
    try {
      setLoading(true);
      const response = await api.get(link);
      setConcierges(response.data);

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

  async function handleNextPage(link) {
    try {
      setLoading(true);
      const response = await api.get(link);
      setConcierges(response.data);

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

  async function handleSaveConcierges() {
    try {
      console.log(portname);
      setLoadingSubmitConcierges(true);
      if (!portname) {
        toast.error('O nome ?? obrigat??rio');
        setLoadingSubmitConcierges(false);
        return;
      }

      if (!pottel) {
        toast.error('O telefone ?? obrigat??rio');
        setLoadingSubmitConcierges(false);
        return;
      }

      const data = {
        name: portname,
        telefone: pottel,
        condominio_id: 1
      }

      const response = await api.post('v1/add_porteiro', data);
      console.log(response.data.success);
      toast.success('Porteiro adicionado com sucesso!');
      if (response.data.success) {
        alert(response.data.msg);
      }

      handleClose5();
      getConcierges();
      setLoadingSubmitConcierges(false);
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
      setLoadingSubmitConcierges(false);
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
              <div className='d-flex justify-content-between'>
                <div><h4 className=''>Porteiro</h4></div>
                <div>
                  <Button
                    onClick={() => setOpen1(!open1)}
                    className='btn-sm'
                    aria-expanded={open1}
                  >
                    <HiAdjustments />
                  </Button>
                  {/*<Button
                    onClick={() => setOpen2(!open2)}
                    className='btn-sm ms-1'
                    aria-expanded={open2}
                  >
                    <HiOutlineUserCircle />
                  </Button>*/}
                  <Button className='btn-sm ms-1'>
                    <HiRefresh />
                  </Button>
                  <Button className='btn-sm ms-1' onClick={handleShow5}>
                    <HiOutlinePlusSm />
                  </Button>
                </div>
              </div>
              <Collapse in={open1}>
                <div id="example-collapse-text">
                  <div className="d-flex flex-row-reverse">
                    <div className='d-flex'>
                      <div className='input-group input-group-sm  me-3 rounded mt-2 w-100px input-group-data'>
                        <span className="input-group-text" id="basic-addon1"><b>Estado</b></span>
                        <Form.Select className='border-0 ' onChange={(event) => { setStatus(event.target.value); }} aria-label="Default select example">
                          <option value="">Todos</option>
                          <option value="0">Activo</option>
                          <option value="1">Desactivado</option>
                        </Form.Select>
                      </div>
                      <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
                        <input type="text" className="form-control" onKeyUp={(event) => { setNome(event.target.value); }} placeholder="Pesquisar nome" />
                      </div>
                      <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
                        <input type="text" className="form-control" onKeyUp={(event) => { setTelefone(event.target.value); }} placeholder="Pesquisar telefone" />
                      </div>
                      <div className='mt-2 ms-2'>
                        <button type="button" onClick={() => { handleChangeFilterByDateFromTo(); console.log("passou..."); }}  className="btn btn-primary btn-sm"><HiOutlineSearch /></button>
                      </div>
                      {/*<div className='mt-2 ms-2'>
                        <button type="button" className="btn btn-primary btn-sm"><HiOutlineEye /></button>
                      </div>*/}
                    </div>
                  </div>
                </div>
              </Collapse>
              <Collapse in={open2}>
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
                          <th>Telefone</th>
                          <th>Estado</th>
                          <th className='text-right pe-4'>Detalhes</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          !loading ?
                            concierges?.data?.map(employee => (
                              <tr key={employee.id}>
                                <th scope="row" className='ps-4'>
                                  <div className="vatar-tab">
                                    <img src={user} alt="" />
                                  </div>
                                </th>
                                <td>{employee.nome}</td>

                                <td>{employee.telefone}</td>

                                <td>
                                  {
                                    (employee.status == '0') ?
                                      <span className="badge rounded-pill estado-bg-success">Ativado</span>

                                      : <span className="badge rounded-pill estado-bg-danger">Desativado</span>
                                  }

                                </td>
                                <td className='text-right pe-4'>
                                  <Dropdown>
                                    <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                                      <IoEllipsisHorizontal />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                                      <Dropdown.Item onClick={() => handleChangePin(employee.id)}>Reenviar senha</Dropdown.Item>
                                      <Dropdown.Item onClick={() => handleChangeStatus(employee.id)}>Mudar estado</Dropdown.Item>
                                      <Dropdown.Item onClick={() => handleDeletd(employee.id)}>Deletar</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
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

                            concierges?.from + ' - ' + concierges?.to + '- ' + concierges?.total : '0 - 0 itens '

                        }
                        itens
                      </div>
                      <div>
                        <nav className='nav-pagination'>
                          <ul className="pagination">
                            {
                              !loading ?

                                concierges?.prev_page_url ?
                                  <li className="page-item"><button className="page-link" onClick={() => handlePrevPage(concierges?.prev_page_url)} href="#">&laquo;</button></li>
                                  : <li className="page-item"><button className="page-link">&laquo;</button></li>
                                :
                                <>
                                  <li className="page-item"><button className="page-link">&laquo;</button></li>
                                </>
                            }

                            {
                              concierges?.next_page_url ?
                                <li className="page-item"><button className="page-link" onClick={() => handleNextPage(concierges?.next_page_url)}>&raquo;</button></li>
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
                    <span className="badge rounded-pill estado-bg-success">Entrada</span> <br />
                    <IoCalendarOutline /> <font className='font-size-14'>24/05/2022</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> 13h:30m</font><br />
                    <span className="badge rounded-pill estado-bg-danger">Saida</span> <br />
                    <IoCalendarOutline /> <font className='font-size-14'>24/05/2022</font> <IoTimeOutline className='ms-3' /> <font className='font-size-14'> 13h:30m</font><br />
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
          <h5 className='mt-3'>Adicionar Porteiro</h5>
        </Modal.Header>
        <Modal.Body className='pt-0'>
          <form action="">
            <label className='mt-2 mb-2'><b>Nome *</b></label>
            <Form.Control type="text" placeholder="Nome do Porteiro" required onChange={(event) => setName(event.target.value)} />
            <label className='mt-2 mb-2'><b>Telefone *</b></label>
            <Form.Control type="number" placeholder="Telefone" required onChange={(event) => setTel(event.target.value)} />

          </form>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Button variant="secondary" onClick={handleClose5} className='btn-sm'>
            Cancelar
          </Button>

          {
            !loadingSubmitConcierges
              ? <Button variant="primary" onClick={() => handleSaveConcierges()} className='btn-sm'>
                Adicional
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

export default Porters;