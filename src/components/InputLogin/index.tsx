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
    @media screen and (max-width: 768px){
		width:60vw;
	}
      
`;

const DivInput = styled.div`
    display:flex;
    flex-direction: column;
    row-gap: 2.5vh;
    height: 213px;
    margin-bottom:20vh;
    @media screen and (max-width: 768px){
		width:100vw;
	}
`;

const H2Input = styled.h2`
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;

    color: #E0E0E0;
    @media screen and (max-width: 768px){
		width:100vw;
        text-align: center;
        align-items:center;
        justify-content:center;
	}
`;

const DivInput2 = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2.5vh;
    @media screen and (max-width: 768px){
		width:100vw;
        align-items:center;
        justify-content:center;

	}
    
`;

const DivInput3 = styled.div`
    display: flex;
    
    flex-direction: row;
    align-items: center;
    height: 5.557vh;
    width: 19.142vw;
    @media screen and (max-width: 768px){
		width:85vw;
        align-items:center;
        justify-content:center;
	}
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
    color:white;
    @media screen and (max-width: 768px){
		align-items:center;
        justify-content:center;
        width:30vw;
	}
    
`;

const ErrorDiv = styled.span`
    align-items:center;
    color: red;
`;

const SignUp = styled.div`
    color: white;
    text-decoration: none;
`;

const IconWrapper = styled.div<{isEditing:boolean}>`
    position:relative;
    left: ${props => props.isEditing ? '-2vw': '1vw'};
    @media screen and (max-width: 768px){
		left: ${props => props.isEditing ? '-4vw': '2vw'}
	}
`;



export default function InputLogin () {
    const [isEditing,setIsEditing] = useState(false);
    function handleFocus() {
        setIsEditing ((isEditing) => !isEditing); 
    }

    const [LoginEmail, setLoginEmail] = useState('') ;
    const [LoginPassword, setLoginPassword] = useState('') ;
    const [errorMessage, setErrorMessage] = React.useState('');

    async function loginSubmit(event:any) {
        event?.preventDefault();
        login(LoginEmail,LoginPassword);
        try {
            if (await login(LoginEmail,LoginPassword)) {
                console.log('certo');
                window.location.href = '/home';
            }    
        } catch (error:any) {
            setErrorMessage('Invalid Email / Password');
        }
        

    }
    

    return(
        <DivInput>
            <H2Input>Login</H2Input>
            <DivInput2>
                <DivInput3>
                    <Input type="text" placeholder='Usu??rio' onBlur={handleFocus} onFocus={handleFocus} onChange={(event) =>{setLoginEmail(event.target.value);}}/>
                    <IconWrapper isEditing={isEditing}> <User /></IconWrapper>
                </DivInput3>
                <DivInput3>
                    <Input type="password" name="" id="" placeholder='Senha'  onBlur={handleFocus} onFocus={handleFocus} onChange={(event) =>{setLoginPassword(event.target.value);}} />
                    <IconWrapper isEditing={isEditing}> <Pass/></IconWrapper>
                </DivInput3>
                
                {errorMessage && <ErrorDiv>{errorMessage}</ErrorDiv>}

                <Link to={'/Register'} style={{textDecoration: 'none'}}><SignUp>Dont have an account ? Signup.</SignUp></Link>
                <DivButton>
                    <ButtonLogin onClick={loginSubmit}>Continuar</ButtonLogin>
                </DivButton>
            </DivInput2>
        </DivInput>
    );
}