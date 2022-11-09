import React, { useState, useEffect } from 'react';
import { HiOutlinePlusSm} from "react-icons/hi";
import { Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { api } from './../../services/api';


function Typology() {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
 
 const [loadingSubmitAppointments, setLoadingSubmitAppointments] = useState(false);
 const [appointment, setAppointment] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
 {/* const handleShow = () => setShow(true);
*/}

useEffect(() => {
  setLoading(true);
  getAppointments();
}, []);


  
async function getAppointments() {
  try {
    const response = await api.get('v1/list_funcionario/1');
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
 
async function handleSaveAppointments(morador_id) {
    try {
      setLoadingSubmitAppointments(true);
      if (!appointment) return alert('obrigatório!');

      const data = {
        title: appointment,
        morador_id: morador_id
      }

      const response = await api.post('v1/add_funcionario', data);

      if (response.data.success) {
        alert(response.data.msg);
      }

      handleClose();
      getAppointments();
      setLoadingSubmitAppointments(false);
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
      setLoadingSubmitAppointments(false);
    }
  }

  return (
    <>
    {
      !loading ?
      appointments?.data?.map(appointment => (
        <tr key={appointment.id}>
          <th scope="row" className='ps-4'>
          {appointment.nome}
          </th>
        </tr>
      )):<>....</>}


    <Form.Control type="text" required placeholder="" onChange={(event) => setAppointments(event.target.oo)}/>
    <Form.Control type="text" required placeholder="" onChange={(event) => setAppointments(event.target.oo)}/>
      <Button variant="primary" onClick={() => handleSaveAppointments(1)} className='btn-sm'> Adicionar </Button>
    </>
  );
}

export default Typology;