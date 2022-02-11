import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

// views
import Home from "./views/Home";
import Coding from "./views/Coding";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coding" element={<Coding />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
