import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap';
import axios from "axios";
import { Link } from 'react-router-dom'

import { ContainerForm, GrupoInput, GrupoCheckbox } from '../../elements/formStyle/FormStyle';

import './FormHabitacion.css';
import './Imagen.css'
//
import IconoNevera from '../../img/bxs-fridge.svg';
import Habitaciones from '../../pages/Habitaciones';

import Swal from 'sweetalert2';
//import {Link} from 'react-router-dom'

function FormHabitacion() {

    const url = "https://app-hotelia3.herokuapp.com/habitaciones";

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    //Previsualización de imagen
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);

    const handleImageChange = (e) => {
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            };
            reader.readAsDataURL(selected)
        } else {
            setError(true);
        }
    };

    return (

        <section className='room-registration-form'>

            <Formik
                initialValues={{
                    nombrehab: '',
                    _id: '',
                    valornoche: '',
                    camas: '',
                    capacidad: '',
                    descripcion: '',
                    estado: 'Disponible',
                    //img:'',
                    cajafuerte:'',
                    nevera:'',
                    banio:'',
                    wifi:'',
                    tv:''
                }}

                validate={(valores) => {
                    let errores = {};

                    //Validación nombre
                    if (!valores.nombrehab) {
                        errores.nombrehab = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombrehab)) {
                        errores.nombrehab = 'Nombre no válido'
                    }

                    //Validación número habitación
                    if (!valores._id) {
                        errores._id = 'Por favor ingresa un número'
                    } else if (!/^[0-9]{3,3}$/.test(valores._id)) {
                        errores._id = 'El número corresponde a 3 dígitos'
                    }

                    //Validación cantidad camas
                    if (!valores.camas) {
                        errores.camas = 'Por favor ingresa una cantidad'
                    } else if (!/^[0-9]{1,2}$/.test(valores.camas)) {
                        errores.camas = 'Máximo 10 camas'
                    }

                    //Validación cantidad huespedes
                    if (!valores.capacidad) {
                        errores.capacidad = 'Por favor ingresa una cantidad'
                    } else if (!/^[0-9]{1,2}$/.test(valores.capacidad)) {
                        errores.capacidad = 'Máximo 20 huéspedes'
                    }

                    //Validación valor de la reserva
                    if (!valores.valornoche) {
                        errores.valornoche = 'Por favor ingresa un número'
                    } else if (!/^[0-9]{5,12}$/.test(valores.valornoche)) {
                        errores.valornoche = 'Min 5 dígitos, máx 12 dígitos'
                    }

                    //Validación descripción
                    if (!valores.descripcion) {
                        errores.descripcion = 'Por favor ingresa una descripción'
                    } else if (!/^[^$%&|<>#]{1,500}$/.test(valores.descripcion)) {
                        errores.descripcion = 'Descripción demasiado extensa'
                    }

                     //Validación imagen
                     //if(!valores.img){
                      //  errores.img = 'Por favor añade una imagen'
                    //}   

                    return errores;
                }}

                onSubmit={async (valores, { resetForm }) => {
                    resetForm();
                    console.log(valores);
                    const response = await axios.post(url, valores);//await espera hasta que se ejecute la petición
                    console.log(response);
                    console.log('Formulario enviado');
                }}
            >

                {({ errors}) => (

                    <ContainerForm>
                        <h1 className='room-registration-form__title'>Registro de nueva habitación</h1>

                        <Form className='modify-room__form-register'>

                            <section className='modify-room__information-basic room-form-register'>

                                <div className='modify-room__image-principal image__form'>
                                    <div className="App">
                                        <div className="container">
                                            {error && <p className="errorMsg">File not supported</p>}
                                            <div className="imgPreview"
                                                style={{
                                                    background: imgPreview
                                                        ? `url("${imgPreview}") no-repeat center/cover`
                                                        : "#131313"
                                                }}
                                            >
                                                {!imgPreview && (
                                                    <>
                                                        <p>Add an image</p>
                                                        <label htmlFor="fileUpload" className="customFileUpload">Choose file</label>
                                                        <input type='file' id="fileUpload" onChange={handleImageChange} />
                                                        <span>(jpg, jpeg or png)</span>
                                                    </>
                                                )}
                                            </div>

                                            {imgPreview && <button onClick={() => setImgPreview(null)} className='button__image'>Remove</button>}
                                        </div>
                                    </div>
                                </div>

                                <div className='modify-room__form'>
                                    <div className='modify-room__form-section-primary'>
                                        <GrupoInput>
                                            <label htmlFor="nombrehab" className='login__label'>Nombre de la habitación</label>
                                            <Field
                                                type='text'
                                                id='nombrehab'
                                                name='nombrehab'

                                                className="login__input"
                                            />

                                            <ErrorMessage name='nombrehab' component={() => (<div className='login__error'>{errors.nombrehab}</div>)} />
                                        </GrupoInput>

                                        <GrupoInput>
                                            <label htmlFor="_id" className='login__label'>Número de habitación</label>
                                            <Field
                                                type='number'
                                                id='_id'
                                                name='_id'

                                                className="login__input"
                                            />

                                            <ErrorMessage name='_id' component={() => (<div className='login__error'>{errors._id}</div>)} />
                                        </GrupoInput>
                                    </div>

                                    <div className='modify-room__form-section-secondary'>
                                        <div className='modify-room__form-section-secondary__primary'>

                                            <GrupoInput className='form-section-secondary__primary'>
                                                <label htmlFor="camas" className='login__label'>N° camas</label>
                                                <div className='modify-room__input'>
                                                    <i class="fa-solid fa-minus"></i>
                                                    <Field
                                                        type='number'
                                                        id='camas'
                                                        name='camas'
                                                        max='10'
                                                        min='1'

                                                        className="login__input"
                                                    />
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                                <ErrorMessage name='camas' component={() => (<div className='login__error'>{errors.camas}</div>)} />
                                            </GrupoInput>

                                            <GrupoInput className='form-section-secondary__primary'>
                                                <label htmlFor="capacidad" className='login__label'>N° huéspedes</label>
                                                <div className='modify-room__input'>
                                                    <i class="fa-solid fa-minus"></i>
                                                    <Field
                                                        type='number'
                                                        id='capacidad'
                                                        name='capacidad'
                                                        max='20'
                                                        min='1'

                                                        className="login__input"
                                                    />
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                                <ErrorMessage name='capacidad' component={() => (<div className='login__error'>{errors.capacidad}</div>)} />
                                            </GrupoInput>

                                        </div>

                                        <GrupoInput>
                                            <label htmlFor="valornoche" className='login__label'>Valor de la reserva</label>
                                            <Field
                                                type='number'
                                                id='valornoche'
                                                name='valornoche'

                                                className="login__input"
                                            />

                                            <ErrorMessage name='valornoche' component={() => (<div className='login__error'>{errors.valornoche}</div>)} />
                                        </GrupoInput>
                                    </div>

                                    <GrupoInput>
                                        <label htmlFor="descripcion" className='login__label'>Descripción de la habitación</label>
                                        <Field
                                            as='textarea'
                                            rows='2'
                                            id='descripcion'
                                            name='descripcion'

                                            className="login__textarea"
                                        />

                                        <ErrorMessage name='descripcion' component={() => (<div className='login__error'>{errors.descripcion}</div>)} />
                                    </GrupoInput>
                                </div>


                            </section>


                            <div className='modify-room__additional-information room-form-register'>
                                <h3 className='modify-room__subtitle'>Servicios adicionales (opcionales)</h3>
                            </div>


                            <div className="room-information__adittional">
                            <GrupoCheckbox className="room-information__radio">
                                <div className="room-information__radio-item">
                                    <i class="fa-solid fa-toilet"></i> <p>Baño</p>
                                </div>
                                <div className="room-information__radio-group">
                                <label className='label'>Si</label>
                                <Field
                                    type="radio"
                                    name="banio"
                                    id='si'
                                    value='si'
                                />
                                </div>
                                <div className="room-information__radio-group">
                                <label className='label'>No</label>
                                <Field
                                    type="radio"
                                    name="banio"
                                    id='no'
                                    value='no'
                                />
                                </div>
                            </GrupoCheckbox>

                            <GrupoCheckbox class="mb-3" className="room-information__radio">
                                <div className="room-information__radio-item">
                                    <i class="fa-solid fa-tv"></i> <p>Televisión</p>
                                </div>
                                <div className="room-information__radio-group">
                                <label className='label'>Si</label>
                                <Field
                                    type="radio"
                                    name="tv"
                                    id='si'
                                    value='si'
                                />
                                </div>
                                <div className="room-information__radio-group">
                                <label className='label'>No</label>
                                <Field
                                    type="radio"
                                    name="tv"
                                    id='no'
                                    value='no'
                                />
                                </div>
                            </GrupoCheckbox>

                            <GrupoCheckbox class="mb-3" className="room-information__radio">
                                <div className="room-information__radio-item">
                                    <i class="fa-solid fa-wifi"></i> <p>Wifi</p>
                                </div>
                                <div className="room-information__radio-group">
                                <label className='label'>Si</label>
                                <Field
                                    type="radio"
                                    name="wifi"
                                    id='si'
                                    value='si'
                                />
                                </div>
                                <div className="room-information__radio-group">
                                <label className='label'>No</label>
                                <Field
                                    type="radio"
                                    name="wifi"
                                    id='no'
                                    value='no'
                                />
                                </div>
                            </GrupoCheckbox>

                            <GrupoCheckbox class="mb-3" className="room-information__radio">
                                <div className="room-information__radio-item">
                                <div><img src={IconoNevera} alt="Icono de nevera" /></div> <p>Nevera</p>
                                </div>
                                <div className="room-information__radio-group">
                                <label className='label'>Si</label>
                                <Field
                                    type="radio"
                                    name="nevera"
                                    id='si'
                                    value='si'
                                />
                                </div>
                                <div className="room-information__radio-group">
                                <label className='label'>No</label>
                                <Field
                                    type="radio"
                                    name="nevera"
                                    id='no'
                                    value='no'
                                />
                                </div>
                            </GrupoCheckbox>

                            <GrupoCheckbox class="mb-3" className="room-information__radio">
                                <div className="room-information__radio-item">
                                    <i class="fa-solid fa-vault"></i> <p>Caja fuerte</p>
                                </div>
                                <div className="room-information__radio-group">
                                <label className='label'>Si</label>
                                <Field
                                    type="radio"
                                    name="cajafuerte"
                                    id='si'
                                    value='si'
                                />
                                </div>
                                <div className="room-information__radio-group">
                                <label className='label'>No</label>
                                <Field
                                    type="radio"
                                    name="cajafuerte"
                                    id='no'
                                    value='no'
                                />
                                </div>
                            </GrupoCheckbox>
                            </div>

                            {/*<Boton link="/listado-habitaciones-admin" description="Registrar" */}

                            <div className='modify-room__buttons modify-room__buttons__register'>
                                <Link to="/listado-habitaciones-admin" ><Button  className='modify-room__ButtonPrincipal hover-button'>Cancelar</Button></Link>
                                <Button type="submit" variant="secondary" className='modify-room__ButtonSecondary'>Registrar</Button>
                            </div>

                            {/*<Button type="submit" className='login__button'>Registrar</Button>*/}

                            {formularioEnviado}


                        </Form>

                    </ContainerForm>

                )}

            </Formik>


        </section>
    );

}

export default FormHabitacion;