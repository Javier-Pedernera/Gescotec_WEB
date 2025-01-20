import { useEffect, useState } from 'react';
import { TextField, Checkbox, Button, FormControlLabel, Container, Typography, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { css } from '@emotion/react';
import '../sass/components/_contactoForm.scss'
import { useTheme } from '../contexts/ThemeContext';
// import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import GradientCircularProgress from './loader';

const FormContainer = styled('form')({
    marginTop: 16,
    padding: 20,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
});

const RowContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
});

const FormControl = styled(TextField)(
    ({ theme }) => css`
        width: 100%;
        ${theme.breakpoints.down('sm')} {
            grid-column: span 2;
        }
    `
);
const LoaderContainer = styled('div')({
    position: 'fixed',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
});

const SubmitButton = styled(Button)(
    ({ theme }) => css`
        width: 30%;
        ${theme.breakpoints.down('sm')} {
            grid-column: span 2;
        }
    `
);

const ContactoForm = () => {
    const [alertaVisible, setAlertaVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { openMenu, setOpenMenu } = useTheme();
    const url_send_email = import.meta.env.VITE_API_URL_EMAIL
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        empresa: '',
        productoServicio: '',
        email: '',
        movil: '',
        pais: '',
        descripcion: '',
        consentimiento: false,
        empleados: ''
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    //con backend armado por mi
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        try {
          const response = await fetch(url_send_email, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (!response.ok) {
            throw new Error('Error al enviar el formulario');
          }else{
            setAlertaVisible(true);
            const data = await response.json();
        //   console.log('Correo electrónico enviado correctamente:');
          }
      
          
        } catch (error) {
            setError(true)
          console.error('Error al enviar el formulario:', error);
        } finally {
            setFormData({
                        nombre: '',
                        apellidos: '',
                        empresa: '',
                        productoServicio: '',
                        email: '',
                        movil: '',
                        pais: '',
                        descripcion: '',
                        consentimiento: false,
                        empleados: ''
                    });
          setLoading(false);
        }
      };

    useEffect(() => {
        let timeout = 0
        if (alertaVisible == true || error !== '') {
            timeout = setTimeout(() => {
                setAlertaVisible(false);
                setError(false);
            }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [alertaVisible, error]);

    // console.log(formData);
    return (<div className='All_div'>
        {loading && (
            
            <LoaderContainer className='loaderContainer'>
                <GradientCircularProgress/>
                {/* <CircularProgress /> */}
            </LoaderContainer>
        )}
        {alertaVisible ? <div className='Alert_visible_div'>
            <Alert severity="success" className={`"alert_Success" ${alertaVisible ? "visible" : ""}`}>
                <AlertTitle>Éxito</AlertTitle>
                ¡El correo electrónico se envió correctamente!
            </Alert>
        </div>
            : <div className='Alert_visible_divInactive'></div>}
        {error ? <div className='Alert_visible_div'>
            <Alert severity="error">
                <AlertTitle >Error al enviar el correo!</AlertTitle>
                Por favor intente más tarde.
            </Alert>
        </div> : <div className='Alert_visible_divInactive'> </div>

        }
        <Container className={`container_Form ${openMenu || alertaVisible || loading ? 'blur' : ''}`} maxWidth="lg">

            <Typography variant="h4" align="center" gutterBottom>Contáctanos</Typography>
            <FormContainer onSubmit={handleSubmit}>
                <RowContainer>
                    <FormControl label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    <FormControl label="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
                </RowContainer>
                <RowContainer>
                    <FormControl label="Empresa" name="empresa" value={formData.empresa} onChange={handleChange} required />
                    <FormControl
                        select
                        label="Tamaño de la empresa"
                        name="empleados"
                        value={formData.empleados}
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value="0-10 empleados">0 - 10 empleados</MenuItem>
                        <MenuItem value="10-50 empleados">10 - 50 empleados</MenuItem>
                        <MenuItem value="50-100 empleados">50 - 100 empleados</MenuItem>
                        <MenuItem value="100-500 empleados">100 - 500 empleados</MenuItem>
                        <MenuItem value="más de 500 empleados">Más de 500 empleados</MenuItem>
                    </FormControl>

                </RowContainer>
                <FormControl label="Correo electrónico" type="email" name="email" value={formData.email} onChange={handleChange} required />
                <FormControl label="Móvil" type="tel" name="movil" value={formData.movil} onChange={handleChange} required />
                <FormControl label="País" name="pais" value={formData.pais} onChange={handleChange} required />
                <FormControl label="Producto / Servicio de interés" name="productoServicio" value={formData.productoServicio} onChange={handleChange} />
                <FormControl label="Descripción" name="descripcion" value={formData.descripcion} onChange={handleChange} multiline />
                <FormControlLabel
                    control={<Checkbox checked={formData.consentimiento} onChange={handleChange} name="consentimiento" color="primary" />}
                    label="Consentimiento de recibir Email Marketing"
                />
                <hr />
                <div className='div_Form'>
                    <SubmitButton type="submit" variant="contained" className='submit_btn'>Enviar</SubmitButton>
                </div>
            </FormContainer>
        </Container>
    </div>


    );
}

export default ContactoForm;