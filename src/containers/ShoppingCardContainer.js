import React, { Component, Fragment } from 'react';

class ShoppingCardContainer extends Component {
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
                    Shopping Card
                </main>
            </Fragment>
        );
    }
}

export default ShoppingCardContainer;
