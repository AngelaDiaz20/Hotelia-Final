import axios from 'axios';
import React, { useState, useEffect } from 'react';

import SidebarAdmon from "../components/sidebar/SidebarAdmon";
import CardReserva from "../components/listadoAdmin/CardReserva";
import '../components/listadoAdmin/ReservaAdmin.css'


function ReservaAdmin (){

    /* 1. Definir url del API a la que me voy a conectar */
    const url = "https://app-hotelia3.herokuapp.com/reservas";
    /*2.Generar fución asincrona*/
    const getData = async () => {

        const response = axios.get(url);
        return response;
    }
    /*3. UseState para guardar la respuesta de la petición*/
    const [list, setList] = useState([]);
   
    /*4.Hook useEfect ejecuta funciones cada vez que renderizamos un componente*/
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    })

    return(

        <div className="admin-reservation">

            <div>
                <SidebarAdmon/>
            </div>

            <div className='admin-reservation__card-reserva'>
                <h1 class='text-center mt-4'>Reservas</h1>
                {
                list.map((es, index) => (
                    <CardReserva
                        key={index}
                        reservas={es}
                    />
                ))
                }
 
            </div>
        
        </div>
    )}

    export default ReservaAdmin;