import React, { useState, useEffect } from 'react'
import './App.css';
import FormularioTareas from './components/FormularioTareas';
import Header from './components/header';
import ListaTareas from './components/ListaTareas';

const  App = ()  => {
  const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
  const mostrarGuardado = JSON.parse(localStorage.getItem('mostrar'));
  const [tareas, setTareas] = useState(tareasGuardadas || []);
  const [mostrar, setMostrar] = useState(mostrarGuardado || true);
  
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  useEffect(() => {
    localStorage.setItem('mostrar', mostrar.toString());
  }, [mostrar]);


  return (
    <div className="contenedor">
      <Header mostrar={mostrar} setMostrar={setMostrar} />
      <FormularioTareas tareas={tareas} setTareas={setTareas}  />
      <ListaTareas tareas={tareas} setTareas={setTareas} mostrar={mostrar} />
    </div>
  );
}

export default App;
