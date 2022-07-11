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
    width: 6rem;
    margin: 0 2rem;

    img {
        height: 6rem;
        width: 6rem;
        border-radius: 0.6rem;
    }

    h3 {
        font-size: 1rem;
        font-weight: 700;
        color: #0C0C0C;
    }

    span {
        font-size: 0.55rem;
        color: #818181;
    }
`; 