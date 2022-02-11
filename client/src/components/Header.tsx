import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <div className="header-container">
                <nav onClick={() => navigate("/")}>홈으로!</nav>
                <div className="menu-container">
                    <nav onClick={() => navigate("/coding")}>코딩</nav>
                    <nav>일상</nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
