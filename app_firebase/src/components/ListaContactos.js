import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import FirebaseDB from '../DB/FirebaseDB';
import Contacto from './Contacto';

const fireabaseDB = new FirebaseDB();

const ListaContactos = () => {
    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fireabaseDB.read('usuarios');
            setContactos(response);
        })();
      }, [contactos]);

    return (
        <ContenedorContactos>
            {contactos.map((contacto) => (
                <Contacto key={contacto.id} contacto={contacto} />
            ))}
        </ContenedorContactos>
    )
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;

export default ListaContactos