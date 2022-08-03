import './CardRoom.css';
import { Card, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Formik } from 'formik';
import dobleroom1 from '../../img/room-doble.jpg';
import dobleroom2 from '../../img/room-doble2.jpg';
import Logo2 from '../../img/Hotelia horizontal negro.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';


function CardRoom({ habitaciones }) {

    const [data, setData] = useState({ fentrada: "", fsalida: "", cantidadNoches: "", totalreserva: "", userId: "10143224567", habitacionId: "105" });
    const handleChangeA = ({ target }) => {

        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const url = "https://app-hotelia3.herokuapp.com/reservas";

    const handleSubmitA = async (e) => {
        e.preventDefault();
        const response = await axios.post(url, data);
        alert(response);
        if (response.status === 201) {
            Swal.fire(
                `Tu Reserva: <strong>
                </strong>
                ha sido registrada exitosamente!`,
                'success'
            )
            Navigate.push("/");
        } else {
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar tu reserva!`,
                'error'
            )
        }
    }



    const disableDate = new Date().toISOString().slice(0, 10);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const fecha = habitaciones.reservas.filter(f => f.fechaEntrada);

    const cantidadNoches = () => {
        var fechaE = new Date(document.getElementById('fentrada').value);
        var fechaS = new Date(document.getElementById('fsalida').value);
        /*console.log('fecha entrada', fechaE);
        console.log('fecha salida', fechaS);*/
        var time = fechaS.getTime() - fechaE.getTime();
        //console.log(fechaE);
        var days = Math.floor(time / (1000 * 60 * 60 * 24));
        document.getElementById("cantidadNoches").value = days;
        var valorTotal = days * habitaciones.valornoche;
        document.getElementById("totalreserva").value = valorTotal;
    }

    return (

        <div className='box-card'>

            <div className='card1'>
                <Card style={{ width: '18rem' }} className='card-room'>
                    <div>
                        <Button onClick={handleShow} className='btn-more'>
                            <i className="bi bi-plus-lg"></i>
                            <p>Ver más</p></Button>
                        <Card.Img variant="top" src={`https://app-hotelia3.herokuapp.com${habitaciones.img}`}
                            className='img-card-room p-2' />
                        <div className='item-name-room'>
                            <p className="item-img">{habitaciones.nombrehab}</p>
                        </div>

                    </div>
                    <Card.Body>
                        <Card.Text className='price-text text-center'>$ {habitaciones.valornoche}</Card.Text>
                        <Button onClick={handleShow2} className='item-reservar'>Reservar</Button>
                    </Card.Body>
                </Card>
            </div>

            <div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    keyboard={false}
                >
                    <Modal.Header className='title-modalroom'>
                        <h4>{habitaciones.nombrehab}</h4>
                    </Modal.Header>
                    <div id="carouselExampleInterval" className="carousel slide color-body" data-bs-ride="carousel">
                        <div className="carousel-inner img-slide">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={`https://app-hotelia3.herokuapp.com${habitaciones.img}`} class="d-block w-img" alt='' />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={dobleroom1} className="d-block w-img" alt='' />
                            </div>
                            <div className="carousel-item">
                                <img src={dobleroom2} className="d-block w-img" alt='' />
                            </div>
                        </div>
                        <button className="carousel-control-prev color-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next color-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden ">Next</span>
                        </button>
                    </div>
                    <Modal.Body className='row m-auto'>
                        <p className='p-3'>{habitaciones.descripcion}</p>
                        <div className='col-12 col-md-6'>
                            <div className='d-flex'>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-wifi icons-modal-room"></i>
                                    <p className='item-modal-room ps-2'>Wifi: </p>
                                </div>
                                <p className='ps-2'>{habitaciones.wifi}</p>
                            </div>
                            <div className='d-flex'>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-vault icons-modal-room"></i>
                                    <p className='item-modal-room ps-2'>Caja fuerte: </p>
                                </div>
                                <p className='ps-2'>{habitaciones.cajafuerte}</p>
                            </div>
                            <div className='d-flex'>
                                <div className='d-flex'>
                                    <i className="bi bi-tablet icons-modal-room"></i>
                                    <p className='item-modal-room ps-2'>Nevera: </p>
                                </div>
                                <p className='ps-2'>{habitaciones.nevera}</p>
                            </div>

                            <div className='d-flex'>
                                <div className='d-flex'>
                                    <i className="bi bi-tv-fill icons-modal-room"></i>
                                    <p className='item-modal-room ps-2'>Televisión: </p>
                                </div>
                                <p className='ps-2'>{habitaciones.tv}</p>
                            </div>

                            <div className='d-flex'>
                                <div className='d-flex'>
                                    <i className='fa-solid fa-toilet icons-modal-room pt-1'></i>
                                    <p className='item-modal-room ps-2'>Baño: </p>
                                </div>
                                <p className='ps-2'>{habitaciones.banio}</p>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn-closemodal' onClick={handleClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/*Modal reservar*/}
            <div>

                <Modal
                    show={show2}
                    onHide={handleClose2}
                >
                    <Modal.Header className='title-modalroom'>
                        <h4>{habitaciones.nombrehab}</h4>
                    </Modal.Header>
                    <Modal.Body className='row m-auto'>
                        <img src={Logo2} alt='logo-hotelia' className='log-modal-reserve' />
                        {/*<Formik

                            initialValues={{
                                fullname: '',
                                doc: '',
                                cantnoches: '0'
                            }}

                            validate={(valores) => {
                                let errores = {};

                                //Validación nombre
                                if (!valores.fullname) {
                                    errores.fullname = 'Ingrese su nombre completo'
                                } else if (!/^[a-zA-ZÁ-ý\s]{1,50}$/.test(valores.fullname)) {
                                    errores.fullname = 'El nombre solo puede contener letras'
                                }

                                //Validación documento
                                if (!/^[a-zA-ZÁ-ý\s-0-9]{1,20}$/.test(valores.doc)) {
                                    errores.doc = 'Ingrese el No.Documento'
                                } else if (valores.doc < 8) {
                                    errores.doc = 'El documento debe tener mínimo 10 digitos'
                                }

                                //Validación cantidad noches
                                if (!/^[0-9]{1,2}$/.test(valores.cantnoches)) {
                                    errores.cantnoches = 'Ingrese la cantidad de noches'
                                }
                                return errores;
                            }}

                            onSubmit={() => {
                                console.log("enviado");
                            }}
                        >
                            {({ values, errors, handleSubmit, handleChange, handleBlur }) => (*/}
                        <form className='cont-form-reserve'
                            onSubmit={handleSubmitA}>
                            <div className='cont-entrada'>
                                <label for='entrada' className='ps-4 pt-4'>Entrada: </label>
                                <input
                                    id='fentrada'
                                    name='fentrada'
                                    type='date'
                                    min={disableDate}
                                    //onChange={cantidadNoches}
                                    onChange={handleChangeA}
                                    onBlur={cantidadNoches}
                                    data-inputmask="'alias': 'yyyy/MM/dd'"
                                    data-mask required
                                    value={data.fentrada}
                                />
                            </div>
                            <div className='cont-entrada'>
                                <label for='salida' className='ps-4 pt-3'>Salida: </label>
                                <input
                                    id='fsalida'
                                    name='fsalida'
                                    type='date'
                                    min={disableDate}
                                    //onChange={cantidadNoches}
                                    onChange={handleChangeA}
                                    onBlur={cantidadNoches}
                                    data-inputmask="'alias': 'yyyy/MM/dd'"
                                    value={data.fsalida}
                                />
                            </div>
                            {/*<div className='input-fullname'>
                                <label>Nombre completo: </label>
                                <input
                                    name='userId'
                                    type='text'
                                    //value={values.fullname}
                                    //onBlur={handleBlur}
                                    max="10"
                                />

                                {/*{errors.fullname && <div className='error message-validate-reserve'>
                                            {errors.fullname}</div>}

                            </div>*/}
                            <div className='input-doc'>
                                <label>No.Documento: </label>
                                <input
                                    id='userId'
                                    name='userId'
                                    type='text'
                                    value={data.userId}
                                    onChange={handleChangeA}
                                //value={values.doc}
                                //onBlur={handleBlur}
                                />

                                {/*{errors.doc && <div className='error message-validate-reserve'>
                                            {errors.doc}</div>}*/}

                            </div>
                            <div className='input-doc'>
                                <label>Habitación: </label>
                                <input
                                    id='habitacionId'
                                    name='habitacionId'
                                    type='text'
                                    value={data.habitacionId}
                                    onChange={handleChangeA}
                                    //value={values.doc}
                                    //onBlur={handleBlur}
                                    max="10"
                                />

                                {/*{errors.doc && <div className='error message-validate-reserve'>
                                            {errors.doc}</div>}*/}

                            </div>
                            <div className='input-doc'>
                                <label>Cantidad de noches: </label>
                                <input
                                    id='cantidadNoches'
                                    name='cantidadNoches'
                                    type='number'
                                    value={data.cantidadNoches}
                                    onChange={handleChangeA}
                                //onChange={handleChange}
                                //onBlur={handleBlur}
                                />

                                {/*{errors.cantnoches && <div className='error message-validate-reserve'>
                                            {errors.cantnoches}</div>}*/}

                            </div>
                            <span className='total-nigth m-auto pt-4 pb-3'><label>VALOR TOTAL </label></span>
                            <input className='text-value-nigth m-auto mt-1 mb-1'
                                id='totalreserva'
                                name='totalreserva'
                                type='text'
                                placeholder='$'
                                onChange={handleChangeA}
                                value={data.totalreserva} />

                            <button className='btn-closemodal' type='submit' >Guardar reserva</button>
                        </form>
                        {/*} )}
                        </Formik>*/}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose2} className='btn-closemodal' >Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div >

        </div >


    );
}

export default CardRoom;
