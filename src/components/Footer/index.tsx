import styled from 'styled-components';
import Counter from './counter';
import { logout } from 'components/auth';

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    height: 120vh;
    width: 100vw;
    position:fixed;
    height: 9.26vh;
    // left: 0px;
    // bottom: -1px;
    bottom:0vh;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    @media screen and (max-width: 768px) {
    //    position: fixed;
        height:33vh;
        flex-direction:column;
        overflow:hidden;
      }

`;
const FooterH1 = styled.h1`
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
    margin-left: 354px;
    width: 541px;
    height: 58px;
    @media screen and (max-width: 768px) {
        font-size: 1.969vh;
        line-height: 2vh;
        text-align: justify;
        margin-left: -10vw;
        width: 100vw;
        padding: 2vh 1vh;
        
        
      }
`;
const FooterDivisao = styled.a`
    left: 35px;
    color: #FFFFFF;
    font-size:61px;
    @media screen and (max-width:767px){
        display:none;
    }
`;
const FooterCounter = styled.div`
    display: flex;
    flex-direction: row;
    height:100%;
    width:109px;
    @media screen and (max-width:767px){
        height:50%;
        width:20px;
    }
`;
const FooterButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    height:10vh;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:768px){
        flex-direction:column;
        justify-content:space-evenly;
        align-items:center;
        width:95vw;
        height:10vh;
      }
`;
const FooterButtonContinue = styled.div`
    width: 131px;
    height: 100%;
    max-height: 99px;
    background: #FFFFFF;
    place-content: center;
    @media screen and (max-width:768px){
        width:100vw;
        margin-top:-30px;
        // height:10vh;
        align-items:center;
      }
    
`;
const FooterButtonLogout = styled.div`
    width: 131px;
    height: 100%;
    @media screen and (max-width:768px){
        width:100vw;
        // height:10vh;
        align-items:center;
      }
`;
const FooterButtonH1 = styled.h1`
    margin-top: 30%;
    margin-left: 10%;
    // font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #C13216;
    @media screen and (max-width:768px){
        // width:30px;
        font-size: 3vh;
        line-height: 2vh;
        margin-top:2vh;
        margin-left: 0vw;
      }
`;
const FooterButtonH2 = styled.h2`
    margin-top: 30%;
    margin-left: 30%;
    // font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;  
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width:768px){
        // width:30px;
        margin-top:2vh;
        margin-left: 42vw;
        font-size: 3vh;
      }
`;
const Wrap1 = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width:768px){
    flex-direction:column;
    
    max-height:20vh;
    width:80%;
  }
  .h1{
    @media screen and (max-width: 768px) {
        // order:1;
    }
  }

`;

export default function Footer () {
    return(
        <Content>
            {/* <FooterDiv> */}
            <Wrap1>
                <FooterH1>
                    Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
                </FooterH1>
                <FooterDivisao>|</FooterDivisao>

                <FooterCounter>
                    <Counter />
                </FooterCounter>
            </Wrap1>
            

            <FooterButtonDiv>
                <FooterButtonContinue >
                    <a target="_blank" href='https://google.com' rel="noreferrer">
                        <FooterButtonH1 >Continuar Navegando</FooterButtonH1>
                    </a>
                </FooterButtonContinue>
                <FooterButtonLogout>
                    <FooterButtonH2 onClick={logout}>Logout</FooterButtonH2>
                </FooterButtonLogout>
            </FooterButtonDiv>

                
            {/* </FooterDiv> */}
        </Content>
    );
}