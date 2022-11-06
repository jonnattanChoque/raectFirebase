import React, {useState} from 'react';
import styled from 'styled-components';
import FirebaseDB from '../DB/FirebaseDB';

const fireabaseDB = new FirebaseDB();

const Contacto = (props) => {
    const { contacto } = props;
    const [edityingTask, setEditingTask] = useState(false);
    const [newName, setNewName] = useState(contacto.name);
    const [newEmail, setNewEmail] = useState(contacto.email);

    const handleSubmit = () => {
        const editedTask = {
            id: contacto.id,
            name: newName,
            email: newEmail
        }
        fireabaseDB.update('usuarios', editedTask.id, editedTask);
        setEditingTask(false);
    }
    
    const handleDelete = (contact) => {
        fireabaseDB.delete('usuarios', contact.id);
    }

    return (
        <ContenedorContacto>
            {edityingTask ? 
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder='Nombre' value={newName} 
                    onChange={(e) => setNewName(e.target.value)}/>
                    <Input type="text" placeholder='Correo' value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)} />
                    <Boton type="submit">Actualizar</Boton>
                </form>
            :
                <div>
                    <h3>{contacto.name}</h3>
                    <p>{contacto.email}</p>
                    <Boton onClick={() => setEditingTask(true)}>Editar</Boton>
                    <Boton onClick={() => handleDelete(contacto)}>Eliminar</Boton>
                </div>
            }
        </ContenedorContacto>
    )
}

const ContenedorContacto = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid rgba(0,0,0,.2);
`;

const Nombre = styled.p`
	font-weight: bold;
`;
 
const Correo = styled.p`
	font-style: italic;
	color: #6B6B6B;
	margin: 5px 0;
`;

const Boton = styled.button`
	padding: 5px 20px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	margin: 0px 2px;
	margin-bottom: 10px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;

const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;
 
export default Contacto;