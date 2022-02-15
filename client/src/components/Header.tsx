import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <div className="header-container">
                <nav onClick={() => navigate("/")}>We_Are!</nav>
                <div className="menu-container">
                    <nav onClick={() => navigate("/coding")}>Coding</nav>
                    <nav>Life</nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
