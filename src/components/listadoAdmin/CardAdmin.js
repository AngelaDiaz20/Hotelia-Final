import React from 'react';
import { Card, Button } from 'react-bootstrap';

import axios from 'axios'
import Swal from 'sweetalert2';

import '../card/Card.css'

function CardRoom({ habitaciones, setUplist, upList, handleOpen, setDataModal, handleOpenState, setDataModalState, handleOpenBooking  }) {

    const url="https://app-hotelia3.herokuapp.com/habitaciones";

    const handleDelete=async()=>{
        Swal.fire({
            title: '¿Está seguro que desea eliminar este habitación?',
            text: "¡No puede revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6', 
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ¡bórrala!',
            cancelButtonText:'Cancelar'
          }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
                
                axios.delete(`${url}/${habitaciones._id}`).then((response)=>{
                    console.log(response);
                    if(response.status===200){
                        Swal.fire(
                            'Eliminado',
                            'La habitación ha sido eliminada',
                            'success'
                          )
                          setUplist(!upList);
                    }
                    else{
                        Swal.fire(
                            'Error',
                            'Error al eliminar la habitación',
                            'error'
                        )
                    }
                })
              
            }
          })
    }

    const handleEdit=()=>{
        handleOpen();
        setDataModal(habitaciones);
    }

    const handleEditState=()=>{
        handleOpenState();
        setDataModalState(habitaciones);
    }


    return (
            <Card  style={{ width: '20rem' }} key={habitaciones._id} className="list-rooms__card">
                <div className='container-image-room'>
                    <Card.Img variant="top" src={`https://app-hotelia3.herokuapp.com${habitaciones.img}`}/>
                    <Card.Title className="list-rooms__cardTitle">{habitaciones.nombrehab}</Card.Title>

                    {/*<Card.Text className='card-admin__layer'>
                        <h2 className='no-disponible'>No disponible</h2>
                        <h2 className='en-mantenimiento'>En mantenimiento</h2>
                    </Card.Text>*/}
                </div>

                <Card.Body>    
                    <Card.Text className='card-admin__description'>
                        <p className='list-rooms__cardPrice'>${habitaciones.valornoche} COP</p>
                        <p className='card-admin__description-text'>{habitaciones.descripcion}</p>
                        <div>
                            <p><strong>N° habitación:</strong> {habitaciones._id}</p>
                            <p><strong>Estado:</strong> {habitaciones.estado}</p>
                        </div>

                        <div className='card-admin__description-text'>
                            <p><i class="card-admin__description-icon fa-solid fa-bed"></i>: {habitaciones.camas}</p>
                            <p><i class="card-admin__description-icon fa-solid fa-users"></i>: {habitaciones.capacidad}</p>
                        </div>

                    </Card.Text>

                    <div className='list-rooms__buttons'>
                        <Button variant="secondary" className='list-rooms__cardButtonPrincipal' onClick={handleEdit}>Modificar</Button>
                        <Button variant="secondary" className='list-rooms__cardButtonPrincipal'  onClick={handleEditState}>Estado</Button>
                        {/*<Button variant="danger" onClick={handleDelete}>Eliminar</Button>*/}
                    </div>

                    <Button className='list-rooms__cardButtonSecondary hover-button' onClick={handleOpenBooking}>Reservar</Button>

                </Card.Body> 
            </Card> 

    );
}

export default CardRoom;