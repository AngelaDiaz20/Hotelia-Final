import './VistaReserva.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import CardReserve from '../cardReserve/CardReserve';

function VistaReserva() {

    /* 1. Definir url del API a la que me voy a conectar */
    const url = "https://app-hotelia3.herokuapp.com/reservas";
    /*2.Generar fución asincrona*/

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3. UseState para guardar la respuesta de la petición*/
    const [list, setList] = useState([]);
    /*5.Crear otro estado para refrescar el listado despues de eliminar*/
    const [upList, setUplist] = useState([false]);

    /*Agregar una constante para actualizar el estado del modal*/
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false); }
    const handleOpen = () => { setShow(true); }

    const [dataModal, setDataModal] = useState({});

    const handleChangeModal = ({ target }) => {
        setDataModal({ ...dataModal, [target.name]: target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(`${url}/${dataModal.id}`, dataModal);

        if (response.status === 200) {
            Swal.fire(
                'Cambio guardado!',
                `Tu producto: <strong>
                ${response.data.id}
                </strong>
                ha sido editado exitosamente!`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        } else {
            Swal.fire(
                'Error!',
                `Hubo un problema al editar tu producto!`,
                'error'
            )
        }
    }

    /*4.Hook useEfect ejecuta funciones cada vez que renderizamos un componente*/
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])
    console.log([list]);


    return (
        <div>
            <div className='title-room2 mt-5 mb-5'>
                <h2>Mis Reservas</h2>
            </div>
            <div className='cont-cards-reserve'>
                {
                    list.map((es, index) => (
                        <CardReserve
                            key={index}
                            reservas={es}
                            setUplist={setUplist}
                            upList={upList}
                            handleClose={handleClose}
                            handleOpen={handleOpen}
                            setDataModal={setDataModal}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default VistaReserva;