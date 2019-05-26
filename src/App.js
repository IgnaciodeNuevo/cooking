import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomeContainer } from './containers/index'
import { Header, Footer } from './components/index';

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Route path="/" exact component={HomeContainer} />
                <Footer />
            </Router>
        );
    }
}

export default App;
