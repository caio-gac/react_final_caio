import styled from 'styled-components';

const TextH1 = styled.h1`
    font-weight: 400;
    font-size: 60px;
    line-height: 76px;
    font-family: 'Roboto';

    color: #E0E0E0;
    width: 118px;
    @media screen and (max-width: 768px){
	    width:30vw;
	}
`;

const TextH3 = styled.h3`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    font-family: 'Mark Pro';

    color: #E0E0E0;
    @media screen and (max-width: 768px){
		font-size: 22px;
	}
`;

const TextDiv = styled.div`
    margin-left:-5vw;
    margin-top:1px;
    margin-bottom:9vw;
    @media screen and (max-width: 768px){
        width: 100%;
	}
`;

const H3Div = styled.div`
    width: 15.2025vw;
    @media screen and (max-width: 768px){
		width:60vw;
	}
`;

export default function TextLogin () {
    return (
        <TextDiv>
            <TextH1>Olá,</TextH1>
            <H3Div>
                <TextH3>Para continuar navegando de forma segura,efetue o login na rede.</TextH3>
            </H3Div>
        </TextDiv>
    );
}