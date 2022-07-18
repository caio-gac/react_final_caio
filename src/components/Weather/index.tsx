import Cloudy from 'assets/cloudy.png';
import { useState } from 'react';
import styled from 'styled-components';

const WeatherLocation = styled.span`
    font-weight: 500;
`;

const WeatherDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 5%;
    justify-content: flex-start;
    flex-direction: row;
`;

const WeatherContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 10px;
`;

const WeatherDivSpan = styled.span`
    margin-left: 8%;
    font-size: 2rem;
    font-weight: bold;
`;

export default function Weather() {
    const [degrees, setDegrees] = useState<number>(0);
    const [city, setCity] = useState('');
    const url = 'https://api.hgbrasil.com/weather?key=545f2b23&city_name=Joinville,SP';

    function fetchWeather(url: string) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const { main, name } = data;
                setCity(`${name} - SC`);
                setDegrees(Math.round(main.temp));
            }
            );
    }

    return(
        <>
            <WeatherContainer onLoad={() => fetchWeather(url)}>

                <WeatherLocation>{city}</WeatherLocation>
                <WeatherDiv>
                    <img src={Cloudy} alt="Cloudy icon" />
                    <WeatherDivSpan>{degrees}º</WeatherDivSpan>
                </WeatherDiv>                
            </WeatherContainer>
        </>
    );
}