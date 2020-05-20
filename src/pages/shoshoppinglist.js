import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--color-brand-primary-dark);
  text-decoration: none;

  &:hover {
    color: var(--color-brand-primary-medium);
  }
`

const ShoshoppingList = () => (
  <Layout>
    <SEO title="Cesta de la compra" />
    <h2>Cesta de la compra</h2>
    <StyledLink to="/">Ir a la página de inicio</StyledLink>
  </Layout>
)

export default ShoshoppingList
