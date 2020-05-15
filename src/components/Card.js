import React from "react"
import styled from "styled-components"

const CardWrapper = styled.article`
    overflow: hidden;
    border-radius: 6px;
    box-shadow: var(--box-shadow-base);
    transition: all var(--transition-duration-normal) var(--animation-type-cubic-fast);
    position: relative;
    padding: var(--space-m);

    &:hover {
        box-shadow: var(--box-shadow-hover);
        transform: translateY(-0.25rem);
        cursor: pointer;
    }
`

const Card = () => (
  <CardWrapper>
    <p>April 9, 2020</p>
    <h3>Pasta de huevo con salsa de tomate caseros</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non, quasi atque repudiandae, ratione maiores iure suscipit accusantium asperiores porro fugit! Ipsum aut expedita, cum perspiciatis pariatur deserunt facilis velit.</p>
  </CardWrapper>
)

export default Card
