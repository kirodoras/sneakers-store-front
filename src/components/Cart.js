import { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import defaultUser from '../assets/defaultUser.png';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { IoArrowUndoSharp } from "react-icons/io5";
import axios from "axios";

export default function Cart() {
    const { user } = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [att, setAtt] = useState(false);
    useEffect(() => {
        getStorage();
    }, [att, setAtt]);

    function getStorage() {
        let cart = [];
        if (localStorage.getItem("cart") !== null) {
            cart = JSON.parse(localStorage.getItem("cart"));
            setProducts(cart);
        }
    }

    const sendOrder = async () => {
        if (products.length === 0) {
            alert("Your order cannot be empty!");
            return;
        }
        window.localStorage.clear();
        alert("Your order was sucessfully registered");
        window.location.reload();
        
    }

    return (
        <CartStyled>
            <CartHeaderStyled>
                <div>
                    <img src={user ? user.picture : defaultUser} alt="Avatar" />
                    <span>{user ? user.name : 'Hey there'}</span>
                </div>
                <Link to="/">
                    <IoArrowUndoSharp />
                </Link>
            </CartHeaderStyled>
            <Products products={products} att={() => setAtt(!att)} />
            <button onClick={sendOrder}>
                Place order
            </button>
        </CartStyled>
    );
}

function Products({ products, att }) {
    return (
        <ProductsStyled>
            {products.map((value) =>
                <Product
                    key={value.id}
                    id={value.id}
                    amount={value.amount}
                    att={att} />)}
        </ProductsStyled>
    );
}

function Product({ id, amount, att }) {
    const [qtd, setQtd] = useState(amount);
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        const URL = `https://sneakers-store-back.herokuapp.com/product`;
        const promise = axios.post(URL, {
            _id: id
        })

        promise.then((response) => {
            console.log(response.data);
            setProductInfo(response.data);
        }).catch((err) => {
        });
    }, [id]);

    function increment() {
        let cart = [];
        if (localStorage.getItem("cart") !== null) {
            cart = JSON.parse(localStorage.getItem("cart"));
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === id) {
                    cart[i].amount += 1;
                    setQtd(qtd + 1);
                }
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }

    function decrement() {
        let cart = [];
        if (localStorage.getItem("cart") !== null) {
            cart = JSON.parse(localStorage.getItem("cart"));
            if (qtd <= 1) {
                let newcart = cart.filter((value) => value.amount !== qtd && value.id !== id);
                localStorage.setItem("cart", JSON.stringify(newcart));
                att();
            } else {
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].id === id) {
                        cart[i].amount -= 1;
                        setQtd(qtd - 1);
                    }
                }
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        }
    }

    return (
        <ProductStyled>
            <div>
                <img src={productInfo.img} alt="Tenis Art" />
                <span>{productInfo.tittle}</span>
                <span>${productInfo.price}</span>
            </div>
            <Counter amount={qtd} increment={increment} decrement={decrement} />
        </ProductStyled>
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

const CounterStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
    bottom: 0.3rem; 
    right: 0.5rem; 
    position: absolute;
    font-size: 1.1rem;
    font-weight: 500;
    .plus {
        background-color: #28a745;
    }
    .minus {
        background-color: #dc3545;
    }
    .plus, .minus {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        border: none;
        color: white;
        font-size: 1.5rem;
    }

    .value {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.8rem;
        height: 1.8rem;
        font-size: 2.2rem;
        font-weight: 500;
    }

    .cell *:active {
        filter: brightness(1.2);
    }
`;

const CartStyled = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &>button {
        padding: 2rem;
        position: absolute;
        bottom: 2rem;
        border-radius: 1rem 0;
        font-size: 1.4rem;
        box-shadow: 0.7rem 0.2rem 1rem 0 rgba(0,0,0,0.1);
    }
`;

const CartHeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 8rem;
    background-color: #252e3d;
    padding: 1.1rem;

    div {
        display: flex;
        align-items: center;
    }

    div>img {
        width: 3.2rem;
        border-radius: 50%;
        background-color: #FBFBFD;
    }

    div>span {
        margin-left: 1rem;
        font-size: 1.2rem;
        font-weight: 300;
        color: #FBFBFD;
    }

    a {
        svg {
            font-size: 2.5rem;
            color: #FBFBFD;
        }
    }
`;

const ProductsStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: 70%;
    overflow: auto;
    padding: 1.2rem;
    position: relative;
`;

const ProductStyled = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    min-height: 6rem;
    background-color: #FBFBFD;
    overflow: auto;
    margin-bottom: 2rem;
    border-radius: 1rem 0;
    box-shadow: 0.7rem 0.2rem 1rem 0 rgba(0,0,0,0.1);
    position: relative;

    div:nth-child(1){
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }

    div:nth-child(1)>img{
        width: 5rem;
        height: 6rem;
        object-fit: cover;
        border-radius: 1rem 0;
    }

    div:nth-child(1)>span {
        font-size: 1.3rem;
        font-weight: 500;
    }
`;