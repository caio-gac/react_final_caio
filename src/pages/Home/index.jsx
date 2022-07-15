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
    height: 100%;
    
`;

const HomeTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30vh;
    margin-right: 10vw;
    height: 354px;
    
`;

const HomeBola = styled.div`
    height: 825px;
    width: 825px;
    margin-top: -45vh;

    border-radius: 0px;
    justify-content: center;
    align-items: center;
    
    
    
`;

const ClockDiv = styled.div`
    
    margin-right: 1vh;
`;

const WeatherDiv = styled.div`
    
    margin-right: 1vh;
`;

const HomeH1 = styled.h1`
    font-family: 'Mark Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 4em;
    line-height: 81px;
    text-align: right;

    /* Primária */

    color: #C12D18;
`;

const HomeH2 = styled.h2`
    font-family: 'Mark Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 2.25em;
    line-height: 46px;
    text-align: right;

    color: #C12D18;
`;

const HomeH3 = styled.h3`
    font-family: 'Mark Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 30px;
    text-align: right;
    width: 100%;
    
    color: #222222;
`;

const LogoDiv1 = styled.div`
    float: left;
    margin-top: 2vh;
    margin-left: 2vw;
`;

export default function Home() {
    return(
        <main>
            <Content>
                <LogoDiv1><img src={Logo} alt="" /></LogoDiv1>
                <ClockDiv>
                    <Clock />
                </ClockDiv>
                <WeatherDiv>
                    <Weather/>
                </WeatherDiv>


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
                <HomeBola>
                    <img src={Bola} alt="" />
                </HomeBola>
                <div>

                </div>

            </Content>
            <footer>
                <Footer />
            </footer>
            
        </main>
    );
}