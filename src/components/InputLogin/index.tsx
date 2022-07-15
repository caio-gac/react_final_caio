/* eslint-disable linebreak-style */
import {ReactComponent as User} from 'assets/icon-user.svg';
import {ReactComponent as Pass} from 'assets/icon-password.svg';
import styled from 'styled-components';

const Input = styled.input`
    background: #26292C;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    width: 90%;
    height: 90%;
    // margin-top: 2.9vh;
    text-color: #FFFFFF;
    padding-left: 12px;
`;

const DivInput = styled.div`
    display:flex;
    flex-direction: column;
    row-gap: 2.5vh;
    height: 213px;
`;

const H2Input = styled.h2`
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;

    color: #E0E0E0;
`;

const DivInput2 = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2.5vh;
`;

const DivInput3 = styled.div`
    display: flex;
    
    flex-direction: row;
    align-items: center;
    height: 5.557vh;
    width: 19.142vw;
    
`;

// const Icon = styled.div`
//     margin-left: 1vh;
// `;



export default function InputLogin () {
    return(
        <DivInput>
            <H2Input>Login</H2Input>
            <DivInput2>
                <DivInput3>
                    <Input type="text" placeholder='Usuário' /><User />
                </DivInput3>
                <DivInput3>
                    <Input type="password" name="" id="" placeholder='Senha'/><Pass/>
                    <span></span>
                </DivInput3>
            </DivInput2>
        </DivInput>
    );
}