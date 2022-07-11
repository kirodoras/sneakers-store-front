import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import axios from "axios";
import { IoCart } from "react-icons/io5";

import defaultUser from '../assets/defaultUser.png';
import Header from "./Header";
import Products from "./Products";
import Product from "./Product";


const Home = () => {
    // Variables
    const { user } = useContext(UserContext);
    const [products, setProducts] = useState([]);
    
    // Logic
    useEffect(async () => {
        const API = "https://sneakers-store-back.herokuapp.com";

        try {
            const response = await axios.get(`${API}/products`);
            setProducts(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
        
        
    }, [])

    const buildName = fullName => {
        const nameArr = fullName.split(" ");
        const size = nameArr.length;
        const name = (size === 1) ? nameArr[0] : `${nameArr[0]} ${nameArr[size - 1]}` 
        return name;
    }

    
    return (
        <Styles>
            <Header>
                <div className="user">
                    <img src={ user ? user.picture : defaultUser} alt="Avatar" />
                    <span>{ user ? buildName(user.name) : "Hey there"}</span>
                </div>
                <div className="buttons">    
                    <Link to="/login" ><span>Login</span></Link>
                    <Link to="/cart" ><IoCart /></Link>
                </div>
            </Header>
            <Space />
            <h2>Products</h2>
            <Products>
                {products.length ? products.map( (p, i) => 
                    <Product key={i} info={p} index={p._id} />
                ) : <></>}

            </Products>
        </Styles>
    );
}

export default Home;

const Styles = Styled.div`
    display: flex:
    flex-direction: column;
    width: inherit;
    max-width: 100%;
    h2 {
        font-size: 1.8rem;
        font-weight: 700;
        margin: 0 0 1.5rem 1.5rem;
    }
`;

const Space = Styled.div`
    margin-top: 2rem;
`;
