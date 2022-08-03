import './Sidebar.css';
import iconologo from '../../img/icono-logo.svg';
import logoh from '../../img/logosvg.svg';
import foto from '../../img/foto-usuario.jpeg';
import { Link } from 'react-router-dom';

function SidebarAdmon() {

    const goroom = () => {

    }
    return (
        <nav className='sidebar'>
            <div className="top-nav">
                <img src={iconologo} alt='logo-hotelia' className='logo-nav' />
                <img src={logoh} alt='logo-hotelia' className='logo-nav2' />
                <div className='cont-topnav'>
                    <img src={foto} alt='foto-user' className='img-user' />
                    <div className='text-topnav'>
                        <p className='user'>Rivero Rodriguez</p>
                        <p className='email-user'>Carlosrr@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='center-nav'>
                <a className='item-sidenav' href='/listado-habitaciones-admin'>
                    <i class="fa-solid fa-bed"></i>
                    <p className='item-sidenav2 pt-4'>Habitaciones</p>
                </a>
                <a className='item-sidenav' href='/listado-reservas-admin'>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p className='item-sidenav2 pt-4 pe-3'>Reservas</p>
                </a>
                <a className='item-sidenav item-sidenav-rh' href='/registrar-habitaciones-admin'>
                    <i class="fa-solid fa-file-pen"></i>
                    <p className='item-sidenav2'>Registrar Habitaciones</p>
                </a>
                <a className='item-sidenav' href='/editarperfil'>
                    <i class="fa-solid fa-user-pen"></i>
                    <p className='item-sidenav2 pt-4 pe-2'>Ver Perfil</p>
                </a>
            </div>
            <button className='final-nav'>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <p>Cerrar sesión</p>
            </button>
        </nav>
    );
}
export default SidebarAdmon;