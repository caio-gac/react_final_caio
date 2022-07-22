/* eslint-disable linebreak-style */
// import {ReactComponent as User} from 'assets/icon-user.svg';
// import {ReactComponent as Pass} from 'assets/icon-password.svg';
import styled from 'styled-components';
import { useState } from 'react';
import { register } from 'components/auth';
import validacao from './validacao';

// import { FirebaseError } from 'firebase/app';


const Input = styled.input`
    background: #26292C;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    width: 90%;
    height: 90%;
    // margin-top: 2.9vh;
    text-color: #FFFFFF;
    padding-left: 12px;
    color: white;
`;

const DivInput = styled.div`
    display:flex;
    flex-direction: column;
    row-gap: 2.5vh;
    height: 213px;
`;

const H2Input = styled.h2`
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;

    color: #E0E0E0;
`;

const DivInput2 = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2.5vh;
`;

const DivInput3 = styled.div`
    display: flex;
    
    flex-direction: row;
    align-items: center;
    height: 5.557vh;
    width: 19.142vw;
    
`;
const ButtonReg = styled.button`
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    height: 6.205vh;
    width: 19.142vw;
`;
const DivButton = styled.div`
    margin-top: 10vh;
    margin-bottom: 17vh;
`;
// const Icon = styled.div`
//     margin-left: 1vh;
// `;



export default function InputRegister() {
    const [registerEmail, setRegisterEmail] = useState('') ;
    const [registerPassword, setRegisterPassword] = useState('') ;
    const [msgError, setMsgError] = useState('');
    async function registerSubmit(event:any) {
        event?.preventDefault();
        // if (await register(registerEmail,registerPassword)) {
        //     console.log('certo');
        //     window.location.href = '/home';
        // }
        try {
            await register(registerEmail,registerPassword);
        } catch (error:any) {
            setMsgError(error.code.slice(5));
        }
    }
    const inputPass = document.querySelector('#Inp') as HTMLInputElement;
    const pass = inputPass?.value;
    function passVal() {
        if (validacao.LetraMaiuscula(pass)) {
            console.log('a');
            if(validacao.LetraMinuscula(pass)){
                console.log('b');
                if (validacao.Minimo(pass,6)) {
                    console.log('c');
                    if (validacao.Numero(pass)) {
                        {registerSubmit;}
                    }else{setMsgError('Password must contain a number');}
                }else{setMsgError('Password length must be over 6 digits');}
            }else{setMsgError('Password must contain a lowercase letter');}
        }else{setMsgError('Password must contain a uppercase letter');}
        
    }
    

    return( 
    
        <DivInput>
            <H2Input>register</H2Input>
            <DivInput2>
                <DivInput3>
                    <Input required  type="text" placeholder='Usuário' onChange={(event) =>{setRegisterEmail(event.target.value);}} />
                </DivInput3>
                <DivInput3>
                    <Input required type="password" name="" id="Inp" placeholder='Senha' onChange={(event) =>{setRegisterPassword(event.target.value);}}/>
                </DivInput3>
                {msgError && <span style={{color: 'red'}}>{msgError}</span>}
                <DivButton>
                    <ButtonReg onClick={passVal}>Criar User</ButtonReg>
                </DivButton> 
            </DivInput2>
        </DivInput>
    );
}