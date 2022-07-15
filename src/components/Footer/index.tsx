import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    height: 100%;
    position: absolute;
    width: 100vw;
    height: 9.26vh;
    left: 0px;
    bottom: -1px;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);

`;

// const FooterDiv = styled.div`

// `;

const FooterH1 = styled.h1`
    font-family: 'Mark Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    color: #FFFFFF;

    margin-left: 354px;
    width: 541px;
    height: 58px;
`;

const FooterDivisao = styled.a`
    left: 35px;
    color: #FFFFFF;
    font-size:61px;
`;

const FooterCounter = styled.div`
    display: flex;
    flex-direction: row;
    height:100%;
    width:109px;
`;

const CounterH1 = styled.h1`
    margin-top: 2vh;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    color: #FFFFFF;
    width: 109px;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;
const CounterH2 = styled.h1`
    margin-left: -4vh;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    color: #FFFFFF;
    width: 109px;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

const CounterTime = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;
    /* identical to box height */

    text-align: center;

    /* Primária */

    color: #FFFFFF;

`;

const FooterButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    height:100%;
    align-items: center;
    justify-content: center;
`;

const FooterButtonContinue = styled.div`
    width: 131px;
    height: 100%;
    max-height: 99px;
    background: #FFFFFF;
    place-content: center;
    
`;

const FooterButtonLogout = styled.div`
    width: 131px;
    height: 100%;
`;

const FooterButtonH1 = styled.h1`
    margin-top: 30%;
    margin-left: 10%;
    font-family: 'Mark Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;

    color: #C13216;
`;

const FooterButtonH2 = styled.h2`
    margin-top: 30%;
    margin-left: 30%;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;  
    text-align: center;

    color: #FFFFFF;
`;

export default function Footer () {
    return(
        <Content>
            {/* <FooterDiv> */}
            <FooterH1>
                Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
            </FooterH1>
            <FooterDivisao>|</FooterDivisao>

            <FooterCounter>
                <CounterH1>Aplication refreshs in </CounterH1>
                <div>
                    <CounterTime>600</CounterTime>
                    <CounterH2>Seconds</CounterH2>
                </div>
                
            </FooterCounter>
            

            <FooterButtonDiv>
                <FooterButtonContinue >
                    <a target="_blank" href='https://google.com' rel="noreferrer">
                        <FooterButtonH1 >Continuar Navegando</FooterButtonH1>
                    </a>
                </FooterButtonContinue>
                <FooterButtonLogout>
                    <FooterButtonH2>Logout</FooterButtonH2>
                </FooterButtonLogout>
            </FooterButtonDiv>

                
            {/* </FooterDiv> */}
        </Content>
    );
}