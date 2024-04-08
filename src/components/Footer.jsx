import React from 'react';
import '../sass/components/_Footer.scss';
import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className='Logolink'>
                   <Link to="/home">
                    <div className="logo"></div>
                </Link> 
                </div>
                <div className="footer-links">
                    {/* <ul>
                        <li><a href="#">Aviso legal</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Términos de uso</a></li>
                    </ul> */}
                </div>
                <div className='socialLinks'>
                    <Link to="https://www.linkedin.com/company/gescotec-spa" target="_blank" className="linkedin-link">
                        <BsLinkedin className='LinkedIn_ico' />
                        {/* <RiLinkedinBoxLine className="ci-icon" />
                    <RiLinkedinBoxFill className="bs-icon" /> */}
                    </Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Gescotec SPA. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;