import React from "react"
import styled from "styled-components"

const CardWrapper = styled.article`
    background-color: var(--color-base-dark);
    overflow: hidden;
    border-radius: 6px;
    box-shadow: var(--box-shadow-base);
    transition: all var(--transition-duration-normal) var(--animation-type-cubic-fast);
    position: relative;
    padding: var(--space-m);

    &:hover {
        box-shadow: var(--box-shadow-hover);
        transform: translateY(-0.5rem);
        cursor: pointer;
    }
`

const Date = styled.p`
    color: var(--color-text);
    font-feature-settings: "c2sc","smcp";
    font-variant-caps: opentype-all-opentype-small-caps;
    letter-spacing: var(--letter-spacing-m);
`

const Card = () => (
  <CardWrapper>
    <Date>April 9, 2020</Date>
    <h3>Pasta de huevo con salsa de tomate caseros</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non, quasi atque repudiandae, ratione maiores iure suscipit accusantium asperiores porro fugit! Ipsum aut expedita, cum perspiciatis pariatur deserunt facilis velit.</p>
  </CardWrapper>
)

export default Card
