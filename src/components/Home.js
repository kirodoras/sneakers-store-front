import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";

export default function Home() {
    const { user } = useContext(UserContext);
    
    return (
        <>
            <h1>Home</h1>
            <span>{user && user.name}</span>
            <img src={user &&  user.picture} alt="Avatar" />
            <span>{user && user.token}</span>
            <Link to="/login">Login</Link>
            <Link to="/cart">Cart</Link>
        </>
    );
}