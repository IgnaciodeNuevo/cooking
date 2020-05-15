import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Wrapper from "./wrapper"

const PageMenu = styled.aside`
    background: var( --color-brand-base);
    color: var(--color-base-lightest);
`

const StyledLink = styled(props => <Link {...props} />)`
    color: var(--color-base-lightest);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &:not(:last-of-type) {
        margin-right: var(--space-m);
    }
`;

const Aside = () => (
  <PageMenu>
    <Wrapper>
        <StyledLink to="/">Inicio</StyledLink>
        <StyledLink to="/search">Buscar</StyledLink>
        <StyledLink to="/favorites">Favoritos</StyledLink>
        <StyledLink to="/shoshoppinglist">Compra</StyledLink>
        <StyledLink to="/shops">Tiendas</StyledLink>
    </Wrapper>
  </PageMenu>
)


export default Aside
