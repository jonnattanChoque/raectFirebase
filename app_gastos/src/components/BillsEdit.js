import React from 'react'
import { Header, Titulo } from "./../shared/Styles/Header"
import { BillsTotalBar, BtnBack } from './../shared/UI/';
import Helmet from 'react-helmet';
import BillForm from './BillForm';
import { useParams } from 'react-router-dom';
import { useGetBill } from './../hooks/useGetllBill';

export const BillsEdit = () => {
  const {id} = useParams();
  const [bill] = useGetBill(id);
  
  return (
    <>
      <Helmet>
        <title>Editar Gasto</title>
      </Helmet>
      <Header>
        <BtnBack routeBack="/billslist" />
        <Titulo>Editar Gasto</Titulo>
      </Header>
      <BillForm bill={bill} idBill={id} />
      <BillsTotalBar />
    </>
  )
}