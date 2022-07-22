import Cloudy from 'assets/cloudy.png';
import { useEffect, useState } from 'react';
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
         
    interface Results {
        temp: number;
        date: string;
        currently: string;
        cid: string;
        city: string;
    }
      
    interface Weather {
        by: string;
        valid_key: boolean;
        results: Results;
        execution_time: number;
        from_cache: boolean;
    }
    const [weather, setWeather] = useState<Weather>();

    async function permissionGeo(position: GeolocationPosition){
        // const [city, setCity] = useState('');
        const request = await fetch( `https://api.hgbrasil.com/weather?format=json-cors&lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=545f2b23`, {mode: 'cors',
            headers: {'Content-Type': 'Application/Json'}}
        );
        const json = await request.json();
        setWeather(json);


    }

    async function DeniedGeo() {
        const request = await fetch('https://api.hgbrasil.com/weather?format=json-cors&key=545f2b23', {
            mode: 'cors',
            headers: { 'Content-Type': 'Application/Json' }
        });
        const json = await request.json();
        setWeather(json);
    }

    useEffect(()=>{
      
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(async (position) => {
                await permissionGeo(position);
            },async ()=> {
                await DeniedGeo();
            });
        }
    },[]);

    return(
        <WeatherContainer>
            <div className="align-right">
                <WeatherLocation>
                    <h2>{weather ? `${weather.results.city.split(',')[0]} - ${weather?.results.city.split(',')[1]}` : 'Searching...'}</h2>
                </WeatherLocation>
                <WeatherDiv>
                    <img src={Cloudy} alt="Cloudy icon" />
                    <WeatherDivSpan>
                        <h3>{JSON.stringify(weather?.results.temp) || 0}°</h3>
                    </WeatherDivSpan>
                </WeatherDiv>
            </div>
        </WeatherContainer>
    );
}