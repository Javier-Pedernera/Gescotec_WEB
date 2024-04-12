import React, { useState } from 'react';
import '../sass/components/HamburgerMenu.scss';
import { useTheme } from '../contexts/ThemeContext';

const HamburgerMenu = ({ setopen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openMenu, setOpenMenu } = useTheme();

  // console.log(openMenu);

  const toggleMenu = () => {
    setOpenMenu(!isOpen)
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-btn__burger"></div>
      </div>
      <nav className={`menu-nav ${isOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li><a href="/home">Inicio</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/equipo">¿Quiénes somos?</a></li>
          <li><a href="/contactanos">Contacto</a></li>
          {/* <li><a href="/contactanos">Contacto</a></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;