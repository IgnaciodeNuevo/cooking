import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomeContainer, FavoritesContainer, SearchContainer, ShoppingCartContainer, ShopsContainer } from './containers/index'
import { Header, About, Footer } from './components/index';

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Route path="/" exact component={HomeContainer} />
                <Route path="/search" component={SearchContainer} />
                <Route path="/favorites" component={FavoritesContainer} />
                <Route path="/cart" component={ShoppingCartContainer} />
                <Route path="/shops" component={ShopsContainer} />
                <Route path="/about" component={About} />
                <Footer />
            </Router>
        );
    }
}

export default App;
