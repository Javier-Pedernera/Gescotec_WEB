import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import '../sass/components/_CarouselLogos.scss';
import DigevoCorp from '../assets/logos/empresa1.png'
import laboratorioHemoderivados from '../assets/logos/empresa2.png'
import Logo_Chilena_2018 from '../assets/logos/empresa6.png'
import Logo_Zurich from '../assets/logos/empresa3.png'
import logoCRESE from '../assets/logos/empresa5.png'
import logo_euroamerica from '../assets/logos/empresa4.png'
import logotipo_precision_2018 from '../assets/logos/empresa7.png'
import Mettler_Toledo from '../assets/logos/empresa8.png'
import oaxaca from '../assets/logos/empresa9.png'
import Spincorp from '../assets/logos/empresa10.png'
import upana2 from '../assets/logos/empresa11.png'
import Agrega_tu_Logo from '../assets/logos/Agrega_tu_logo.png'

const logos = [
    DigevoCorp,
    laboratorioHemoderivados,
    Logo_Chilena_2018,
    Logo_Zurich,
    logoCRESE,
    logo_euroamerica,
    logotipo_precision_2018,
    Mettler_Toledo,
    oaxaca,
    Spincorp,
    upana2,
    Agrega_tu_Logo
];

const groupSize = 4; // Define el tamaño de cada grupo de imágenes

const groupLogos = []; // Array para almacenar los subarrays de logos
for (let i = 0; i < logos.length; i += groupSize) {
    groupLogos.push(logos.slice(i, i + groupSize));
}


const CarouselLogos = () => {
    return (
        <Carousel
            animation="fade"
            timeout={3000}
            navButtonsAlwaysVisible={false}
            indicators={false}
            className="carousel-container"
        >
            {groupLogos.map((group, index) => (
                <Paper key={index} className="logo-container"> {/* Crea un contenedor para cada grupo de logos */}
                    {group.map((logo, idx) => (
                        <img key={idx} src={logo} alt={`Logo ${index * groupSize + idx + 1}`} className="logo-image" />
                    ))}
                </Paper>
            ))}
        </Carousel>
    );
};

export default CarouselLogos;

