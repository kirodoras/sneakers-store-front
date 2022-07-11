import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { WaitLoading } from "./shared/WaitLoading";

export default function ProductPage() {
    const navigate = useNavigate();
    const { idProduct } = useParams();
    const [product, setProduct] = useState('');

    useEffect(() => {
        if (idProduct) {
            const URL = `https://sneakers-store-back.herokuapp.com/product`;
            const promise = axios.post(URL, {
                _id: idProduct
            })
            promise.then((response) => {
                setProduct(response.data);
                console.log(response.data);
            }).catch((err) => {
                navigate("/");
                alert('Erro em buscar produto');
            });
        } else {
            navigate("/");
        }
    }, [idProduct, setProduct, navigate]);

    return (
        <>
            {product ? <Product product={product}></Product> : <WaitLoading />}
        </>
    );
}

function Product({ product }) {
    const [amount, setAmount] = useState(1);

    function saveProduct() {
        sendToStorage(product._id);
    }

    function sendToStorage(id) {
        let cart = [];

        if (localStorage.getItem("cart") !== null) {
            let att = false;
            cart = JSON.parse(localStorage.getItem("cart"));
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === id) {
                    cart[i].amount += amount;
                    att = true;
                }
            }
            if (!att) {
                cart.push({
                    id,
                    amount: amount
                });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            cart.push({
                id,
                amount: amount
            });
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }

    function increment() {
        if (amount < 10) {
            setAmount(amount + 1);
        }
    }

    function decrement() {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    }

    return (
        <ProductPageStyled>
            <div className="product-img">
                <img src={product.img} alt="Tenis art" />
            </div>
            <div className="product-info">
                <span className="tittle">{product.tittle}</span>
                <span className="subtittle">{product.subtitle}</span>
                <span className="description">
                    {product.description}
                </span>
                <span className="price">${product.price}</span>
                <span className="cart-button" onClick={saveProduct}>
                    <IoCart />
                </span>
                <Counter amount={amount} increment={increment} decrement={decrement} />
            </div>
        </ProductPageStyled>
    );
}

function Counter({ amount, increment, decrement }) {
    return (
        <CounterStyled>
            <button className="plus" onClick={increment}>
                +
            </button>
            <div className="value">
                {amount}
            </div>
            <button className="minus" onClick={decrement}>
                -
            </button>
        </CounterStyled>
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
        transition:all 0.3s ease-in;
        svg {
            font-size: 2rem;
            color: #293141;
        }
    }

    .cart-button:active {
        transform:rotate(360deg);
        border: 0.4rem solid #D0D0D0;
    }
`;

const CounterStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    bottom: 1.6rem; 
    right: 6.3rem; 
    .plus {
        background-color: #28a745;
    }
    .minus {
        background-color: #dc3545;
    }
    .plus, .minus {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: none;
        color: white;
        font-size: 1.5rem;
    }

    .value {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        font-size: 2.2rem;
        font-weight: 500;
    }

    .cell *:active {
        filter: brightness(1.2);
    }
`;