import React from "react";
import { NavLink } from 'react-router-dom'

import { ReactComponent as Home } from '../assets/icons/logo.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Favorite } from '../assets/icons/favorite.svg';
import { ReactComponent as Cart } from '../assets/icons/cart.svg';

function Footer() {
    return (
        <footer className="foo" role="contentinfo">
            <NavLink className="foo__link" exact to={`/`}>
                <Home className="foo__img" />
                <h6 className="foo__title">Inicio</h6>
            </NavLink>
            <NavLink className="foo__link" to={`/search`}>
                <Search className="foo__img" />
                <h6 className="foo__title">Búsqueda</h6>
            </NavLink>
            <NavLink className="foo__link" to={`/favorites`}>
                <Favorite className="foo__img" />
                <h6 className="foo__title">Favoritos</h6>
            </NavLink>
            <NavLink className="foo__link" to={`/cart`}>
                <Cart className="foo__img" />
                <h6 className="foo__title">Compra</h6>
            </NavLink>
        </footer>
    )
}

export default Footer;
