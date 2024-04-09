import { Typography, Container, Grid } from '@mui/material';
import MiembroEquipo from './miembroEquipoCard';
import '../sass/components/_Equipo.scss';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';
import startTypingAnimation from '../utils/typingAnimation';
import logoGesco from '../assets/images/Logo_nombre_vertical.png'
import mision_vision from '../assets/images/26.png'

const Equipo = () => {
    const { openMenu, setOpenMenu } = useTheme();
    const [showMission, setShowMission] = useState(false);
    const [showVision, setShowVision] = useState(false);
    const [showImpactStats, setShowImpactStats] = useState(false);
    const [typedText, setTypedText] = useState('');

    const equipoData = [
        { nombre: 'Marcos Celiz', cargo: 'CEO', experiencia: '', foto: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710947181/GescotecPage/1575496059804_f3clx4.jpg', linkedin: "https://www.linkedin.com/in/marcos-celiz-ab271110" },
        { nombre: 'Pablo Charras', cargo: 'CTO', experiencia: '', foto: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710947151/GescotecPage/1651870975631_bnlvqs.jpg', linkedin: "https://www.linkedin.com/in/pablo-charras-700a962" },

        // Agrega más miembros del equipo según sea necesario
    ];
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const equipoSection = document.querySelector('.equipo');
            const equipoSectionTop = equipoSection.getBoundingClientRect().top;
            console.log("equiposection", equipoSectionTop * -1, "heigth", windowHeight / 4);
            // Misión
            if (equipoSectionTop * -1 < windowHeight / 4) {
                setShowMission(true);
            }
            console.log("if", equipoSectionTop * -1 > windowHeight / 4);
            // Visión
            if (equipoSectionTop * -1 > windowHeight / 4) {
                setShowVision(true);
            }

            // Estadísticas de impacto

            if (equipoSectionTop * -1 > windowHeight / 3) {
                setShowImpactStats(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        if (typedText.length == 53) {
            setShowMission(true)
        }
    }, [typedText]);

    console.log("setTypedText", typedText.length);
    useEffect(() => {

        const introText = "“Innovación a tu alcance”"
            ;
        const intervalId = startTypingAnimation(introText, 30, setTypedText);

        // console.log("intervalId", intervalId,"setTypedText",setTypedText);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`equipo ${openMenu ? 'blur' : ''}`}>
            <Container maxWidth="lg">
                {/* Introducción del equipo */}
                <div className="equipo-intro">
                    {/* <Typography variant="h4" align="center" gutterBottom>
                        Conocenos
                    </Typography> */}
                    <div className='empresaDescripcion'>
                        <Typography variant="body1" align="center" gutterBottom>
                            "Gescotec se estableció con la visión de ser líderes en la consultoría de software, proporcionando soluciones que no sólo resuelven problemas complejos sino que también impulsan el crecimiento empresarial. Desde el desarrollo de aplicaciones hasta la implementación de sistemas ERP, nos enorgullecemos de nuestra habilidad para entregar proyectos exitosos como el ERP Web para Crese y la aplicación de Reembolsos Médicos para Zurich."

                        </Typography>
                    </div>

                    <div className='empresaDescripcion2'>
                        <img src={logoGesco} alt="" />
                        <div className='frase_insp'>
                            <Typography gutterBottom>
                                {typedText}
                                {/* <h5 className={typedText.length == 53 ? "finish" : ""}></h5> */}
                            </Typography>
                        </div>
                    </div>

                </div>

                {/* Descripción de la misión y visión */}
                <div className="equipo-descripcion">


                    <div className={`descripcion-item mission from-left ${showMission ? 'show-mission' : ''}`}>
                        <div  >
                            <Typography variant="h5" gutterBottom>
                                Misión
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Nuestra misión es proporcionar soluciones de ingeniería de software de alta calidad, empleando tecnologías de inteligencia artificial de vanguardia, como ChatGPT, DALL-E, Bard, Mindjourney, entre otras, para maximizar la eficiencia y reducir los costos de desarrollo de software para nuestros clientes.
                            </Typography>
                        </div>


                    </div><img src={mision_vision} alt="Misión" className="descripcion-imagen" />
                    <div className={`descripcion-item2 vision from-right ${showVision ? 'show-vision' : ''}`}>
                        <div >
                            <Typography variant="h5" gutterBottom>
                                Visión
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Nuestra visión es ser líderes en la integración de inteligencia artificial en el proceso de desarrollo de software, reconocidos por transformar la manera en que las organizaciones construyen y despliegan aplicaciones. Buscamos continuar innovando y adaptándonos a los avances tecnológicos, para ofrecer siempre las soluciones más avanzadas y eficientes a nuestros clientes.
                            </Typography>
                        </div>
                    </div>
                </div>


                <div className="values_content">
                    <div className='values_title'>
                        <div>
                            <Typography variant="h5" gutterBottom>
                                Principios de Gescotec
                            </Typography>
                            <Typography variant="body1">
                                Nuestros principios fundamentales guían nuestra forma de trabajar y nos ayudan a mantenernos enfocados en nuestro propósito:
                            </Typography>
                        </div>

                        {/* <img src={values} alt="Estadísticas" className="descripcion-imagen" /> */}
                    </div>
                    <div className='valores'>
                        <ul>
                            <li class="value">
                                <div class="value-content">
                                    <h3># Nuestra constante Innovación</h3>
                                    <p>Nos permite ofrecer soluciones tecnológicas avanzadas y adaptadas a las últimas tendencias del mercado.</p>
                                </div>
                            </li>
                            <li class="value">
                                <div class="value-content">
                                    <h3># Compromiso con la calidad</h3>
                                    <p>Nos esforzamos por garantizar la excelencia en cada producto y servicio que ofrecemos, priorizando la satisfacción del cliente.</p>
                                </div>
                            </li>
                            <li class="value">
                                <div class="value-content">
                                    <h3># Transparencia y Honestidad</h3>
                                    <p>Valoramos la comunicación abierta y honesta en todas nuestras interacciones comerciales, construyendo relaciones basadas en la confianza mutua.</p>
                                </div>
                            </li>
                            <li class="value">
                                <div class="value-content">
                                    <h3># Orientación al cliente</h3>
                                    <p>Colocamos las necesidades y expectativas de nuestros clientes en el centro de nuestras operaciones, trabajando para superar sus expectativas en cada proyecto.</p>
                                </div>
                            </li>
                            <li class="value">
                                <div class="value-content">
                                    <h3># Trabajo en equipo colaborativo</h3>
                                    <p>Promovemos un ambiente de trabajo donde la colaboración y el apoyo mutuo son fundamentales para alcanzar nuestros objetivos.</p>
                                </div>
                            </li>
                            <li class="value">
                                <div class="value-content">
                                    <h3># Responsabilidad social y ambiental</h3>
                                    <p>Nos comprometemos a operar de manera ética y sostenible, contribuyendo positivamente al bienestar de la sociedad y al cuidado del medio ambiente.</p>
                                </div>
                            </li>
                            <li class="value">
                                <div class="value-content">
                                    <h3># Mejora continua</h3>
                                    <p>Buscamos constantemente oportunidades para aprender y crecer, buscando la excelencia en todo lo que hacemos y adaptándonos a los cambios del entorno.</p>
                                </div>
                            </li>
                            <li class="value">
                                <div class="value-content">
                                    <h3># Ética empresarial</h3>
                                    <p>Actuamos con integridad y respeto en todas nuestras actividades comerciales, cumpliendo siempre con los más altos estándares éticos y legales.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Lista de miembros del equipo */}
                <div className="equipo_presentacion">
                    <Typography variant="h5" align="center" gutterBottom>
                        Conoce a nuestro equipo
                    </Typography>
                    <Typography variant="body1" align="center">
                        Nuestro equipo está formado por profesionales apasionados y con experiencia en diversas áreas. Estamos comprometidos a brindar soluciones de alta calidad y a superar las expectativas de nuestros clientes.
                    </Typography>
                </div>
                <Grid container spacing={3}>
                    {equipoData.map((miembro, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <MiembroEquipo className="cardMiembro" {...miembro} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Equipo;
