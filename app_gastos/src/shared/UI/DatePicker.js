import React, {useState} from 'react';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import format from 'date-fns/format';
import  es  from 'date-fns/locale/es';
import styled from 'styled-components';
import Theme from '../../Theme';

const dateFormat = "dd 'de' MMMM 'de' yyyy";
const formatDate = (date = new Date()) => {
    return format(date, dateFormat, {locale: es});
}

export const DatePicker = (props) => {
    const {date, setDate} = props;
    const [show, setShow] = useState(false);

    const validShow = () => {
        if(show) {
            setShow(false);
        }
    }

    return (
        <ContenedorInput>
            <input type="text" readOnly value={formatDate(date)} onClick={() => setShow(!show)} />
            {show && <DayPicker mode='single' selected={date} onSelect={setDate} locale={es} onDayClick={() => validShow()} />}
        </ContenedorInput>
    )
}

const ContenedorInput = styled.div`
    position: relative;
    width: 40%;
 
    input {
        font-family: 'Work Sans', sans-serif;
        box-sizing: border-box;
        background: ${Theme.grisClaro};
        border: none;
        cursor: pointer;
        border-radius: 0.625rem; /* 10px */
        height: 5rem; /* 80px */
        width: 100%;
        padding: 0 1.25rem; /* 20px */
        font-size: 1.5rem; /* 24px */
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
    }
 
    .rdp {
        position: absolute;
    }
 
    .rdp-months {
        display: flex;
        justify-content: center;
    }
 
    .rdp-month {
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        border-radius: 10px;
    }
 
    @media (max-width: 60rem) {
        /* 950px */
        & > * {
            width: 100%;
        }
    }
`;