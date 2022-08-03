import React from 'react';
import { Button } from 'react-bootstrap';
import '../card/Card.css';

const CardReserva = ({ reservas }) => {

    const user = reservas["user"]
    const dataUser = user[0];
    console.log(dataUser)

    const room = reservas["habitaciones"];
    const dataRoom = room[0];
    console.log(dataRoom.nombrehab)

    return (
        <>
            <div className='cardReservaAdmin'>
            
            <div className='basic-reservation-data'>
                <h4>Fecha de reserva: {reservas.freserva}</h4> 
                <h4><strong>Usuario: </strong>{dataUser.nombre} {dataUser.apellido}</h4>
            </div>

            <div className="accordion accordion-booking" id="accordionPanelsStayOpenExample" >
                
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                            Datos de usuario
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body booking-data-user">
                            <p><strong>Nombres:</strong> {dataUser.nombre}</p>
                            <p><strong>Apellidos:</strong> {dataUser.apellido}</p>
                            <p><strong>{dataUser.tipodoc}:</strong> {dataUser._id}</p>
                            <p><strong>Email:</strong> {dataUser.email}</p>
                            <p><strong>Teléfono:</strong> {dataUser.telefono}</p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Datos de la habitación
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body booking-room-data">
                            <div className='booking-data__room-image'>
                                <img src={`https://app-hotelia3.herokuapp.com${dataRoom.img}`} alt={dataRoom.nombrehab}/>
                            </div>
                            
                            <div className='booking-data__room-description'>
                                <div className='booking-data__room-description-title'>
                                    <h4>{dataRoom.nombrehab}</h4>
                                    <h4>N° habitación: {dataRoom._id}</h4> 
                                </div>    
                                <p><span>${dataRoom.valornoche} COP</span> valor por noche</p>
                                <p>{dataRoom.descripcion}</p>
                                <p><i class="fa-solid fa-users"></i> {dataRoom.capacidad}</p>
                                <p><i class="fa-solid fa-bed"></i> {dataRoom.camas}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Datos de reserva
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body booking-data__description">
                            <div className='booking-data__booking-description'>
                                <p><strong>Fecha de entrada:</strong> {reservas.fentrada}</p>
                                <p><strong>Fecha de salida:</strong> {reservas.fsalida}</p>
                                <p><strong>Total de noches:</strong> {reservas.cantidadNoches}</p>
                            </div>

                            <div className='booking-prices'>
                                <div className='booking-warning'>
                                    <p>Podrás cancelar esta reserva hasta 6 horas antes de la fecha y hora de entrada estipuladas aquí.</p>
                                </div>

                                <div className='booking-data__booking-price'>
                                    <h5 className='booking-description__subtotal'><strong>SUBTOTAL:</strong> ${dataRoom.valornoche} COP</h5>

                                    <h4 className='booking-description__total'><strong>TOTAL:</strong> ${reservas.totalreserva} COP</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-admin__buttons-booking'>
                <button className='card-admin__cardButtonSecondary button-booking hover-button'>Cancelar reserva</button>
                <Button variant='secondary' className='card-admin__cardButtonPrincipal button-booking' type="submit">Confirmar reserva</Button>
            </div>

            </div>
        </>
    )
}

export default CardReserva;
