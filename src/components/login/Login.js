import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios';
import Swal from 'sweetalert2';
import Logo2 from '../../img/Hotelia horizontal negro.png';
import './Login.css';
import { Link } from 'react-router-dom';

function Login (usuarios){

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    return(
        <>
            <section className='login'>

            <Formik
                initialValues={{
                    correo: '',
                    password: ''
                }}

                validate={(valores) =>{
                    let errores = {};
    
                    //Validación contraseña
                    if(!valores.password){
                        errores.password = 'Ingrese su contraseña'
                     } else if(! /^.{4,18}$/.test(valores.password)){
                         errores.password = 'La contraseña debe tener de 4 a 18 dígitos'
                     }
    
                    //Validación correo
                    if(!valores.correo){
                        errores.correo = 'Ingrese su usuario'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'Correo electrónico no válido'
                    }
                    return errores;
                }}
    
                onSubmit={(valores, {resetForm}) => {
                        if((valores.correo==="Carlosrr@gmail.com" && valores.password==="JUAN1245") || (valores.correo==="cambio@gmail.com" && valores.password==="cambio123")){
                            resetForm();
                            console.log('Formulario enviado');
                            cambiarFormularioEnviado(true);
                            setTimeout(() => window.location.href="/habitaciones-huesped", 50);}
                    else if(valores.correo="romermariaj@gmail.com" && valores.password==="Maria123"){
                            resetForm();
                            console.log('Formulario enviado');
                            cambiarFormularioEnviado(true);
                            setTimeout(() => window.location.href="/listado-habitaciones-admin", 50);
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Usuario no registrado',
                            confirmButtonColor: "#9C2759",
                            background: '#FFFDFB',
                            color: '#000'
                        })
                        console.log('Usuario no registrado');
                    }
                }}
            >

            {( {errors} ) => (

                <Form className='login__form'>
                    <div className='login__logo'>
                        <Link to="/"><img src={Logo2} alt="Logo de Hotelia"/></Link>
                    </div>
                    <div className='login__user'>
                        <i class="fa-solid fa-user"></i>
                    </div>

                    <div className='login__form-group'>
                        <label htmlFor="correo" className='login__label'>Usuario</label>
                        <Field 
                            type='text' 
                            id='correo' 
                            name='correo' 
                            className="login__input"
                        />
                        <ErrorMessage name='correo' component={() => (<div className='login__error'>{errors.correo}</div>)}/>
                    </div>
                    <div className='login__form-group'>
                        <label htmlFor="password" className='login__label'>Contraseña</label>
                        <Field 
                            type='password'
                            id='password' 
                            name='password' 
                            className="login__input"
                        />
                        <ErrorMessage name='password' component={() => (<div className='login__error'>{errors.password}</div>)}/>

                    </div>

                    <button type='submit' className='login__button'>Enviar</button>

                    {formularioEnviado}

                    <Link to="/form/huesped" className='login__register'><span>¿No tienes una cuenta?</span> Regístrate aquí</Link>

                </Form>
                )}
            </Formik>

            </section>
        </>
    );
}
export default Login;