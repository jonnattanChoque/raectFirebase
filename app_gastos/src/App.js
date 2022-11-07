import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo, ContenedorHeader, ContenedorBotones} from "./shared/Styles/Header"
import Button from "./shared/Styles/Buttons";
import {ButtonSessionClose, BillsTotalBar} from "./shared/UI";
import BillForm from './components/BillForm';

const App = () => {
  console.log("ol.a")
  return (
    <>
    <Helmet>
      <title>Agregar gasto</title>
    </Helmet>
    <Header>
      <ContenedorHeader>
        <Titulo>Agregar gasto</Titulo>
        <ContenedorBotones>
          <Button to="/billsbycategory">Categorias</Button>
          <Button to="/billslist">Lista de gastos</Button>
          <ButtonSessionClose  />
        </ContenedorBotones>
      </ContenedorHeader>
    </Header>
    <BillForm />
    <BillsTotalBar />
    </>
  )
}

export default App