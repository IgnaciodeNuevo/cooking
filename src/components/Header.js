import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../assets/icons/logo.svg';


function Header() {
    return (
        <header className="header" role="banner">
            <Link className="header__link" to={`/`}>
                <Logo className="header__img" />
                <h1 className="playfair">Cooking</h1>
            </Link>
        </header>
    )
}

export default Header;
