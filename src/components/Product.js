import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const Product = ({ info, index }) => {
    return (
        <Styles>
            <Link to={`/product/${index}`}>
                <img src={ info.img } alt={`Product ${index}`} />
                <h3>{ info.tittle }</h3>
                <span>{ info.subtitle }</span>
            </Link>
        </Styles>
    )
}

export default Product;

const Styles = Styled.div`
    display: flex;
    justify-content: center;
    width: 9rem;
    margin: 0 0.1rem;
    margin-bottom: 1.1rem;
    background: #FFF;
    border-radius: 1rem;
    box-shadow: 0.7rem 0.2rem 1rem 0 rgba(0,0,0,0.1);
    padding-bottom: 0.3rem;
    img {
        height: 7rem;
        width: 9rem;
        border-radius: 0.6rem;
        object-fit: cover;
    }

    h3 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #0C0C0C;
    }

    span {
        font-size: 0.8rem;
        color: #818181;
    }
`; 