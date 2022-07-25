import { logout } from 'components/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RefreshContainer = styled.div`
  display: flex;
  min-width: 230px;
  justify-content:space-around;
  align-items:center;
  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    color: #FFFFFF;
    @media screen and (max-width:767px){
      height:7vh;
      width:40vw;
    }
  }
  @media screen and (max-width:767px){
    height:50%;
    width:100vw;
    flex-direction:row;
    margin-top:1vh;
  }
`;

const Timer = styled.div`
  display: flex;
  flex-direction: column;
  text-align:center;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width:767px){
      height:7vh;
      width:30vw;
      font-size:7vh;
    }
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    color: #FFFFFF;
    @media screen and (max-width:767px){
      height:7vh;
      width:20vw;
      font-size:3vh;
      margin-left:5vw;
    }
  }
  // @media screen and (max-width:767px){
  //   flex-direction: row;
  // }
  
`;

export default function Counter(){
    const [timer, setTimer] = useState(600);
    const navigate = useNavigate();
    if(timer <= 0){
        logout();
        navigate('/');}
    setTimeout(()=>{setTimer(timer - 1);}, 1000);

    return(
        <RefreshContainer>
            <h3>
              Application<br />
              refresh in
            </h3>
            <Timer>
                <h2>
                    {timer}
                </h2>
                <span>
                  seconds
                </span>

            </Timer>

        </RefreshContainer>
    );
}