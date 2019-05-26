import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header" role="banner">
            <Link className="header__link" to={`/`}>
                Home
            </Link>
        </header>
    )
}

export default Header;
