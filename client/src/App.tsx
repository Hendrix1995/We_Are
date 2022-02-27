import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import dummyData from "../src/static/dummyData";

// views
import Home from "./views/Home";
import Coding from "./views/Coding";
import Post from "./views/Post";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [clickedPost, setClickedPost] = useState({});

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div id="wrapper">
                    <Routes>
                        <Route path="/" element={<Home dummyData={dummyData} />} />
                        <Route path="/coding" element={<Coding dummyData={dummyData} />} />
                        <Route path="/postid=:no" element={<Post clickedPost={clickedPost} />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
