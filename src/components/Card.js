import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            iObserver: null
        };
    }

    componentDidMount() {
        this.gridElement = document.querySelector('.grid');

        const options = {
            threshold: 0.01
        }

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.backgroundImage = entry.target.getAttribute('data-url');
                    this.state.iObserver.unobserve(entry.target);
                }
            });
        };

        let observer = new IntersectionObserver(callback, options);
        this.setState({ iObserver: observer });
    }

    componentDidUpdate() {
        // Could use React.Refs
        // Documentation: https://reactjs.org/docs/refs-and-the-dom.html
        if (this.gridElement == null) {
            return;
        }

        const elements = this.gridElement.querySelectorAll('[data-url]');
        if (this.state.iObserver) {
            elements.forEach(element => {
                this.state.iObserver.observe(element);
            })
        }
    }

    componentWillUnmount() {
        this.state.iObserver.disconnect();
    }

    render() {
        if (this.props.recipes && this.props.recipes.length) {
            return (
                <Fragment>
                    {this.props.recipes.map((recipe, index) => (
                        <Link className="card" key={index} to={`/recipe/${recipe.id}/`}>
                            <article className="card__link" data-url={`url(/assets/img/${recipe.id}-${recipe.short}_a.jpg)`}>
                                <span className="u-visually-hidden">{recipe.name}'s link to detail.</span>
                            </article>
                            <h2 className="card__title">{recipe.name}</h2>
                        </Link>
                    ))}
                </Fragment>
            );
        }

        return (
            <article className="card">
                <h2 className="card__title">Loading...</h2>
            </article>
        );
    }
}

export default Card;
