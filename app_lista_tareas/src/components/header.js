import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  const { mostrar, setMostrar } = props;

  const toggleMostrar = () => setMostrar(!mostrar);

  return (
    <header className='header'>
        <h1 className='header__titulo'>Lista de tareas</h1>
        <button className='header__boton' onClick={() => toggleMostrar()}>
            {mostrar ? 'No mostrar completadas' : 'Mostrar completadas'}
            <FontAwesomeIcon icon={mostrar ? faEyeSlash : faEye} className="header__icono-boton" />
        </button>
    </header>
  )
}

export default Header;