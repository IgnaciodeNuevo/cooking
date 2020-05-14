import React from "react"
import styled from "styled-components"

const CardWrapper = styled.article`
    overflow: hidden;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 5px 10px;
    transition: all 0.2s cubic-bezier(0.2, 0.91, 0.85, 0.96) 0s;
    position: relative;
    padding: var(--space-m);

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 10px 20px;
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
