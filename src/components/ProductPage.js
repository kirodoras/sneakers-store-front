import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { IoCart } from "react-icons/io5";

export default function ProductPage() {
    const { idProduct } = useParams();

    return (
        <ProductPageStyled>
            <div className="product-img">
                <img src="https://i.pinimg.com/564x/c0/d1/cd/c0d1cd569e47a6d7207380d187a06f4c.jpg" alt="Tenis art" />
            </div>
            <div className="product-info">
                <span className="tittle">Nike Air Max</span>
                <span className="subtittle">Men's Tennis Shoe</span>
                <span className="description">
                    The Air Force 1 Mid '07 is everything you know well: flawless overlays, bold details and the perfect amount of shine to make you stand out.
                </span>
                <span className="price">$90</span>
                <span className="cart-button">
                    <IoCart />
                </span>
            </div>
        </ProductPageStyled>
    );
}

const ProductPageStyled = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .product-img {
        width: 100%;
        height: 50%;
    }   

    .product-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-bottom-right-radius: 2em 1.5em;
        border-bottom-left-radius:  2em 1.5em;
    }

    .product-info {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 49%;
        padding: 1.2rem 1.2rem;
        position: relative;
    }

    .tittle {
        color: #0A0B0D;
        font-size: 2.2rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
    }

    .subtittle {
        color: #7D7E80;
        font-size: 1.2rem;
        font-weight: 300;
        margin-bottom: 2rem;
    }

    .description {
        font-size: 1.6rem;
        text-align: justify;
        text-justify: inter-character;
        white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #080A0B;
    }

    .price {
        color: #293141;
        font-weight: 700;
        font-size: 2.7rem;
        position: absolute;
        bottom: 1.7rem; 
        left: 1.6rem; 
    }

    .cart-button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4.3rem;
        height: 4.3rem;
        border-radius: 50%;
        position: absolute;
        bottom: 1rem; 
        right: 1.2rem; 
        border: 0.07rem solid #D0D0D0;

        svg {
            font-size: 2rem;
            color: #293141;
        }
    }
`;