import "./FormHuesped.css"
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
function FormHuesped() {
    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //URL
    const url="https://app-hotelia3.herokuapp.com/users";
    //validaciones
    //contraseña QTZ8s4WfQ75s8gy
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
    return (
        <div className="formhuesped-background">
            <h1>Regístrate</h1>
            <Formik
                initialValues={{
                    tipodoc: "",
                    _id: "",
                    tipouser:"",
                    nombre: "",
                    apellido: "",
                    fnacimiento: "",
                    genero: "",
                    email: "",
                    telefono: "",
                    img: "",
                    password: "",
                    contraseñaAgain: "",
                    paisorigen: "",
                    condiciones: "",
                    tipouser:"Huesped"
                }}
                validate={(valores) => {
                    let errores = {};
                    // Validacion tipodoc
                    if (!valores.tipodoc) {
                        errores.tipodoc = 'seleccione una opción'
                    }else if (valores.tipodoc===" ") {
                        errores.tipodoc = 'seleccione una opción'
                    }
                    // Validacion _id
                    if (!valores._id) {
                        errores._id = 'Por favor ingrese un número de documento'
                    } else if (!/^[0-9]{6,11}$/.test(valores._id)) {
                        errores._id = 'Digite un número de documento valido'
                    }
                    // Validación nombre
                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingrese su nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }
                    // Validación apellido
                    if (!valores.apellido) {
                        errores.apellido = 'Por favor ingrese sus apellido'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                        errores.apellido = 'Los apellido solo puede contener letras'
                    }
                    // Validacion fnacimiento
                    if (!valores.fnacimiento) {
                        errores.fnacimiento = 'Ingrese su fnacimiento de nacimiento'
                    }
                    // Validacion genero
                    if (!valores.genero) {
                        errores.genero = 'Seleccione una opción'
                    }
                    // Validación email
                    if (!valores.email) {
                        errores.email = 'Por favor ingrese un email electronico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                        errores.email = 'El email solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }
                    // Validacion telefono
                    if (!valores.telefono) {
                        errores.telefono = 'Por favor ingrese un número de teléfono'
                    } else if (!/^[0-9]{10,11}$/.test(valores.telefono)) {
                        errores.telefono = 'Digite un teléfono valido'
                    }
                    // Validacion paisorigen
                    if (!valores.paisorigen) {
                        errores.paisorigen = 'seleccione una opción'
                    }else if (valores.paisorigen==="") {
                        errores.paisorigen = 'seleccione una opción'
                    }
                    // Validacion password
                    if (!valores.password) {
                        errores.password = 'Por favor ingrese una contraseña'
                    } else if (!/^[A-Za-z\d$@$!%*?&]{8,15}$/.test(valores.password)) {
                        errores.password = 'Digite una contraseña valida'
                    }
                    // Validacion contraseñaAgain
                    if (!valores.contraseñaAgain) {
                        errores.contraseñaAgain = 'Ingrese otra vez la contraseña'
                    }else if (valores.contraseñaAgain !== valores.password) {
                        errores.contraseñaAgain = "La contraseña no coincide"
                    }
                    // Validacion condiciones
                    if (!valores.condiciones) {
                        errores.condiciones = 'Debe aceptar los términos y condiciones'
                    }
                    return errores;
                }}
                onSubmit={async(valores, {resetForm}) => {
                    resetForm();
                    console.log(valores);
                    const response=await axios.post(url,valores);//await espera hasta que se ejcute la petición
                    console.log(response);
                    console.log('Formulario enviado');
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 5000);
                    setTimeout(() => window.location.replace('/login'), 3000);
                }}

            >
                {({ errors }) => (
                    <Form>
                        <Field id="tipouser" name="tipouser" value="Huesped" hidden ></Field>
                        <div className="formhuesped">
                            <div>
                                <div>
                                    <label>Tipo de documento</label>
                                    <Field as="select" name="tipodoc" id="tipodoc">
                                        <option value=" ">Seleccione una opción</option>
                                        <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                                        <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                                        <option value="Pasaporte">Pasaporte</option>
                                    </Field>
                                </div>
                                <ErrorMessage name="tipodoc" component={() => (<div className="error">{errors.tipodoc}</div>)} />
                            </div>
                            <div>
                                <div>
                                    <label>Número de documento</label>
                                    <Field
                                        className="formhuesped-input"
                                        type="number"
                                        name="_id"
                                        id="_id"
                                    />
                                </div>
                                <ErrorMessage name="_id" component={() => (<div className="error">{errors._id}</div>)} />
                            </div>
                            <div>
                                <div>
                                    <label>Nombres</label>
                                    <Field
                                        className="formhuesped-input"
                                        type="text"
                                        name="nombre"
                                        id="nombre"
                                    />
                                </div>
                                <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                            </div>
                            <div>
                                <div>
                                    <label>Apellidos</label>
                                    <Field
                                        className="formhuesped-input"
                                        type="text"
                                        name="apellido"
                                        id="apellido"
                                    />
                                </div>
                                <ErrorMessage name="apellido" component={() => (<div className="error">{errors.apellido}</div>)} /> </div>
                            <div>
                                <div>
                                    <label>Fecha de nacimiento</label>
                                    <Field
                                        className="formhuesped-input"
                                        type="date"
                                        name="fnacimiento"
                                        id="fnacimiento"
                                         max="2005-01-01"
                                    />
                                </div>
                                <ErrorMessage name="fnacimiento" component={() => (<div className="error">{errors.fnacimiento}</div>)} />
                            </div>
                            <div>
                                <div>
                                    <label>Género</label><br />
                                    <div className="formhuesped-group-radio">
                                        <label>
                                            <Field type="radio" name="genero" value="mujer" /> Mujer
                                        </label>
                                        <label>
                                            <Field type="radio" name="genero" value="hombre" /> Hombre
                                        </label>
                                        <label>
                                            <Field type="radio" name="genero" value="otro" /> Otro
                                        </label>
                                    </div>
                                </div>
                                <ErrorMessage name="genero" component={() => (<div className="error">{errors.genero}</div>)} />
                            </div>
                            <div>
                                <div>
                                    <label>Email </label>
                                    <Field
                                        className="formhuesped-input"
                                        type="text"
                                        name="email"
                                        id="email"
                                    />
                                </div>
                                <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
                            </div>
                            <div>
                                <div>
                                    <label>Teléfono </label>
                                    <Field
                                        className="formhuesped-input"
                                        type="number"
                                        name="telefono"
                                        id="telefono"
                                    />
                                </div>
                                <ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
                            </div>
                            <div>
                                <div>
                                    <label>País de origen  </label>
                                    <Field as="select" name="paisorigen" id="paisorigen">
                                        <option value="Afganistán">Afganistán</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Alemania">Alemania</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antártida">Antártida</option>
                                        <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                                        <option value="Antillas Holandesas">Antillas Holandesas</option>
                                        <option value="Arabia Saudí">Arabia Saudí</option>
                                        <option value="Argelia">Argelia</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaiyán">Azerbaiyán</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrein">Bahrein</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Bélgica">Bélgica</option>
                                        <option value="Belice">Belice</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermudas">Bermudas</option>
                                        <option value="Bielorrusia">Bielorrusia</option>
                                        <option value="Birmania">Birmania</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brasil">Brasil</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Bután">Bután</option>
                                        <option value="Cabo Verde">Cabo Verde</option>
                                        <option value="Camboya">Camboya</option>
                                        <option value="Camerún">Camerún</option>
                                        <option value="Canadá">Canadá</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Chipre">Chipre</option>
                                        <option value="Ciudad del Vaticano (Santa Sede)">Ciudad del Vaticano (Santa Sede)</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comores">Comores</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Congo, República Democrática del">Congo, República Democrática del</option>
                                        <option value="Corea">Corea</option>
                                        <option value="Corea del Norte">Corea del Norte</option>
                                        <option value="Costa de Marfíl">Costa de Marfíl</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Croacia (Hrvatska)">Croacia (Hrvatska)</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Dinamarca">Dinamarca</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egipto">Egipto</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Eslovenia">Eslovenia</option>
                                        <option value="España">España</option>
                                        <option value="Estados Unidos">Estados Unidos</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Etiopía">Etiopía</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Filipinas">Filipinas</option>
                                        <option value="Finlandia">Finlandia</option>
                                        <option value="Francia">Francia</option>
                                        <option value="Gabón">Gabón</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Granada">Granada</option>
                                        <option value="Grecia">Grecia</option>
                                        <option value="Groenlandia">Groenlandia</option>
                                        <option value="Guadalupe">Guadalupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guayana">Guayana</option>
                                        <option value="Guayana Francesa">Guayana Francesa</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GQ">Guinea Ecuatorial</option>
                                        <option value="GW">Guinea-Bissau</option>
                                        <option value="Haití">Haití</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hungría">Hungría</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Irak">Irak</option>
                                        <option value="Irán">Irán</option>
                                        <option value="Irlanda">Irlanda</option>
                                        <option value="BV">Isla Bouvet</option>
                                        <option value="CX">Isla de Christmas</option>
                                        <option value="Islandia">Islandia</option>
                                        <option value="Islas Caimán">Islas Caimán</option>
                                        <option value="Islas Cook">Islas Cook</option>
                                        <option value="Islas de Cocos o Keeling">Islas de Cocos o Keeling</option>
                                        <option value="Islas Faroe">Islas Faroe</option>
                                        <option value="Islas Heard y McDonald">Islas Heard y McDonald</option>
                                        <option value="Islas Malvinas">Islas Malvinas</option>
                                        <option value="Islas Marianas del Norte">Islas Marianas del Norte</option>
                                        <option value="Islas Marshall">Islas Marshall</option>
                                        <option value="Islas menores de Estados Unidos">Islas menores de Estados Unidos</option>
                                        <option value="PW">Islas Palau</option>
                                        <option value="SB">Islas Salomón</option>
                                        <option value="SJ">Islas Svalbard y Jan Mayen</option>
                                        <option value="TK">Islas Tokelau</option>
                                        <option value="TC">Islas Turks y Caicos</option>
                                        <option value="VI">Islas Vírgenes (EEUU)</option>
                                        <option value="VG">Islas Vírgenes (Reino Unido)</option>
                                        <option value="WF">Islas Wallis y Futuna</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italia">Italia</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japón">Japón</option>
                                        <option value="Jordania">Jordania</option>
                                        <option value="Kazajistán">Kazajistán</option>
                                        <option value="Kenia">Kenia</option>
                                        <option value="Kirguizistán">Kirguizistán</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Letonia">Letonia</option>
                                        <option value="Líbano">Líbano</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libia">Libia</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lituania">Lituania</option>
                                        <option value="Luxemburgo">Luxemburgo</option>
                                        <option value="MK">Macedonia, Ex-República Yugoslava de</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malasia">Malasia</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Maldivas">Maldivas</option>
                                        <option value="Malí">Malí</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marruecos">Marruecos</option>
                                        <option value="Martinica">Martinica</option>
                                        <option value="Mauricio">Mauricio</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="México">México</option>
                                        <option value="Micronesia">Micronesia</option>
                                        <option value="Moldavia">Moldavia</option>
                                        <option value="Mónaco">Mónaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Níger">Níger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk">Norfolk</option>
                                        <option value="Noruega">Noruega</option>
                                        <option value="Nueva Caledonia">Nueva Caledonia</option>
                                        <option value="Nueva Zelanda">Nueva Zelanda</option>
                                        <option value="Omán">Omán</option>
                                        <option value="Países Bajos">Países Bajos</option>
                                        <option value="Panamá">Panamá</option>
                                        <option value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
                                        <option value="Paquistán">Paquistán</option>
                                        <option value="PParaguayY">Paraguay</option>
                                        <option value="Perú">Perú</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Polinesia Francesa">Polinesia Francesa</option>
                                        <option value="Polonia">Polonia</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reino Unido">Reino Unido</option>
                                        <option value="República Centroafrican">República Centroafricana</option>
                                        <option value="República Checa">República Checa</option>
                                        <option value="República de Sudáfrica">República de Sudáfrica</option>
                                        <option value="República Dominicana">República Dominicana</option>
                                        <option value="República Eslovaca">República Eslovaca</option>
                                        <option value="Reunión">Reunión</option>
                                        <option value="Ruanda">Ruanda</option>
                                        <option value="Rumania">Rumania</option>
                                        <option value="Rusia">Rusia</option>
                                        <option value="Sahara Occidental">Sahara Occidental</option>
                                        <option value="Saint Kitts y Nevis">Saint Kitts y Nevis</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="Samoa Americana">Samoa Americana</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="San Vicente y Granadinas">San Vicente y Granadinas</option>
                                        <option value="Santa Helena">Santa Helena</option>
                                        <option value="Santa Lucía">Santa Lucía</option>
                                        <option value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leona">Sierra Leona</option>
                                        <option value="Singapur">Singapur</option>
                                        <option value="Siria">Siria</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="St Pierre y Miquelon">St Pierre y Miquelon</option>
                                        <option value="Suazilandia">Suazilandia</option>
                                        <option value="Sudán">Sudán</option>
                                        <option value="Suecia">Suecia</option>
                                        <option value="Suiza">Suiza</option>
                                        <option value="Surinam">Surinam</option>
                                        <option value="Tailandia">Tailandia</option>
                                        <option value="Taiwán">Taiwán</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Tayikistán">Tayikistán</option>
                                        <option value="Territorios franceses del Sur">Territorios franceses del Sur</option>
                                        <option value="Timor Oriental">Timor Oriental</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad">Trinidad y Tobago</option>
                                        <option value="Túnez">Túnez</option>
                                        <option value="Turkmenistán">Turkmenistán</option>
                                        <option value="Turquía">Turquía</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Ucrania">Ucrania</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistán">Uzbekistán</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Yugoslavia">Yugoslavia</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabue">Zimbabue</option>
                                    </Field >
                                </div>
                                <ErrorMessage name="paisorigen" component={() => (<div className="error">{errors.paisorigen}</div>)} />
                            </div>
                            <div>
                                <div>
                                    <label>Foto </label>
                                    <div >
                                        <Field className="formhuesped-image" type="file" name="img" id="img" accept=".jpg,.png" />
                                    </div>
                                </div>
                                <ErrorMessage name="img" component={() => (<div className="error">{errors.img}</div>)} />
                            </div>
                            <div>
                                <div>
                                    <label>Contraseña </label>
                                    <Field
                                        className="formhuesped-input"
                                        type="password"
                                        name="password"
                                        id="password"
                                    />
                                </div>
                                <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
                            </div>
                            <div>
                                <div>
                                    <label>Confirmar contraseña </label>
                                    <Field
                                        className="formhuesped-input"
                                        type="password"
                                        name="contraseñaAgain"
                                        id="contraseñaAgain"
                                    />
                                </div>
                                <ErrorMessage name="contraseñaAgain" component={() => (<div className="error">{errors.contraseñaAgain}</div>)} />
                            </div>
                        </div>
                        <div className="formhuesped-condiciones ">
                            <div>
                                <Field type="checkbox" name="condiciones" />
                                <label className="mb-2" for="condiciones">Acepta los  <a onClick={handleShow}>  Terminos y Condiciones </a></label>
                            </div>
                            <ErrorMessage name="condiciones" component={() => (<div className="error">{errors.condiciones}</div>)} />
                        </div>
                        <Modal className="formhuesped-modal" show={show} onHide={handleClose}>
                            <Modal.Header className="modal-header ">
                                <Modal.Title><h1 className="text-center">Términos y Condiciones</h1></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Estos Términos del Servicio reflejan la forma de trabajar de Google como empresa, las leyes por las que nos regimos y determinados aspectos que siempre hemos creído que son ciertos. Por ello, estos Términos del Servicio ayudan a definir la relación que tiene Google contigo cuando interactúas con nuestros servicios. Por ejemplo, estos términos incluyen las siguientes secciones: Qué puedes esperar de nosotros, donde se describe cómo proporcionamos y desarrollamos nuestros servicios. Lo que esperamos de ti, donde se establecen ciertas reglas para utilizar nuestros servicios.</Modal.Body>
                            <Modal.Footer>
                            <Button variant="Light" onClick={handleClose}>
                            Close
                        </Button>
                                <Button className="" variant="secondary" onClick={handleClose}>
                                    De acuerdo
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <div className="final">
                        <Button className="formhuesped-button m-auto" variant="secondary" type="submit">Ingresar</Button>
                        {formularioEnviado && <p className="exito m-auto">Registro realizado con exito!</p>}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );

}
export default FormHuesped