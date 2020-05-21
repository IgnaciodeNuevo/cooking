import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const PageMenu = styled.aside`
  background: var(--color-brand-primary-dark);
  color: var(--color-base-lightest);
`

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--color-base-lightest);
  text-decoration: none;
  display: block;
  margin-bottom: var(--space-m);
  font-weight: 800;
  font-feature-settings: "c2sc", "smcp";
  font-variant-caps: opentype-all-opentype-small-caps;

  @media (min-width: 33.75em) {
    display: inline;
  }

  &:hover {
    color: var(--color-base-lightest);
    text-decoration: underline;
  }

  &:not(:last-of-type) {
    margin-right: var(--space-m);
  }
`

const Aside = () => (
  <PageMenu>
    <StyledLink to="/">Inicio</StyledLink>
    {/* @TODO: Quitar comentario
    <StyledLink to="/search">Buscar</StyledLink>
    <StyledLink to="/favorites">Favoritos</StyledLink>
    <StyledLink to="/shoshoppinglist">Compra</StyledLink>
    <StyledLink to="/shops">Tiendas</StyledLink> */}
    <StyledLink to="/about">Sobre Cookit</StyledLink>
  </PageMenu>
)

export default Aside
