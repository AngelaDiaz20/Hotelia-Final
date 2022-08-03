import axios from 'axios'
import { Link, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetalleUsuario = () => {
        const [usuario, setUsuario] = useState([])

        const [dato, setDato] = useState([])

        const {id} = useParams()
        const obtenerUsuario = async()=>{
            const respuesta = await axios.get(`https://app-hotelia3.herokuapp.com/reservas/${id}`)
            const usuario = await respuesta.data
            setUsuario(usuario)
            setDato(usuario.user)
            console.log(respuesta)
        }

        useEffect(()=>{
            obtenerUsuario()
        },[])
    

    return (
        <div>
            <h2>Lista de reservas</h2>
            {
                usuario.map((item)=>(
                    <div>
                        <Link to={`/usuario/${item.id}`}>{item.nombre}</Link>
                    </div>
                ))
            }
        </div>
        
    )}

export default DetalleUsuario;