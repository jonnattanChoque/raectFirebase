import React from 'react';
import App from './../App';
import { Login, Register, BillsByCategory, BillsEdit, BillsList } from "./../components";
import { Route, Routes } from 'react-router-dom';
import PrivatePaths from './PrivatePaths';

const RoutesPaths = () => {
  return (
    <Routes>
        <Route path='/' element={
            <PrivatePaths>
                <App />
            </PrivatePaths>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/billsbycategory" element={
            <PrivatePaths>
                <BillsByCategory />
            </PrivatePaths>
        } />
        <Route path="/billslist" element={
            <PrivatePaths>
                <BillsList />
            </PrivatePaths>
        } />
        <Route path="/billsedit/:id" element={
            <PrivatePaths>
                <BillsEdit />
            </PrivatePaths>
        } />
    </Routes>
  )
}

export default RoutesPaths