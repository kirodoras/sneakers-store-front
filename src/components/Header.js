import Styled from "styled-components"

const Header = props => {
    return (
        <Styles>
            { props.children }
        </Styles>
    )
}

const Styles = Styled.div`
    width: 100%;
    max-width: 100%;
    height: 8rem;

    background-color: #252E3D;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem;

    img {
        color: white;
        width: 3.2rem;
        border-radius: 50%;
    }

    a {
        color: white;
        margin-left: 2rem;
    }

    span {
        display: flex;
        align-items: center;
        
        color: white;
        font-size: 1.2rem;
        font-weight: 300;
        color: #FBFBFD;
    }

    .user {
        display: flex;
        gap: 1rem;
        img {
            margin-right: 0.3rem;
        }
    }

    .buttons {
        display: flex;
        align-items: center;        
    }
    
    svg {
        margin-top: 0.3rem;
        font-size: 2.5rem;
    }
`;

export default Header;