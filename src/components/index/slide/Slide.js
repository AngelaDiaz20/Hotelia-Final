import React from 'react';
import {Carousel, Button, Nav} from 'react-bootstrap';
import Slide1 from '../../../img/index/slide1.jpg';
import Slide2 from '../../../img/index/slide2.png';
import '../../index/Inicio.css'

function Slide() {
    return ( 
        <>
            <Carousel>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src={Slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel__text'>
                        <div className='carousel__text-container'>
                            <h1 className='carousel__text-container-h1'>Vive la experiencia con nosotros</h1>
                            <h4 className='carousel__text-container-h4'>¿Aún no eres Usuario de Hotelia?, Regístrate aquí</h4>
                            <Nav.Link href="/form/huesped"><Button className="navbar-button"><i class="fa-solid fa-user-plus"></i> Registrarse</Button></Nav.Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src={Slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Slide;