import React from 'react';
import Tarea from './Tarea';

const ListaTareas = (props) => {
    const { tareas, setTareas, mostrar } = props;

    const toggleComplete = (id) => {
        setTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    completada: !tarea.completada,
                }
            }
            return tarea;
        }));
    }

    const editarTarea = (id, nuevoTexto) => {
        setTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    nombre: nuevoTexto,
                }
            }
            return tarea;
        }));
    }

    const deleteTarea = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
    }

    return (
        <ul className='lista-tareas'>
            {tareas.length >0 ? tareas.map((tarea) => {
                if (mostrar) {
                    return <Tarea tarea={tarea} key={tarea.id} toggleComplete={toggleComplete} editarTarea={editarTarea} deleteTarea={deleteTarea}/>
                } else if (!tarea.completada) {
                    return <Tarea tarea={tarea} key={tarea.id} toggleComplete={toggleComplete} editarTarea={editarTarea} deleteTarea={deleteTarea}/>
                }
            }) : <div className='lista-tareas__mensaje'>No hay tareas</div>}
        </ul>
    )
}

export default ListaTareas