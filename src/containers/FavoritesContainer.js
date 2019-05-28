import React, { Component, Fragment } from 'react';

class FavoritesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <main className="content" role="main">
                    Favorites
                </main>
            </Fragment>
        );
    }
}

export default FavoritesContainer;

