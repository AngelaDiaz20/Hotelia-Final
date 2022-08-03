import habitacion1 from '../img/habitaciones/habitacion1.png';

import { Label, GrupoInput, GrupoCheckbox, Input, Textarea } from '../elements/formStyle/FormStyle';

import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import SidebarAdmon from '../components/sidebar/SidebarAdmon';
import '../components/ModificarHabitacion.css'

function ModificarHabitacion() {
    return (
        <div className="listado-habitacion-admin">
        
            <div>
                <SidebarAdmon/>
            </div>

        <div className='modify-room'>
            <h1 className='modify-room__title'>Habitación doble</h1>

            <section className='modify-room__information-basic'>

                <div className='modify-room__image-principal'>
                    <img src={habitacion1} alt="habitación 1"></img>
                    <div className='modify-room__icon'>
                        <i class="fa-solid fa-pen"></i>
                    </div>
                </div>

                <div className='modify-room__form'>
                    <div className='modify-room__form-section-primary'>
                        <GrupoInput>
                            <Label>Nombre habitación</Label>
                            <Input placeholder='Habitación doble' />
                        </GrupoInput>

                        <GrupoInput>
                            <Label>Número Habitación</Label>
                            <Input placeholder='405' />
                        </GrupoInput>
                    </div>

                    <div className='modify-room__form-section-secondary'>
                        <div className='modify-room__form-section-secondary__primary'>
                            <GrupoInput className='form-section-secondary__primary'>
                                <Label>N° camas</Label>
                                <div className='modify-room__input'>
                                    <i class="fa-solid fa-minus"></i>
                                    <Input placeholder='3' />
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </GrupoInput>

                            <GrupoInput className='form-section-secondary__primary'>
                                <Label>N° Huéspedes</Label>
                                <div className='modify-room__input'>
                                    <i class="fa-solid fa-minus"></i>
                                    <Input placeholder='4' />
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </GrupoInput></div>

                        <GrupoInput>
                            <Label>Valor reserva</Label>
                            <Input placeholder='128.000' />
                        </GrupoInput>
                    </div>

                    <GrupoInput>
                        <Label>Descripción</Label>
                        <Textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ornare dui, ante nisl. Lorem ipsumn' />
                    </GrupoInput>
                </div>
            </section>

            <div className='modify-room__additional-information'>
                    <h3 className='modify-room__subtitle'>Servicios adicionales (opcionales)</h3>
                    <div className='modify-room__additional-services'>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <p><i class="fa-solid fa-vault"></i>Caja Fuerte</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <p><i class="fa-solid fa-tv"></i>Televisión</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <p><i class="fa-solid fa-wifi"></i>Wifi</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <p><i class="fa-solid fa-snowflake"></i>Aire acondicionado</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <p><i class="fa-solid fa-dumbbell"></i>Servicio a la habitación</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <i class="fa-solid fa-bell-concierge"></i>
                        </GrupoCheckbox>
                    </div>
                </div>

            <div className='modify-room__state'>
                <h4>Estado</h4>

                <GrupoCheckbox>
                    <input type='checkbox' checked />
                    Activa
                </GrupoCheckbox>
                <GrupoCheckbox>
                    <input type='checkbox' />
                    Inactiva
                </GrupoCheckbox>
            </div>

            <div className='modify-room__buttons'>
                <Link to="/modificar-habitaciones-admin" ><Button variant="primary" className='modify-room__ButtonPrincipal'>Cancelar</Button></Link>
                <Button variant="secondary" className='modify-room__ButtonSecondary'>Guardar cambios</Button>
            </div>

        </div>

        </div>
    );
}
export default ModificarHabitacion;