import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = (props) => {
    const { tareas, setTareas } = props;
    const [inputText, setInputText] = useState('');

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputText.trim() === '') {
            alert('No se puede agregar una tarea vacía');
            return;
        }
        const nuevaTarea = {
            id: Date.now(),
            nombre: inputText,
            completada: false,
        };
        setTareas([...tareas, nuevaTarea]);
        setInputText('');
    };

    return (
        <form className='formulario-tareas' onSubmit={handleSubmit}>
            <input type='text' className='formulario-tareas__input' placeholder='Agrega una tarea' onChange={(e) => handleInput(e)} value={inputText} />
            <button type='submit' className='formulario-tareas__btn'>
                <FontAwesomeIcon icon={faPlusSquare} className='formulario-tareas__icono-btn' />
            </button>
        </form>
    )
}

export default FormularioTareas;