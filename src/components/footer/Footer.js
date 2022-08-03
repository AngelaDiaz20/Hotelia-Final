import { Link } from 'react-router-dom';
import './Footer.css'

function Footer () {
    return(
        <footer>
        <div className="footer">
            <div className='footer__description'>
                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultricies ullamcorper. Nunc aenean auctor vel diam dictum.</p>
            </div>
            <div className='footer__description'>
                <div className='footer__description-information'>
                    <div className='footer__information'>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Avenida carrera 8, #12A-42, Bogotá DC, Colombia</p>
                    </div>
                    <div className='footer__information'>
                        <i class="fa-solid fa-phone"></i>
                        <p>+57 601 4567899</p>
                    </div>
                </div>
            </div>
            <div className='footer__description politics'>
                <Link to="#" className='politics-link'><p>Políticas de privacidad</p></Link>
                <Link to="#" className='politics-link'><p>Políticas de cookies</p></Link>
            </div>
        </div>
        <div className='footer__social-media'>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
        </div>
        </footer>
    );
}

export default Footer;