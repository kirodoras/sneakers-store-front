import Styled from "styled-components"

const Header = props => {
    return (
        <Styles>
            { props.children }
        </Styles>
    )
}

const Styles = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;

    background-color: #252E3D;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.4rem;

    img {
        color: white;
        width: 2rem;
        border-radius: 20px;
    }

    a {
        color: white;
    }

    span {
        display: flex;
        align-items: center;
        
        color: white;
        font-size: 0.9rem;
    }

    .user {
        display: flex;
        img {
            margin-right: 0.3rem;
        }
    }

    .buttons {
        display: flex;
        align-items: center;        
    }
    
    ion-icon {
        margin-top: 0.3rem;
        font-size: 1.7rem;
    }
`;

export default Header;