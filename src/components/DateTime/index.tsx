import { format } from 'date-fns';
import { useState } from 'react';
import styled from 'styled-components';
import lista from './ListaCall.json';

const ClockContent = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const TimeContent = styled.div`
font-style: normal;
font-weight: 700;
font-size: 9rem;
line-height: 8rem;
text-align: center;
/* Secundária */
color: #222222;
`;

const DateContent = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
`;
export default function Clock(){
    const [date, setDate] = useState(new Date());
    setInterval(()=> {
        setDate(new Date());
    }, 30000);
    return(
        <ClockContent>
            <TimeContent>
                <span>{format(date, 'HH')}</span>
                <span>:</span>
                <span>{format(date, 'mm')}</span>
            </TimeContent>
            <DateContent>
                <span>{lista.diaSemana[date.getDay()]}, {date.getDate()} de {lista.meses[date.getMonth()]} de {date.getFullYear()}</span>
            </DateContent>
        </ClockContent>
    );
}