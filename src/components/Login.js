import styled from 'styled-components';
import logoImg from '../assets/logo.png';

export default function Login() {
    return (
        <LoginStyled>
            <div>
                <img src={logoImg} alt="Logo" />
            </div>
        </LoginStyled>
    );
}

const LoginStyled = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #252E3D;

    div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 7rem;
        height: 7rem;
        border-radius: 2rem;
        background: #e0e0e0;
        box-shadow: 2rem 2rem 2rem #122232, -2rem -2rem 2rem #122232;
        margin-top: 12rem;
    }
`;