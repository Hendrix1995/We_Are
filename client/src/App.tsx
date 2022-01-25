import React from "react";
import "./styles/App.css";

// views
import Home from "./views/Home";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
