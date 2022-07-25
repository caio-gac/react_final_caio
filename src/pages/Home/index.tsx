/* eslint-disable linebreak-style */
import styled from 'styled-components';
import Footer from 'components/Footer';
import Bola from '../../assets/bola-LogoCompasso.svg';
import Weather from 'components/Weather';
import Logo from '../../assets/LogoCompasso.png';
import Clock from 'components/DateTime';
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height:100vh;
    heigth: 100%;
    width:100%;
    background-image:url(${Bola});
    background-position: left bottom;
    background-size: calc(1rem*30);
    background-repeat: no-repeat;
    min-height: 100vh;
    @media screen and (max-width:768px){
        background: none;
     
    }
`;

const ClockDiv = styled.div`
    
    margin-right: 25vw;
    @media screen and (max-width:768px){
        margin-right:20vw;
        margin-top:2.7vh;
    }
`;

const CWDiv = styled.div`
    display:flex;
    justify-content: space-between;
`;

const WeatherDiv = styled.div`
    
    margin-right: 1vh;
`;

const HeaderDiv = styled.div`
    display:flex;
    justify-content: space-between;
    max-width:100%;
    padding: 1.5rem 2.5rem;
    @media screen and (max-width:767px){
        flex-direction:column;
        heigth:10vh;
    }
`;

const HomeTextDiv = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:end;
    width:100%;
    flex-grow:1;
    height:10px;
    margin-top: 3vh;
    // margin-right: -10vw;
    // margin: 1rem;
    
    padding-right:10vh;
    @media screen and (max-width:767px){
        flex-direction:column;
        justify-content:justify;
        heigth:30vh;
        margin-top:-40vh;
        // margin:0;
        padding-right:5vw;
    }
    
`;

const HomeH1 = styled.h1`
    
    // font-style: normal;
    font-weight: 700;
    font-size: 4em;
    line-height: 81px;
    text-align: right;
    color: #C12D18;
    width:100%;
    @media screen and (max-width:767px){
        font-size: 4.27vh;
        line-height:3vh;
    }
`;

const HomeH2 = styled.h2`
    
    font-style: normal;
    font-weight: 700;
    font-size: 2.25em;
    line-height: 46px;
    text-align: right;
    color: #C12D18;
    @media screen and (max-width:767px){
        font-size: 3.6vh;
        line-height:3vh;
    }
`;

const HomeH3 = styled.h3`
    
    font-style: normal;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 30px;
    text-align: right;
    width: 100%;
    color: #222222;
    @media screen and (max-width:767px){
        font-size: 2vh;
        line-height:3vh;
    }
`;

const LogoDiv1 = styled.div`
    float: left;
    margin-top: 2vh;
    margin-left: 2vw;
    @media screen and (max-width:767px){
        margin-left: 15vw;
    }
`;

export default function Home() {
    return(
        <main>
            <Content>
                <HeaderDiv>
                    <LogoDiv1><img src={Logo} alt="" /></LogoDiv1>
                    <CWDiv>
                        <ClockDiv>
                            <Clock />
                        </ClockDiv>
                        <WeatherDiv>
                            <Weather/>
                        </WeatherDiv>
                    </CWDiv>
                    
                </HeaderDiv>

                <HomeTextDiv>
                    <HomeH2>Our Mission is</HomeH2>
                    <HomeH3>Nossa missão é</HomeH3>
                    <HomeH1>to transform the world</HomeH1>
                    <HomeH3>transformar o mundo</HomeH3>
                    <HomeH1>bulding digital experiences</HomeH1>
                    <HomeH3>construindo experiencias digitais</HomeH3>
                    <HomeH1>that enable our clients growth</HomeH1>
                    <HomeH3>que permitam o crescimento dos nossos clientes</HomeH3>
                </HomeTextDiv>
            </Content>
            <footer>
                <Footer />
            </footer>
            
        </main>
    );
}