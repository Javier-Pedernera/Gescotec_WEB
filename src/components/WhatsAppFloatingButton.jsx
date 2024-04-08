import React from 'react';
import { ImWhatsapp } from 'react-icons/im';
import { Link } from 'react-router-dom';
import '../sass/components/WhatsAppFloatingButton.scss'
import WApp from '../assets/images/wapp.png'

const WhatsAppFloatingButton = () => {
  const phoneNumber = import.meta.env.VITE_API_PHONE;
  const message = 'Hola!, estoy interesado y me gustaría saber más de sus servicios';
  // const handleClick = () => {
  //   window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  // };

  return (
    <Link to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float-button"
      target="_blank" 
      rel="noopener noreferrer">
      <div className='image_divWapp'>
        <div className='textEscribe'>
          Escríbenos!
      </div>
      </div>
      
      
    </Link>
  );
}

export default WhatsAppFloatingButton;