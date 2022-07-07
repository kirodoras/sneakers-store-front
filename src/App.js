import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import UserContext from "./contexts/UserContext";

import ResetCss from "./styles/ResetCss";
import GlobalCss from "./styles/GlobalCss";

export default function App() {
    const [user, setUser] = useState('');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <ResetCss />
                <GlobalCss />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}