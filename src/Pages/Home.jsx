import '../sass/components/_Home.scss';
import { ParallaxBanner } from 'react-scroll-parallax';
import Card from '../components/cardPreguntas';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GrAdd } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import startTypingAnimation from '../utils/typingAnimation';
import logo from '../assets/images/LogoNuevo_gescotec.jpg'
import fondo1 from '../assets/images/3.jpg'
import fondo2 from '../assets/images/11.png'
import card1 from '../assets/images/13.png'
import card2 from '../assets/images/14.png'
import card3 from '../assets/images/15.png'
import card4 from '../assets/images/16.png'
import imagenidea from '../assets/images/1.png'
import CarouselLogos from '../components/CarouselLogos';
import reasonImage from '../assets/images/18.png'
import ico1 from '../assets/images/ico1.png'
import ico2 from '../assets/images/ico2.png'
import ico3 from '../assets/images/ico3.png'
import ico4 from '../assets/images/ico4.png'
import ico5 from '../assets/images/ico5.png'
import ico6 from '../assets/images/ico6.png'

const Home = () => {

    const { openMenu, setOpenMenu } = useTheme();
    const [showBubble, setShowBubble] = useState(false);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            console.log("scrollTop", scrollTop, "scrollHeight", scrollHeight, "clientHeight", clientHeight);
            if (scrollTop + clientHeight >= scrollHeight * 3 / 4 && !showBubble) {
                setShowBubble(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [showBubble]);

    useEffect(() => {
        if (showBubble) {
            const introText = `"En Gescotec, nos esforzamos constantemente por desarrollar soluciones que impulsen la productividad, mejoren la calidad del software y ofrezcan una mayor personalización para satisfacer las necesidades específicas de los usuarios. Estamos dedicados a innovar y encontrar nuevas formas de optimizar los procesos, brindando herramientas que permitan alcanzar niveles más altos de eficiencia y excelencia en cada proyecto."`;
            const intervalId = startTypingAnimation(introText, 30, setTypedText);
            return () => clearInterval(intervalId);
        }


        // console.log("intervalId", intervalId,"setTypedText",setTypedText);

    }, [showBubble]);

    const cardsData = [
        {
            title: 'Desarrollo de Aplicaciones Móviles',
            imageSrc: `${card1}`,
            // description:
        },
        {
            title: 'Desarrollo Web',
            imageSrc: `${card2}`,
            // description:
        },
        {
            title: 'Logo',
            // imageSrc:    ,
            // description: 
        },
        {
            title: 'Software Factory',
            imageSrc: `${card3}`,
            // description:
        },

        {
            title: 'Coaching Agile',
            imageSrc: `${card4}`,
            // description:
        },
    ];

    // console.log(showBubble);
    return (
        <div className={`home ${openMenu ? 'blur' : ''}`}>
            <div className="hero-section">

                <ParallaxBanner
                    layers={[{ image: fondo1, speed: -15 },
                    ]
                    }
                    className="imageParallax"
                >               <div className="hero-text">
                        <div className="diamond">
                            <h1>"Utiliza soluciones tecnológicas para impulsar tu empresa hacia nuevas alturas, reduciendo costos y aumentando la productividad". </h1>
                            <p>Steve Jobs</p>
                        </div>
                    </div>
                </ParallaxBanner>
            </div>

            <div className="questions-section">
                <div className="card-container">
                    <div className="aQuenosded">
                        <div className='descripAque'>
                            <h2>Gescotec - "El futuro, ahora"</h2>
                            <div>
                                En Gescotec, nos adelantamos al futuro creando soluciones de software que transforman negocios. Fundada con el espíritu de innovación y excelencia, nuestra empresa es tu aliado ideal para navegar por el complejo mundo tecnológico de hoy. Ofrecemos servicios de consultoría de alta calidad a un costo accesible, permitiendo a empresas de todos los tamaños ser más competitivas y eficientes.
                            </div>
                            <div className='cont_btn'>
                                <div className="more_btn"><Link to="/equipo" className="link_pres_btn" >¿Quiénes somos?</Link >
                                </div>
                                <div className="pres_btn">  <Link to="/contactanos" className="link_pres_btn" > Presupuesto</Link > <IoDocumentTextOutline />
                                </div>
                            </div>
                        </div>

                        <ParallaxBanner
                            layers={[{ image: fondo2, speed: -13 },]}
                            className="imageParallax2">
                        </ParallaxBanner>
                    </div>
                    <div className='Deque'>¿De qué manera podemos ayudar a las empresas?
                    </div>
                    <div className="cards-container">
                        <div className="cardConteiner1">
                            {cardsData.slice(0, 2).map((card, index) => (
                                <Card
                                    key={index}
                                    title={card.title}
                                    imageSrc={card.imageSrc}
                                    description={card.description}
                                    logo={card.title === "Logo" ? true : false}
                                />
                            ))}
                        </div>
                        <div className="cardConteiner2">
                            <Card
                                key={2}
                                title={cardsData[2].title}
                                logo={true}
                            />
                        </div>
                        <div className="cardConteiner3">
                            {cardsData.slice(3).map((card, index) => (
                                <Card
                                    key={index + 3}
                                    title={card.title}
                                    imageSrc={card.imageSrc}
                                    description={card.description}
                                    logo={card.title === "Logo" ? true : false}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='Deque'>
                        Tu logo luciría perfecto aquí
                    </div>

                    <div className='sectionCarousel'>
                        <CarouselLogos />
                    </div>

                    <div className="why-choose-us-section">
                        <div className="reasons-content">
                            <div className="reasons-image-container">
                                <img src={reasonImage} alt="Reason Image" className="reasons-image" />
                            </div>
                            <div className="reasons-list-container">
                                <h2>¿Por qué nos eligen las empresas?</h2>
                                <ul>
                                   <div className='ReasonDiv'>
                                    <img src={ico6} className='iconoList' alt="" />  <li>Experiencia y conocimiento técnico</li>
                                    </div> 
                                    <div className='ReasonDiv'>
                                    <img src={ico3} className='iconoList' alt="" />  <li>Compromiso con la innovación</li>
                                    </div>
                                    <div className='ReasonDiv'>
                                    <img src={ico1} className='iconoList' alt="" />  <li>Enfoque centrado en el cliente</li>
                                    </div>
                                    <div className='ReasonDiv'>
                                    <img src={ico2} className='iconoList' alt="" />  <li>Cumplimiento de plazos y presupuestos</li>
                                    </div>
                                    <div className='ReasonDiv'>
                                    <img src={ico4} className='iconoList' alt="" />  <li>Soporte técnico y atención al cliente</li>    
                                    </div>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                    {showBubble ? <div className={`bubble ${showBubble ? "show" : ""}`}>
                        <div className='text_Final'>
                            {typedText}
                        </div>
                        <img src={imagenidea} alt="imageIdea" className='imageIdea' /> </div> : <div className='bubble'></div>}
                </div>
            </div>
        </div>
    );
}

export default Home;