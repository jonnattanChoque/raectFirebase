import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes, faSquare } from '@fortawesome/free-solid-svg-icons';

const Tarea = (props) => {
    const { tarea, toggleComplete, editarTarea, deleteTarea } = props;
    const [modoEdicion, setModoEdicion] = useState(false);
    const [nuevaTarea, setNuevaTarea] = useState(tarea.nombre);

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        setModoEdicion(false);
    }

    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon icon={tarea.completada ? faCheckSquare : faSquare} 
            className='lista-tareas__icono lista-tareas__icono-check' onClick={() => toggleComplete(tarea.id)} />
            <div className='lista-tareas__texto'>
                {modoEdicion ?
                    <form action='' className='formulario-editar-tarea' onSubmit={handleSubmit}>
                        <input type='text' className='formulario-editar-tarea__input'
                         value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
                        <button type='submit' className='formulario-editar-tarea__btn'>Actualizar</button>
                    </form>
                : tarea.nombre
                }
            </div>
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon icon={faEdit} className='lista-tareas__icono lista-tareas__icono-accion' 
                onClick={() => setModoEdicion(!modoEdicion)} />
                <FontAwesomeIcon icon={faTimes} className='lista-tareas__icono lista-tareas__icono-accion' 
                onClick={() => deleteTarea(tarea.id)}/>
            </div>
        </li>
    )
}

export default Tarea