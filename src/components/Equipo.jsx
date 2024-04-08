import { Typography, Container, Grid } from '@mui/material';
import MiembroEquipo from './miembroEquipoCard';
import '../sass/components/_Equipo.scss';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';
import startTypingAnimation from '../utils/typingAnimation';

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

        const introText = "“El único límite para la IA es la imaginación humana”"
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
                    <Typography className='empresaDescripcion' variant="body1" align="center" gutterBottom>
                        "G-IA es una empresa vanguardista que ofrece soluciones de ingeniería de software de alta calidad, empleando tecnologías de inteligencia artificial de última generación como ChatGPT, DALL-E, Bard y Mindjourney. Su misión es maximizar la eficiencia y reducir los costos de desarrollo de software para sus clientes, transformando la manera en que las organizaciones construyen y despliegan aplicaciones."

                    </Typography>
                    <img src="https://res.cloudinary.com/dbwmesg3e/image/upload/v1710977831/GescotecPage/Pngtree_cooperative_multinational_enterprise_illustration_5049450_p8a4mm.png" alt="" />
                </div>
                <div className='frase_insp'>
                    <Typography gutterBottom>
                        {typedText}
                        <h5 className={typedText.length == 53 ? "finish" : ""}>Chris Duffey</h5>
                    </Typography>
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

                        <img src="https://res.cloudinary.com/dbwmesg3e/image/upload/v1711037408/GescotecPage/Copia_de_instrucc-codigo__3_-removebg-preview_gcrzfr.png" alt="Misión" className="descripcion-imagen" />
                    </div>
                    {/* <Parallax translateX={[150, -50]}>     */}
                    <div className={`descripcion-item2 vision from-right ${showVision ? 'show-vision' : ''}`}>
                        <div >
                            <Typography variant="h5" gutterBottom>
                                Visión
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Nuestra visión es ser líderes en la integración de inteligencia artificial en el proceso de desarrollo de software, reconocidos por transformar la manera en que las organizaciones construyen y despliegan aplicaciones. Buscamos continuar innovando y adaptándonos a los avances tecnológicos, para ofrecer siempre las soluciones más avanzadas y eficientes a nuestros clientes.
                            </Typography>
                        </div>

                        <img src="https://res.cloudinary.com/dbwmesg3e/image/upload/v1711376915/GescotecPage/20943438_pskkun-removebg-preview_af3ygy.png" alt="Visión" className="descripcion-imagen" />
                    </div>
                    {/* </Parallax> */}
                    <div className={`descripcion-item impact-stats from-left ${showImpactStats ? 'show-impact-stats' : ''}`}>
                        <div>
                            <Typography variant="h5" gutterBottom>
                                Estadísticas de impacto de la IA en el desarrollo de software
                            </Typography>
                            <Typography variant="body1">
                                La IA puede reducir considerablemente los costos asociados al proceso de desarrollo a través de la automatización de tareas repetitivas, mejorar el time to market en un 50% y aumentar la calidad de entrega evitando retrabajo innecesario.
                            </Typography>
                        </div>

                        <img src="https://res.cloudinary.com/dbwmesg3e/image/upload/v1711376888/GescotecPage/Scientists_studyingremovebg-preview_hqry3g.png" alt="Estadísticas" className="descripcion-imagen" />
                    </div>
                </div>

                {/* Lista de miembros del equipo */}
                <div className="equipo_presentacion">
                    <Typography variant="h5" align="center" gutterBottom>
                        Conoce a nuestro talentoso equipo
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
