import "../formHuesped/FormHuesped.css"
import "./EditarUsuario.css"
import usuariofoto from "../../img/foto-usuario.jpeg"
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import Link from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ModalContraseña from "./ModalContrasena";
import ModalContacto from "./ModalContacto";

function EditarUsuario() {
    //modal
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    //validaciones
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    return (
        <div className="editUsuario-background">
            <div className="editarusuario-fondo">
                
                <div className="formeditUsuario-background">
                    <h1>Bienvenido, Juan Carlos</h1>
                    <div className="editarusuario-display">
                        <div className="editarusuario-edit">
                            <div>
                                <img src={usuariofoto} />   
                            <div class="contenedor-cambiar-foto">
                            <button class="cambiar-foto-editarusuario"><i class="fa-solid fa-upload"></i></button>
                            <input type="file" name="myfile" className="formhuesped-image"  accept=".jpg,.png" />
                            </div></div>
                            <div className="boton-cambiardatos">
                                <Button className="cambiarcontraseña-boton" variant="secondary" onClick={handleShow}>Cambiar Contraseña</Button>
                                <Button className="cambiarcontraseña-boton" variant="secondary" onClick={handleShow2}>Actualizar Datos</Button>
                            </div>
                        </div>
                        <Modal className="formhuesped-modal form-editarusuario-modal" show={show} onHide={handleClose}>
                            <Modal.Header className="modal-header p-auto" closeButton>
                                <Modal.Title><h1 className="text-center">Cambiar Contraseña</h1></Modal.Title>
                            </Modal.Header>
                            <ModalContraseña/>          
                        </Modal>

                        <Modal className="formhuesped-modal form-editarusuario-modal" show={show2} onHide={handleClose2}>
                            <Modal.Header className="modal-header p-auto" closeButton>
                                <Modal.Title><h1 className="text-center">Actualizar Datos de Contacto</h1></Modal.Title>
                            </Modal.Header>
                            <ModalContacto/>
                        </Modal>
                        <div className="formhuesped">
                            <div>
                                <h4>Tipo de documento:</h4>
                                <h6>Cédula de Ciudadanía</h6>
                            </div>
                            <div>
                                <h4>Número de documento:</h4>
                                <h6>1254784102</h6>
                            </div>
                            <div>
                                <h4>Nombres:</h4>
                                <h6>Juan Carlos</h6>
                            </div>
                            <div>
                                <h4>Apellidos:</h4>
                                <h6>Rivero Rodriguez</h6>
                            </div>
                            <div>
                                <h4>Fecha nacimiento:</h4>
                                <h6>1987-12-29</h6>
                            </div>
                            <div>
                                <h4>País de origen: </h4>
                                <h6>Colombia</h6>
                            </div>
                            <div>
                                <h4>Género:</h4>
                                <h6>Masculino</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditarUsuario