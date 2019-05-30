import React, { Component, Fragment } from 'react';

class ShopsContainer extends Component {
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
                    Shops
                </main>
            </Fragment>
        );
    }
}

export default ShopsContainer;

