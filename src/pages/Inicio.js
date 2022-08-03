import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Slide from "../components/index/slide/Slide";
import Opinion from "../components/index/opiniones/Opinion";
import '../components/index/Inicio.css';
import {Nav} from 'react-bootstrap'

import LogoHotelia from '../img/Hotelia.png' 

function Inicio (){
    return(
        <>
            <NavBar />
            <Slide />

            <Nav.Link href="/login"><div className="index__button-reserve">RESERVAR</div></Nav.Link>

            <section className="index__description">
                <p>
                Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en un contexto de lujo donde interactúan los negocios, el ocio y el descanso, gracias a su estratégica ubicación rodeada de bancos, restaurantes de alta cocina, centros comerciales, almacenes de lujo y emblemáticos parques para aprovechar la naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño, ponemos a tu disposición una oferta gastronómica tan sofisticada como saludable a base de productos locales, cargados de lo mejor de la tradición colombiana.
                </p>
                <img src={LogoHotelia} alt="Logo Hotelia"/>
            </section>

            <section className="index__features">
                <h2 className="index__features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
                <div className="index__features-description">
                    <div className="index__feature index__feature-blue navbar__items">
                        <i class="fa-solid fa-bell-concierge"></i>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="index__feature index__feature-black navbar__items">
                        <i class="fa-solid fa-bed"></i>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="index__feature index__feature-blue navbar__items">
                        <i class="fa-solid fa-wifi"></i>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="index__feature index__feature-black navbar__items">
                        <i class="fa-solid fa-dumbbell"></i>
                        <p id="index__ubication">Lorem ipsum dolor</p>
                    </div>
                </div>
            </section>

            <section className="index__ubication" >
                <strong><h1>Ubícanos</h1></strong>
                <iframe title="Mapa de ubicación de hotelia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24355.010522032542!2d-74.05614410484392!3d4.651601247190622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1657287543281!5m2!1ses!2sco" width="90%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h4 className="index__ubication-subtitle subtitle__direction ">AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA</h4>
                <h4 className="index__ubication-subtitle" id="index__opinion">+57 601 4567899</h4>
            </section>

            <section className="index__opinion" >
                <h1 className="index__opinion-title">Nuestros usuarios dicen</h1>
                <Opinion />
            </section>

            <Footer />
        </>
    );
}

export default Inicio;