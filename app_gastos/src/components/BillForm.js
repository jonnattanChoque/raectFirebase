import React, {useState, useEffect} from 'react';
import { ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton } from './../shared/Styles/Forms';
import Button from '../shared/Styles/Buttons';
import {ReactComponent as IconPlus} from "./../images/plus.svg"
import {ReactComponent as IconEdit} from "./../images/editar.svg"
import {SelectCategories, DatePicker} from '../shared/UI';
import FirebaseDB from '../DB/FirebaseDB';
import { useAuth } from '../context/AuthContext';
import { Alerts } from '../shared/UI/Alerts';
import { useNavigate } from 'react-router-dom';
import { FormatedDate } from './../utils/Formated'

const firebase = new FirebaseDB();

const BillForm = (props) => {
    const {bill, idBill} = props;
    const {user} = useAuth();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('hogar');
    const [date, setDate] = useState(new Date());
    const [stateAlert, setStateAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        if(bill) {
            if(bill.uid === user.uid){
                setDescription(bill.description);
                setAmount(parseInt(bill.amount));
                setCategory(bill.category);
                setDate(FormatedDate(bill.date, false));
            }
        }
    }, [bill, user, navigate])

    const handleSubmit = async(e) => {
        e.preventDefault();
        var response;

        if(!description.trim() || !amount.trim() || !category.trim() || !date) {
            setStateAlert(true);
            setMessageAlert({
                message: 'Todos los campos son obligatorios',
                type: 'error'
            });
            return;
        }
        const data = {
            description,
            amount: parseFloat(amount).toFixed(2),
            category,
            date: date.getTime(),
            uid: user.uid
        }
        
        if(bill) {
            response = await firebase.update('bills', idBill, data);
        } else {
            response = await firebase.create('bills', data);
        }
        
        if(response) {
            setDescription('');
            setAmount('');
            setCategory('hogar');
            setDate(new Date());
            setStateAlert(true);
            setMessageAlert({
                message: bill ? 'Gasto actualizado correctamente' : 'Gasto creado correctamente',
                type: 'exito'
            });
        } else {
            setStateAlert(true);
            setMessageAlert({
                message: bill ? 'Error al actualizar el gasto' : 'Error al crear el gasto',
                type: 'error'
            });
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'description') {
            setDescription(e.target.value);
        } else if (e.target.name === 'amount') {
            setAmount(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    return (
        <>
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategories category={category} setCategory={setCategory} />
                <DatePicker date={date} setDate={setDate} />
            </ContenedorFiltros>
            <div>
                <Input type="text" placeholder="Descripción" name="description" 
                value={description} onChange={handleChange}/>
                <InputGrande type="number" id="valor" placeholder="$0.00" name="amount" 
                value={amount} onChange={handleChange}/>
            </div>
            <ContenedorBoton>
                <Button as="button" primario conIcono type="submit">
                    {bill ? 'Actualizar gasto' : 'Agregar gasto'}
                    {bill ? <IconEdit /> : <IconPlus />}
                </Button>
            </ContenedorBoton>
        </Formulario>
        <Alerts type={messageAlert.type} message={messageAlert.message} stateAlert={stateAlert} 
      setStateAlert={setStateAlert}/>
      </>
    )
}

export default BillForm