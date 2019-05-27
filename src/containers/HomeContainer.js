import React, { Component, Fragment } from 'react';

import { Card } from '../components/index'

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        // Api fetch mock
        const apiUrl = '/api/recipes.json';

        fetch(apiUrl).then(function (response) {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        }).then(data => this.setState({ recipes: data.recipes })).catch(function (error) {
            console.error(error);
        });
    }

    render() {
        return (
            <Fragment>
                <main className="content" role="main">
                    <section className="grid">
                        <Card recipes={this.state.recipes} />
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default HomeContainer;

