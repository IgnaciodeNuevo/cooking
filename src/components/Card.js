import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Image from "../components/image"

const CardWrapper = styled.article`
    background-color: var(--color-base-dark);
    overflow: hidden;
    border-radius: 6px;
    box-shadow: var(--box-shadow-base);
    transition: all var(--transition-duration-normal) var(--animation-type-cubic-fast);
    position: relative;

    &:hover {
        box-shadow: var(--box-shadow-hover);
        transform: translateY(-0.5rem);
        cursor: pointer;
    }
`

const StyledLink = styled(props => <Link {...props} />)`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const ContentWrapper = styled.p`
    padding: var(--space-m);
`

const Date = styled.p`
    color: var(--color-text);
    font-feature-settings: "c2sc","smcp";
    font-variant-caps: opentype-all-opentype-small-caps;
    letter-spacing: var(--letter-spacing-m);
`

const Card = () => (
  <CardWrapper>
    <StyledLink to="/recetatest" />
    <Image />
    <ContentWrapper>
        <Date>April 9, 2020</Date>
        <h3>Pasta de huevo con tomate</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non, quasi atque repudiandae.</p>
    </ContentWrapper>
  </CardWrapper>
)

export default Card
