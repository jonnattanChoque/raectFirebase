import React from 'react';
import { Header, Titulo } from "../shared/Styles/Header"
import {BillsTotalBar, BtnBack} from '../shared/UI';
import IconsCategory from '../shared/Styles/IconsCategory';
import Buttons from '../shared/Styles/Buttons';
import { ReactComponent as IconEdit } from './../images/editar.svg';
import { ReactComponent as IconDelete } from './../images/borrar.svg';
import {
  Lista,
  ElementoLista,
  Categoria,
  Descripcion,
  Valor,
  Fecha,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo
} from '../shared/Styles/Lists';
import { Helmet} from 'react-helmet';
import {useGetBills} from './../hooks/useGetBills';
import { Link } from 'react-router-dom';
import { FormatedDate } from './../utils/Formated'
import { DateEquials } from './../utils/Validates'
import FirebaseDB from '../DB/FirebaseDB';

const firebaseDB = new FirebaseDB();

export const BillsList = () => {
  const [bills, loadMoreQuery] = useGetBills();

  const deleteBill = (id) => {
    firebaseDB.delete('bills', id);
  }

  return (
    <>
    <Helmet>
      <title>Lista de gastos</title>
    </Helmet>
    <Header>
      <BtnBack routeBack="/home" />
      <Titulo>Lista de gastos</Titulo>
    </Header>
    <Lista>
      {bills.map((bill, index) => (
        <div key={bill.id}>
          {!DateEquials(bill.date, index, bills) && <Fecha>{FormatedDate(bill.date)}</Fecha>}
          <ElementoLista>
            <Categoria>
              <IconsCategory id={bill.category} /> 
              {bill.category}
            </Categoria>
            <Descripcion> {bill.description}</Descripcion>
            <Valor>$ {bill.amount} </Valor>
            <ContenedorBotones>
              <BotonAccion as={Link} to={`/billsedit/${bill.id}`}><IconEdit /></BotonAccion>
              <BotonAccion onClick={() => deleteBill(bill.id)}>
                <IconDelete />
              </BotonAccion>
            </ContenedorBotones>
          </ElementoLista>
        </div>
      ))}
      <ContenedorBotonCentral>
        <BotonCargarMas onClick={loadMoreQuery}>Cargar mas</BotonCargarMas>
      </ContenedorBotonCentral>
      {bills.length === 0 && (
        <ContenedorSubtitulo>
          <Subtitulo>No hay gastos</Subtitulo>
          <Buttons as={Link} to="/">Agregar gasto</Buttons>
        </ContenedorSubtitulo>
      )}
    </Lista>
    <BillsTotalBar />
    </>
  )
}
