import "../formHuesped/FormHuesped.css"
import "./EditarUsuario.css"
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function ModalContraseña() {
    //modal
    const handleClose = () => setTimeout(() => handleClose(window.location.replace('/editarperfil'), 0));
    //validaciones
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    return (

        <Formik
            initialValues={{
                actual: '',
                newC: '',
                newAgainC: ''
            }}
            validate={(valores) => {
                let errores = {};
                // Validacion contraseña "actual"
                if (!valores.actual) {
                    errores.actual = 'Por favor ingresa su contraseña actual'
                } else if (!/^[A-Za-z\d$@$!%*?&]{8,15}$/.test(valores.actual)) {
                    errores.actual = 'Contraseña incorrecta'
                }
                // Validacion newC
                if (!valores.newC) {
                    errores.newC = 'Por favor ingresa un nueva contraseña'
                } else if (!/^[A-Za-z\d$@$!%*?&]{8,15}$/.test(valores.newC)) {
                    errores.newC = 'Digite una contraseña valida'
                }
                // Validacion newAgainC
                if (!valores.newAgainC) {
                    errores.newAgainC = 'La contraseña no coincide'
                }
                else if (valores.newAgainC !== valores.newC) {
                    errores.newAgainC = "La contraseña no coincide"
                }
                return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
                resetForm();
                console.log('Formulario enviado');
                cambiarFormularioEnviado(true);
                setTimeout(() => cambiarFormularioEnviado(false), 5000);
                setTimeout(() => handleClose(false), 2000)
                setTimeout(() => window.location.replace('/login'), 1000);
            }}
        >
            {({ errors }) => (
                <Form>
                    <Modal.Body>
                        <div>
                            <label>Digite la Contraseña Actual</label>
                            <Field
                                className="formhuesped-input"
                                type="password"
                                name="actual"
                                id="actual"
                            />
                        </div>
                        <ErrorMessage name="actual" component={() => (<div className="error">{errors.actual}</div>)} />
                        <div>
                            <label>Contraseña Nueva </label>
                            <Field
                                className="formhuesped-input"
                                type="password"
                                name="newC"
                                id="newC"
                            />
                        </div>
                        <ErrorMessage name="newC" component={() => (<div className="error">{errors.newC}</div>)} />
                        <div>
                            <label>Confirmar Contraseña</label>
                            <Field
                                className="formhuesped-input"
                                type="password"
                                name="newAgainC"
                                id="newAgainC"
                            />
                        </div>
                        <ErrorMessage name="newAgainC" component={() => (<div className="error">{errors.newAgainC}</div>)} />
                        {formularioEnviado && <p className="exito">Contraseña cambiada con exito!</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                        <Button className=" editar-usuario-primary" type="submit">Cambiar Contraseña</Button>
                    </Modal.Footer>
                </Form>
            )}
        </Formik>
    );
}
export default ModalContraseña