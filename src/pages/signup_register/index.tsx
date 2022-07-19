/* eslint-disable linebreak-style */
import { useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/Logo-Compasso-Branco.png';
import InputLogin from 'components/InputLogin';
import TextLogin from 'components/TextLogin/Index';
import {Link} from 'react-router-dom';
import BG from '../../assets/BG.png';

const Conteudo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100vh;
    max-height:100%;
    max-width:100vw;
    
    
`;

const MainStyled = styled.main`
    height: 100vh;
    max-height:100%;
`;

const Login = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 50vw;
    place-content: center;
    place-items: center;
    background: no-repeat linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
`;

const ButtonLogin = styled.button`
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    height: 6.205vh;
    width: 19.142vw;
`;

const BackgroundImage = styled.div`
    height = 100vh;
    width: 50vw;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
`;

// const BGDiv = styled.img`
//     max-width: 100%;
//     width: 50vw;
//     height: auto;
// `;

const LogoBG = styled.img`
    position: relative;
    top:2vh;
    left:20vw;
`;

const DivButton = styled.div`
    margin-top: 10vh;
    margin-bottom: 17vh;
`;

import {createUserWithEmailAndPassword, onAuthStateChanged, updateCurrentUser} from 'firebase/auth';
import {auth} from 'firebaseConfig';
function App() {
   
    const logout = async()=>{    };

    const [user,setUser] = useState({});

    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser);
    });   
}

export default function Main() {
    return(
        <MainStyled>
            <Conteudo>
                <Login>
                    <div>
                        <TextLogin />
                    </div>
                    <div>
                        <InputLogin ></InputLogin>
                    </div>
                    <DivButton>
                        <Link to={'/home'}><ButtonLogin>Continuar</ButtonLogin></Link>
                    </DivButton>


                </Login>
                <BackgroundImage>
                    <LogoBG src={Logo} alt="" />
                </BackgroundImage>
            </Conteudo>
        </MainStyled>
    );
}