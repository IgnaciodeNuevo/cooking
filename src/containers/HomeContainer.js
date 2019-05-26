import React, { Component, Fragment } from 'react';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        // Api fetch mock
        const apiUrl = 'http://localhost:3000/api/recipes.json';

        fetch(apiUrl).then(function (response) {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        }).then(data => this.setState({ recipes: data.recipes }));
    }

    render() {
        return (
            <Fragment>
                <h1 className="heading">Home</h1>
                <main className="content" role="main">
                    <section className="grid">
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default HomeContainer;

