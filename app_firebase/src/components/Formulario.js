import React, {useState} from 'react'
import styled from 'styled-components'
import FirebaseDB from "../DB/FirebaseDB";

const fireabaseDB = new FirebaseDB();

const Formulario = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(name.length === 0 || email.length === 0) {
            alert("Todos los campos son obligatorios");
            return;
        }

        const data = {
            name: name,
            email: email
        }
        await fireabaseDB.create('usuarios', data);
        setEmail('');
        setName('');
    }

    return (
        <form action='' onSubmit={handleSubmit}>
            <Input type="text" placeholder="Nombre" name='name' 
            onChange={(e) => setName(e.target.value)} value={name}/>
            <Input type="text" placeholder="Correo" name='email' 
            onChange={(e) => setEmail(e.target.value)} value={email}/>
            <Boton type="submit">Agregar</Boton>
        </form>
    )
}

export default Formulario

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

const Boton = styled.button`
	padding: 10px 30px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;