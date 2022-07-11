import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

import UserContext from "./contexts/UserContext";

import ResetCss from "./styles/ResetCss";
import GlobalCss from "./styles/GlobalCss";

// import guest from './assets/guest1.png'
export default function App() {
    const [user, setUser] = useState({ name: 'Guest', picture: "guest" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <ResetCss />
                <GlobalCss />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:idProduct" element={<ProductPage />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}