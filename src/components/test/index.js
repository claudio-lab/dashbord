import React, { useState, useEffect } from 'react';
import { HiOutlinePlusSm} from "react-icons/hi";
import { Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { api } from './../../services/api';


function Typology() {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);




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
    </>
  );
}

export default Typology;