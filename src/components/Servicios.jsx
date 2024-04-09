import { useTheme } from '../contexts/ThemeContext';
import '../sass/components/_Servicios.scss'; // Importa los estilos para esta sección
import image1 from '../assets/images/18.png'
import image2 from '../assets/images/19.png'
import image3 from '../assets/images/20.png'
import image4 from '../assets/images/21.png'
import image5 from '../assets/images/23.png'
import image6 from '../assets/images/24.png'
import image7 from '../assets/images/25.png'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CiLinkedin } from "react-icons/ci";
import CarouselLogos from './CarouselLogos';

const Servicios = () => {
    const { openMenu, setOpenMenu } = useTheme();

    const casoExitoRef = useRef(null);

    useEffect(() => {
        const casoExitoSection = casoExitoRef.current;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated_slide_in');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(casoExitoSection);

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`services-section ${openMenu ? 'blur' : ''}`}>
            <h2>Nuestros Servicios</h2>

            <div className="service">
                <div className='imagenesDiv'>
                    <img src={image2} alt="Desarrollo de Software con IA" />
                </div>
                <div>
                    <h3>Desarrollo de Aplicaciones Móviles</h3>
                    <p>
                        Especialistas en el desarrollo de aplicaciones híbridas y nativas, optimizamos tu presencia en iOS y Android, incluyendo soluciones Webapp avanzadas.
                    </p>
                </div>
            </div>

            <div className="service2">
                <div>
                    <h3>Desarrollo Web</h3>
                    <p>
                        Creamos páginas web que no solo lucen bien, sino que también funcionan a la perfección, adaptándonos a las necesidades específicas de cada cliente.
                    </p>
                </div>
                <div className='imagenesDiv'>
                    <img src={image6} alt="Automatización de Procesos de Software" />
                </div>
            </div>

            <div className="service">
                <div className='imagenesDiv'>
                    <img src={image3} alt="Software Factory" />
                </div>
                <div>
                    <h3>Software Factory</h3>
                    <p>
                        Utilizamos tecnologías de punta como Oracle, Sql Server, MySql, .Net, Java y PHP para construir soluciones robustas y a medida.
                    </p>
                </div>
            </div>

            <div className="service2">
                <div>
                    <h3>Coaching Agile</h3>
                    <p>
                        Nuestro equipo certificado en metodologías ágiles te guiará para optimizar tus procesos y equipos de trabajo.
                    </p>
                </div>
                <div className='imagenesDiv'>
                    <img src={image5} alt="Coaching Agile" />
                </div>
            </div>


            <div className="service">
                <div className='imagenesDiv'>
                    <img className='imagenRotate' src={image1} alt="Soporte y Mantenimiento" />
                </div>
                <div>
                    <h3>Soporte y Mantenimiento</h3>
                    <p>
                        Más allá del lanzamiento, Gescotec sigue a tu lado. Ofrecemos soporte y mantenimiento post-lanzamiento para asegurar el rendimiento óptimo de tu solución.
                    </p>
                </div>

            </div>

            <div className="casoExito" ref={casoExitoRef}>
                <div className='exitoText'>
                    <h3>Casos de Éxito</h3>
                    <p>
                        Nuestra colaboración con Zurich es testimonio de nuestra capacidad para entregar soluciones que no solo cumplen, sino que superan las expectativas.
                        Nuestra colaboración se destaca por nuestra capacidad para anticipar las demandas cambiantes del mercado y adaptarnos rápidamente para ofrecer resultados sobresalientes. Nos esforzamos por ir más allá de las expectativas, no solo cumpliendo con los requisitos acordados, sino también identificando oportunidades adicionales para agregar valor y optimizar los procesos existentes.
                        Nuestra asociación con Zurich es más que un simple proyecto; es un testimonio de nuestra capacidad para enfrentar desafíos complejos con creatividad, dedicación y experiencia.
                    </p>
                </div>
                <div className='imagenExito'>
                    <img src={image7} alt="Casos de Éxito" />
                </div>
            </div>


            <div className='allContactSection'>
                <div className="contact-section">
                    <h3>Tu futuro empieza aquí</h3>
                    <p>Estamos listos para llevar tu negocio al siguiente nivel. Contáctanos hoy para explorar cómo podemos ayudarte.</p>

                    <div className="presupuesto_btn">
                        <Link to="/contactanos" className="link_presupuesto_btn" > Presupuesto</Link >
                    </div>

                </div>

                <div className="linkedin-section">
                    <p>Mantente al día con las últimas novedades y logros de Gescotec siguiéndonos en LinkedIn.</p>
                    <Link to="https://www.linkedin.com/company/gescotec-spa" className="link_presupuesto_btn" target="_blank" > <CiLinkedin className='linkedIN' /></Link >
                </div>
            </div>
            <CarouselLogos grayscale={true} />
        </section>
    );
}

export default Servicios;