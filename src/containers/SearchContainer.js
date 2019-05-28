import React, { Component, Fragment } from 'react';

class SearchContainer extends Component {
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
                    Search
                </main>
            </Fragment>
        );
    }
}

export default SearchContainer;

