import React, {useState} from 'react';
import { ContenedorHeader, Header, Titulo } from "../shared/Styles/Header"
import Button from "../shared/Styles/Buttons";
import { Formulario, Input, ContenedorBoton } from "../shared/Styles/Forms";
import { ReactComponent as SvgLogin } from './../images/login.svg';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import FirebaseDB from '../DB/FirebaseDB';
import { useNavigate } from 'react-router-dom';
import { Alerts } from '../shared/UI/Alerts';
const firebaseDB = new FirebaseDB();

export const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stateAlert, setStateAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState({});

  const handleSubmit = async(e) => {
    e.preventDefault();
    setStateAlert(false);
    if(!validRows()) return;

    try {
      await firebaseDB.login(email, password);
      setEmail('');
      setPassword('');
      history('/billslist');
    } catch (error) {
      setStateAlert(true);
      setMessageAlert({
        message: error,
        type: 'error'
      });
    }
  }

  const validRows = () => {
    const regex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!email.trim()) {
      setStateAlert(true);
      setMessageAlert({
        message: 'El correo es obligatorio',
        type: 'error'
      });
      return false;
    }
    if (!regex.test(email)) {
      setStateAlert(true);
      setMessageAlert({
        message: 'El correo no es válido',
        type: 'error'
      });
      return false;
    }
    if (!password.trim()) {
      setStateAlert(true);
      setMessageAlert({
        message: 'La contraseña no puede estar vacío',
        type: 'error'
      });
      return false;
    }
    if (password.length < 6) {
      setStateAlert(true);
      setMessageAlert({
        message: 'La contraseña debe tener al menos 6 caracteres',
        type: 'error'
      });
      return false;
    }

    return true;
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Helmet>
        <title>Iniciar sesión</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar sesión</Titulo>
          <div>
            <Button to="/register" primario> Registro </Button>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input type="email" placeholder="Correo" name="email" 
        value={email} onChange={handleChange} />
        <Input type="password" placeholder="Contraseña" name="password" 
        value={password} onChange={handleChange} />
        <ContenedorBoton>
          <Button as="button" primario="true" type="submit">Iniciar sesión</Button>
        </ContenedorBoton>
      </Formulario>
      <Alerts type={messageAlert.type} message={messageAlert.message} stateAlert={stateAlert} 
      setStateAlert={setStateAlert}/>
    </>
  )
}

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem;
  margin-bottom: 1.25rem;
`;
