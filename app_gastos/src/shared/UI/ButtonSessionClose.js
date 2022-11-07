import React from 'react'
import { ReactComponent as IconClose } from './../../images/log-out.svg';
import Boton from "./../Styles/Buttons";
import FirebaseDB from "./../../DB/FirebaseDB";
import { useNavigate } from 'react-router-dom';

const DB = new FirebaseDB();

export const ButtonSessionClose = () => {
  const navigate = useNavigate();
  const closeSession = async () => {
    try {
        await DB.logout();
        navigate('/login');
    }
    catch (error) {
        console.log(error)
    }
  }

  return (
    <Boton iconoGrande as="button" onClick={closeSession}>
        <IconClose />
    </Boton>
  )
}