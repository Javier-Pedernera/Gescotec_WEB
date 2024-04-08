import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../sass/components/_EquipoMiembro.scss';
import { Link } from 'react-router-dom';
import { ImLinkedin } from "react-icons/im";

const MiembroEquipo = ({ nombre, cargo, experiencia, foto, linkedin }) => {
    return (
        <Card className="equipo-item">
            <div className="equipo-item__foto-container">
                <img src={foto} alt={nombre} className="equipo-item__foto" />
            </div>
            <CardContent className='seccInfo'>
                <div className='Nombre_cargo'>
                    <Typography variant="h6" component="h2">
                        {nombre}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {cargo}
                    </Typography>
                </div>

                <div className='exp_in'>
                    {/* <Typography className='exp' variant="body2">
                        Experiencia: {experiencia}
                    </Typography> */}
                    <Link to={linkedin} target="_blank" className='link_in'> <ImLinkedin className='logo_in' /></Link>
                </div>

            </CardContent>
        </Card>
    );
}

export default MiembroEquipo;
