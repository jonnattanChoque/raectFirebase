import React from 'react';
import { Header, Titulo } from "../shared/Styles/Header"
import {BtnBack} from '../shared/UI';
import { Helmet} from 'react-helmet';
import { BillsTotalBar } from './../shared/UI/';
import {useGetBills} from './../hooks/useGetBills';
import {
  Lista,
  ElementoLista,
  ListaDeCategorias,
  ElementoListaCategorias,
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
} from './../shared/Styles/Lists';
import IconsCategory from '../shared/Styles/IconsCategory';

export const BillsByCategory = () => {
  const [bills] = useGetBills();

  return (
    <>
    <Helmet>
      <title>Gastos por categorias</title>
    </Helmet>
    <Header>
      <BtnBack routeBack="/" />
      <Titulo>Gastos por categorias</Titulo>
    </Header>
    <ListaDeCategorias>
      {bills.map((bill, index) => (
        <ElementoListaCategorias key={bill.id}>
          <Categoria>
            <IconsCategory id={bill.category} /> {bill.category}
          </Categoria>
          <Valor> $ {bill.amount} </Valor>
        </ElementoListaCategorias>
      ))}
    </ListaDeCategorias>
    <BillsTotalBar />
    </>
  )
}