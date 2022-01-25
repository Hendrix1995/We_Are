import React from "react";

function Header() {
    return (
        <header>
            <div className="header-container">
                <nav>홈으로!</nav>
                <div className="menu-container">
                    <nav>코딩</nav>
                    <nav>일상</nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
