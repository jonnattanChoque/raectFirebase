import { useState, useEffect } from 'react'
import FirebaseDB from '../DB/FirebaseDB';
import { useNavigate } from 'react-router-dom';

const firebase = new FirebaseDB();

export const useGetBill = (id) => {
    const [bills, setBills] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        (async () => {
            const todo = await firebase.readOne('bills', id);
            if(todo) {
                setBills(todo);
            } else {
                navigate('/billslist');
            }
        })();
    }, [])
    return [bills]
}

