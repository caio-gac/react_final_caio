/* eslint-disable linebreak-style */
// import {ReactComponent as User} from 'assets/icon-user.svg';
// import {ReactComponent as Pass} from 'assets/icon-password.svg';
import styled from 'styled-components';
import { useState } from 'react';
import { logout, register } from 'components/auth';

import { Link, Navigate, useNavigate } from 'react-router-dom';

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
    @media screen and (max-width: 768px){
        display:block;
        width: 100vw;
    }
`;

const DivInput = styled.div`
    display:flex;
    flex-direction: column;
    row-gap: 2.5vh;
    height: 213px;
    @media screen and (max-width: 768px){
        display:block;
        width: 70vw;
        align-items:center;
        justify-content:center;
    }
`;

const H2Input = styled.h2`
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;

    color: #E0E0E0;
    @media screen and (max-width: 768px){
        align-items:center;
        justify-content:center;
        width: 50vw;
        font-size:15vw;
        margin-left:6vw;
    }
`;

const DivInput2 = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2.5vh;
    @media screen and (max-width: 768px){
        padding: 5vh 4vh;
        min-height: 80%;
        margin: auto 0;

    }
`;

const DivInput3 = styled.div`
    display: flex;
    
    flex-direction: row;
    align-items: center;
    height: 5.557vh;
    width: 19.142vw;
    @media screen and (max-width: 768px){
        align-items:center;
        justify-content:center;
        width: 50vw;
    }
    
`;
const ButtonReg = styled.button`
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    height: 6.205vh;
    width: 19.142vw;
    @media screen and (max-width: 768px){
        align-items:center;
        justify-content:center;
        width: 50vw;
    }
`;
const DivButton = styled.div`
    margin-top: 10vh;
    margin-bottom: 17vh;
    align-items:center;
    justify-content:center;
`;
// const Icon = styled.div`
//     margin-left: 1vh;
// `;
const LogIn = styled.div`
    color: white;
    text-decoration: none;
    margin-top:3vh;
    @media screen and (max-width: 768px){
        align-items:center;
        justify-content:center;
        text-align:center;
        width:50vw;
        
    }
    
`;

const ErrorDiv = styled.div` 

`;
const Error1H1 = styled.h1`
    
`;
const Error2H1 = styled.h1`
    
`;
const Error3H1 = styled.h1`
    
`;
const Error4H1 = styled.h1`
    
`;





export default function InputRegister() {
    const [ValNum, setValNum] = useState(false);
    const [ValMin, setValMin] = useState(false);
    const [ValMax, setValMax] = useState(false);
    const [ValLen, setValLen] = useState(false);
    const navigate = useNavigate();


    function validateForm(registerEmail:any,registerPassword:any){
        if(validateEmail()
          && ValNum
          && ValMin
          && ValMax
          && ValLen
        ){
            register(registerEmail,registerPassword);
            alert('Cadastro realizado com sucesso');
            navigate('/');
            logout();
        }       
    }

    function showValidation(pass:any){
        if( vNum(pass)
        
        ){
            console.log('mostrar');
            setValNum(true);
            // setShowVal({pass: false});   
        }console.log('Não');

        if( vMin(pass)

        ){
            console.log('mostrar');
            setValMin(true);
            // setShowVal({pass: false});   
        }console.log('Não');

        if( vMax(pass)
        
        ){
            console.log('mostrar');
            setValMax(true);
            // setShowVal({pass: false});   
        }console.log('Não');

        if( vLen(pass)
        
        ){
            console.log('mostrar');
            setValLen(true);
            // setShowVal({pass: false});   
        }console.log('Não');

        if (pass == ''

        ){
            setValNum(false);
            setValMin(false);
            setValMax(false);
            setValLen(false);
        }
        
    }

    

    function validateEmail(){
        return /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    function vMin(pass:any) {
        return /[a-z]/.test(pass);
    }
    function vMax(pass:any) {
        return /[A-Z]/.test(pass);
    }
    function vNum(pass:any) {
        return /[0-9]/.test(pass);
    }
    function vLen(pass:any) {
        return /^[a-zA-Z0-9]{6,}$/.test(pass);
    }
    


    const [registerEmail, setRegisterEmail] = useState('') ;
    const [registerPassword, setRegisterPassword] = useState('') ;
    const [msgError, setMsgError] = useState('');
    // const [showVal, setShowVal] = useState({pass: false});

    async function registerSubmit(registerEmail:any,registerPassword:any) {
        // event?.preventDefault();
        // if (await register(registerEmail,registerPassword)) {
        //     console.log('certo');
        //     window.location.href = '/home';
        // }
        try {
            validateForm(registerEmail,registerPassword);
            
        } catch (error:any) {
            setMsgError(error.code.slice(5));
        }
    }
    const inputEmail = document.querySelector('#Email') as HTMLInputElement;
    const email = inputEmail?.value;
    const inputPass = document.querySelector('#Inp') as HTMLInputElement;
    const pass = inputPass?.value;
    // function passVal() {
       
    //     if (validacao.Vazio(email )) {
    //         // let a = Error1H1;
            
    //         if (validacao.LetraMaiuscula(pass)) {
    //             console.log('b');
                
    //         }
    //         if(validacao.LetraMinuscula(pass)){
    //             console.log('c');
    //         }
    //         if (!validacao.Minimo(pass,6)) {
    //             console.log('d');
    //         }
    //         if (validacao.Numero(pass)) {
    //         // {registerSubmit;}
    //             console.log('e');
    //         }
    //         if (validacao.Vazio(pass )) {
    //             console.log('f');
    //             registerSubmit;
    //         }
    //         // {setMsgError('Password must contain a number');}
    //         // {setMsgError('Password length must be over 6 digits');}
    //         // {setMsgError('Password must contain a lowercase letter');}
    //         // {setMsgError('Password must contain a uppercase letter');}
    //         // {setMsgError('Password is empty ');}
        
    //         // if (V == validacao.Vazio(email )) {
            
    //     // }
    //     }
    // }
    

    return( 
    
        <DivInput>
            <H2Input>register</H2Input>
            <DivInput2>
                <DivInput3>
                    <Input required id="Email"  type="text" placeholder='Usuário' onChange={(event) =>{setRegisterEmail(event.target.value);}} />
                </DivInput3>
                <DivInput3>
                    <Input required type="password" name="" id="Inp" placeholder='Senha' onChange={(event) =>{showValidation(event.target.value);setRegisterPassword(event.target.value);}}/>
                </DivInput3>
                {msgError && <span style={{color: 'red'}}>{msgError}</span>}
                
                <ErrorDiv>
                    <Error1H1 style={{color: ValLen ? 'green' : 'red'}}>Password length must be over 6 digits</Error1H1>
                    <Error2H1 style={{color: ValMin ? 'green' : 'red'}}>Password must contain a lowercase letter</Error2H1>
                    <Error3H1 style={{color: ValMax ? 'green' : 'red'}}>Password must contain a uppercase letter</Error3H1>
                    <Error4H1 style={{color: ValNum ? 'green' : 'red'}}>Password must contain a number</Error4H1>
                    
                </ErrorDiv>
                <DivButton>
                    <ButtonReg onClick={() => registerSubmit(registerEmail,registerPassword)}>Criar User</ButtonReg>
                    <Link to={'/'} style={{textDecoration: 'none'}}><LogIn>Ja possui uma conta ? Entre</LogIn></Link>
                </DivButton> 
            </DivInput2>
        </DivInput>
    );
}
