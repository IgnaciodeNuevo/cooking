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

const Date = styled.p`
    color: var(--color-text);
    font-feature-settings: "c2sc","smcp";
    font-variant-caps: opentype-all-opentype-small-caps;
    letter-spacing: var(--letter-spacing-m);
`

const ContentWrapper = styled.p`
    padding: var(--space-m);
`

const Card = ({to, title, excerpt}) => (
    <CardWrapper>
        <StyledLink to={to} />
        <Image />
        <ContentWrapper>
            <Date>April 9, 2020</Date>
            <h3>{title}</h3>
            <p>{excerpt}</p>
        </ContentWrapper>
    </CardWrapper>
)

export default Card


