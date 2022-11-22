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
  HiOutlinePlusSm,
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
import { Modal, Button, } from 'react-bootstrap';
import user from './../../assets/photos/user.png';
import {
  Card,
  Table,
  Dropdown,
  Spinner,
  Collapse,
  Form
} from 'react-bootstrap';
import marisa from './../../assets/photos/marisa.jpg'
import chiao from './../../assets/photos/chiao.jpg'
import cassia from './../../assets/photos/cassia.jpg'
import matheus from './../../assets/photos/matheus.jpg'
import paula from './../../assets/photos/paula.jpg'
import { api } from './../../services/api';
function Agregado() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [appointments, setAppointments] = useState([]);

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [block, setBlock] = useState("");
  const [lote, setLote] = useState("");

  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [status, setStatus] = useState('');
  const [cat, setCat] = useState('');
  const [subcat, setSubCat] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAppointments();
    getCategorias();

  }, [change, show]);

  async function handleChangeFilterByDateFromTo() {
    console.log('ok', status, telefone, cat, subcat, nome);
    try {
      setLoading(true);

      /*if (!from || !to) {
        setLoading(false);
        return;
      }*/

      if (subcat) {

        if (cat) { } else {
          setLoading(false);
          return;
        }

      }

      const response = await api.get(`v1/list_moradores/1/agregado?nome=${nome}&telefone=${telefone}&status=${status}&categoria=${cat}&sub_categoria=${subcat}`);
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
      const response = await api.get('v1/list_moradores/1/agregado');
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

  async function handleSubmitUser() {
    try {

      setIsSubmitted(true);

      if (!name) {
        toast.error('O nome é obrigatório');
        setIsSubmitted(false);
        return;
      }

      if (!tel) {
        toast.error('O quadra é obrigatório');
        setIsSubmitted(false);
        return;
      }

      if (!block) {
        toast.error('O campo nível é obrigatório');
        setIsSubmitted(false);
        return;
      }

      if (!lote) {
        toast.error('O lote é obrigatório');
        setIsSubmitted(false);
        return;
      }

      const data = {
        nome: name,
        telefone: tel,
        quadra: block,
        lote: lote,
        condominio_id: 1,
        tipo: '1'
      }

      const response = await api.post('v1/addMorador', data);
      console.log(response.data);
      if (response.data.data.success == false) {
        toast.error(response.data.data.msg);
        setIsSubmitted(false);
        handleClose();
        return;
      }

      toast.success(response.data.data.msg);

      setIsSubmitted(false);
      handleClose();

    } catch (error) {
      if (error.message === "Network Error") {
        toast.error("Por favor verifique sua conexão com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        toast.error("Erro ao add , por favor, tente adicionar mais tarde!");
      } else if (error.message === "Request failed with status code 400") {
        toast.error("Erro ao add , por favor, tente adicionar mais tarde!");
      } else if (error.status === 500) {
        toast.error("Erro interno, por favor, contactar o suporte!");
      }
      setIsSubmitted(false);
    }
  }

  async function handleChangeBlockId(id) {

    try {
      if (!id) {
        setBlock("");
        return setSubCategorias([]);
      }

      const response = await api.get(`v1/listLotes/${id}?todos=all`);
      setSubCategorias(response.data.data);
      setBlock(id);

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

  async function handleChangePin(userId) {
    try {
      setChange(true);
      if (!userId) {
        toast.error('user id is required');
        return;
      }

      const response = await api.get('v1/redefinir_senha_morador/' + userId);
      toast.success('Senha reenviada com sucesso!');
      setChange(false);

    } catch (error) {
      if (error.message === "Network Error") {
        toast.error("Por favor verifique sua conexão com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        toast.error("Erro ao add , por favor, tente adicionar mais tarde!");
      } else if (error.message === "Request failed with status code 400") {
        toast.error("Erro ao add , por favor, tente adicionar mais tarde!");
      } else if (error.status === 500) {
        toast.error("Erro interno, por favor, contactar o suporte!");
      }
    }
  }


  return (
    <div className="dashboard">
      {/*modal*/}
      <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton className='border-0'>
          <h5 className='mt-3'>Adicionar usuário</h5>
        </Modal.Header>
        <Modal.Body className='pt-0'>
          <form id="form-add">
            <label className='mt-2 mb-2'><b>Nome *</b></label>
            <Form.Control
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className='mt-2 mb-2'><b>Telefone *</b></label>
            <Form.Control type="number"
              value={tel}
              placeholder="Telefone"
              onChange={(e) => setTel(e.target.value)}
            />
            <label className='mt-2 mb-2'><b>Quadra *</b></label>
            <Form.Select
              value={block}
              onChange={(event) => { handleChangeBlockId(event.target.value); }}
            >
              <option value="">Todas quadra</option>
              {
                categorias?.cat?.map(categoria => (
                  <option value={categoria.id}>{categoria.quadra}</option>
                ))
              }
            </Form.Select>

            <label className='mt-2 mb-2'><b>Lote *</b></label>
            <Form.Select
              value={lote}
              onChange={(event) => { setLote(event.target.value); }}
            >
              <option value="">Todos lotes</option>
              {
                subcategorias?.sub_cat?.map(subcategoria => (
                  <option value={subcategoria.id}>{subcategoria.lote}</option>
                ))
              }
            </Form.Select>
          </form>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          {
            !isSubmitted ? <>
              <Button variant="secondary" onClick={handleClose} className='btn-sm'>
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => handleSubmitUser()} className='btn-sm'>
                Adicionar
              </Button>
            </>
              :
              <>
                <Button variant="secondary" disabled className='btn-sm'>
                  Cancelar
                </Button>
                <Button variant="primary" disabled className='btn-sm'>
                  Adicionando...
                </Button>
              </>
          }

        </Modal.Footer>
      </Modal>
      {/*modal*/}

      <main className='d-flex'>
        <Menu />
        <section className='w-100 h-100 height-overflow'>
          <MenuTop />
          <div className="p-4">
            <div className="container">
              <div className='d-flex w-max-1200 justify-content-between'>
                <div><h4 className=''>Moradores</h4></div>
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
                      <div className='input-group input-group-sm  me-3 rounded mt-2 w-100px input-group-data'>
                        <span className="input-group-text" id="basic-addon1"><b>Estado</b></span>
                        <Form.Select className='border-0 ' onChange={(event) => { setStatus(event.target.value); }} aria-label="Default select example">
                          <option value="">Todas</option>
                          <option value="0">Activo</option>
                          <option value="1">Desativado</option>
                        </Form.Select>
                      </div>
                      <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
                        <Form.Select className='border-0' onChange={(event) => { listSubCat(event.target.value); setCat(event.target.value); }} aria-label="Default select example">
                          <option value="">Todas quadra</option>
                          {
                            categorias?.cat?.map(categoria => (
                              <option value={categoria.id}>{categoria.quadra}</option>
                            ))
                          }
                        </Form.Select>
                        <Form.Select className='border-0' onChange={(event) => { setSubCat(event.target.value); }} aria-label="Default select example">
                          <option value="">Todos lotes</option>

                          {
                            subcategorias?.sub_cat?.map(subcategoria => (
                              <option value={subcategoria.id}>{subcategoria.lote}</option>
                            ))
                          }
                        </Form.Select>
                      </div>
                      <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
                        <input type="text" className="form-control" onKeyUp={(event) => { setNome(event.target.value); }} placeholder="Pesquisar nome" />
                      </div>
                      <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
                        <input type="text" className="form-control" onKeyUp={(event) => { setTelefone(event.target.value); }} placeholder="Pesquisar telefone" />
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

              <div className='mt-4'>
                <div className="btn-group border-botton-right-0">
                  <Link to="/residentsc" className="btn border-botton-right-0 btn-light-tabs" >Principal</Link>
                  <Link to="/agregado" className="btn border-botton-right-0 btn-light-tabs active">Agregado</Link>
                  <Link to="/funcionario" className="btn border-botton-right-0 btn-light-tabs">Funcionário</Link>
                </div>
                <div className="card border-0 border-botton-right-left-0 card-table">
                  <div className="card-body pb-2"></div>
                  <div className='table-h'>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className='ps-4'>Avatar</th>
                          <th>Nome</th>
                          <th>Residência</th>
                          <th>Telefone</th>
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
                                    <img src={user} alt="" />
                                  </div>
                                </th>
                                <td>{appointment.nome}</td>
                                <td>Q {appointment.quadra} - L {appointment.lote}</td>
                                <td>{appointment.telefone}</td>
                                <td>
                                  {
                                    (appointment.status == '0') ?
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
                                      <Dropdown.Item onClick={() => handleChangePin(appointment.id)}>Reenviar senha</Dropdown.Item>
                                      {/*<Dropdown.Item href="#/action-2">Activar</Dropdown.Item>
                                      <Dropdown.Item href="#/action-3">Desativa</Dropdown.Item>*/}
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
    </div>
  );
}

export default Agregado;