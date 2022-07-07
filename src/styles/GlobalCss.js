import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        width: 100vw;
        max-width: 100%;
        height: 100vh;
        background: ${(props) => props.login ? "#252E3D" : "#FBFBFD"};
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        font-family: 'Roboto', sans-serif;
    }

    .root {
        width: 26rem;
        max-width: 100%;
        height: 100%;
    }

    input, button {
        border: none;
    }

    a {
        text-decoration: none;
    }

    ion-icon {
        color: #F9F8D0;
        font-size: 34px;
    }
`;

export default GlobalCss;