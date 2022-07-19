/* eslint-disable linebreak-style */
import {ReactComponent as User} from 'assets/icon-user.svg';
import {ReactComponent as Pass} from 'assets/icon-password.svg';
import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { login } from 'components/auth';

const Input = styled.input`
    background: #26292C;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    width: 90%;
    height: 90%;
    // margin-top: 2.9vh;
    text-color: #FFFFFF;
    padding-left: 12px;
    color:white;
    
`;

const DivInput = styled.div`
    display:flex;
    flex-direction: column;
    row-gap: 2.5vh;
    height: 213px;
    margin-bottom:20vh;
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

const DivButton = styled.div`
    margin-top: 10vh;
    margin-bottom: 20vh;
`;

const ButtonLogin = styled.button`
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    height: 6.205vh;
    width: 19.142vw;
`;

const ErrorDiv = styled.div`
    margin-top: 1px;
    color: red;
`;

const SignUp = styled.div`
    color: white;
    text-decoration: none;
`;



export default function InputLogin () {

    const [LoginEmail, setLoginEmail] = useState('') ;
    const [LoginPassword, setLoginPassword] = useState('') ;
    const [errorMessage, setErrorMessage] = React.useState('');
    // const [user, setUser] = useState({});
    // const currentUser = useState({});
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });

    
    // const login = async() =>{
    //     try {
    //         signInWithEmailAndPassword(auth,LoginEmail,LoginPassword);
    //         console.log('Loged in');
    //     } catch (error) {
    //         console.log(error); 
    //         setErrorMessage('Email or Password incorrect!');
    //     }
    // };

    async function loginSubmit(event:any) {
        event?.preventDefault();
        login(LoginEmail,LoginPassword);
        if (await login(LoginEmail,LoginPassword)) {
            console.log('certo');
            window.location.href = '/home';
        }
    }
    

    return(
        <DivInput>
            <H2Input>Login</H2Input>
            <DivInput2>
                <DivInput3>
                    <Input type="text" placeholder='Usuário' onChange={(event) =>{setLoginEmail(event.target.value);}} /><User />
                </DivInput3>
                <DivInput3>
                    <Input type="password" name="" id="" placeholder='Senha' onChange={(event) =>{setLoginPassword(event.target.value);}}/><Pass/>
                </DivInput3>
                {errorMessage && <ErrorDiv className='error'>{errorMessage}</ErrorDiv>}

                <Link to={'/Register'} style={{textDecoration: 'none'}}><SignUp>Create account ?</SignUp></Link>
                <DivButton>
                    <ButtonLogin onClick={loginSubmit}>Continuar</ButtonLogin>
                </DivButton>
            </DivInput2>
        </DivInput>
    );
}