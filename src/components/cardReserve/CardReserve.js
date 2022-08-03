import './CardReserve.css';
import { Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import dobleroom from '../../img/doble-room.jpg';

function CardReserve({ reservas}) {

    const room = reservas["habitaciones"];
    const dataRoom = room[0];
    console.log(dataRoom.nombrehab);

    const cancelarReserva = () => {
        Swal.fire({
            icon: 'warning',
            html: '<img src="img/logo2.png">'
                + '<p>Si cancela esta reservación, no se podrá revertir</p>',
            showCancelButton: true,
            cancelButtonColor: "#9C2759",
            confirmButtonColor: "#333333",
            confirmButtonText: 'Si,cancelar',
            cancelButtonText: 'No cancelar',
            background: '#FFFDFB',
            color: '#000'
        }).then((result) => {
            if (result.isConfirmed(dataRoom.estado === "Disponible")) {
                Swal.fire('Su recerva ha sido cancelada', '', 'success')
            }
        })
    }

    return (
        <div className='box-reserve'>
            <Card className='card-room1'>
                <div>
                    <Card.Img variant="top" src={dobleroom} className='p-2' />
                </div>
                <Card.Body className='text-cardreserve'>
                    <p><span>Fecha de entrada:  </span>{reservas.fentrada}</p>
                    <p><span>Fecha de salida:  </span>{reservas.fsalida}</p>
                    <p><span>Cantidada de noches:  </span>{reservas.cantidadNoches}</p>
                    <p><span>Fecha de reserva:  </span>{reservas.freserva}</p>
                    <p><span>Habitación:  </span>{dataRoom.nombrehab}<br />{dataRoom.descripcion}</p>
                    <p className='text-center text-totalvalue'><span>VALOR TOTAL:  </span>$ {reservas.totalreserva}</p>
                    <Button className='item-reservar item-cancelar' onClick={cancelarReserva}>Cancelar</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardReserve;