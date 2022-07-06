import React from "react";
import jwt_decode from 'jwt-decode';
import styled from 'styled-components';
import logoImg from '../assets/logo.png';

export default function Login() {
    function handleCallbackResponse(response) {
        const userObject = jwt_decode(response.credential);
        console.log(userObject);
    }

    React.useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: "403689974756-a8q3tavnsnd4d1obdehoih39o2gte9cc.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );
    }, []);

    return (
        <LoginStyled>
            <div>
                <img src={logoImg} alt="Logo" />
            </div>
            <div id="signInDiv"></div>
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
    gap: 18rem;
    &>div:nth-child(1) {
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