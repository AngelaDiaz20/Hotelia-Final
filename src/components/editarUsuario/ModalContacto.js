import "../formHuesped/FormHuesped.css"
import "./EditarUsuario.css"
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function ModalContacto() {
    //modal
    const handleClose = () => setTimeout(() => handleClose(window.location.replace('/editarperfil'), 0));
    //validaciones
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    return (
        <Formik
            initialValues={{
                correo: ' ',
                telefono: ''
            }}
            validate={(valores) => {
                let errores = {};
                // Validacion contraseña "correo"
                if(!valores.correo){
                    errores.correo = 'Por favor ingresa un correo electronico'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                    errores.correo = 'Digite un correo valido. ej: intento@gmail.com.'
                }
                // Validacion telefono
                if (!valores.telefono) {
                    errores.telefono = 'Por favor ingresa un número de teléfono'
                } else if (!/^[0-9]{10,11}$/.test(valores.telefono)) {
                    errores.telefono = 'Digite un teléfono valido'
                }
                return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
                resetForm();
                console.log('Formulario enviado');
                cambiarFormularioEnviado(true);
                setTimeout(() => cambiarFormularioEnviado(false), 5000);
                setTimeout(() => handleClose(false), 2000)
                setTimeout(() => window.location.replace('/editarperfil'), 1000);
            }}
        >
            {({  errors }) => (
                <Form>
                    <Modal.Body>
                                <div>
                                    <label>Email</label>
                                    <Field
                                        className="formhuesped-input"
                                        type="text"
                                        id="correo"
                                        name="correo"
                                        placeholder="angievargas@gmail.com"
                                    />
                                </div>
                                <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
                                <div>
                                    <label>Teléfono</label>
                                    <Field
                                        className="formhuesped-input"
                                        type="number"
                                        name="telefono"
                                        id="telefono"
                                        placeholder="1504673"
                                    />
                                </div>
                                <ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
                                {formularioEnviado && <p className="exito">Datos actualizados</p>}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                                <Button className=" editar-usuario-primary" type="submit">Actualizar datos</Button>
                            </Modal.Footer>
                </Form>
            )}
        </Formik>
    );
}
export default ModalContacto