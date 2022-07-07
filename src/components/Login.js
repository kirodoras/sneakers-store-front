import { useState, useRef } from "react";
import { useScript } from "./hooks/useScript";
import jwt_decode from 'jwt-decode';

import styled from 'styled-components';
import GlobalCss from "../styles/GlobalCss";
import logoImg from '../assets/logo.png';
import axios from "axios";

export default function Login() {
    const googlebuttonref = useRef();
    const [user, setuser] = useState(false);

    const onGoogleSignIn = async (user) => {
        try {
            let userCred = user.credential;
            let payload = await jwt_decode(userCred);
            const { name, email, picture } = payload;
            const URL = `http://localhost:5000/sign`;
            const promise = await axios.post(URL, {
                name,
                email,
                picture
            });
            console.log(promise.data)
            setuser(promise.data);
        } catch {
            alert('Signature error');
        }
    };

    useScript("https://accounts.google.com/gsi/client", () => {
        window.google.accounts.id.initialize({
            client_id: "403689974756-a8q3tavnsnd4d1obdehoih39o2gte9cc.apps.googleusercontent.com",
            callback: onGoogleSignIn,
            auto_select: false,
        });

        window.google.accounts.id.renderButton(googlebuttonref.current, {
            size: "large",
        });
    });

    return (
        <LoginStyled>
            <GlobalCss login />
            <div>
                <img src={logoImg} alt="Logo" />
            </div>
            <div ref={googlebuttonref}></div>
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