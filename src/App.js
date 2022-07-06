import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import NotFound from "./components/NotFound";

import ResetCss from "./styles/ResetCss";
import GlobalCss from "./styles/GlobalCss";

export default function App() {
    return (
        <BrowserRouter>
            <ResetCss />
            <GlobalCss />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}