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

const Favorites = () => (
  <Layout>
    <SEO title="Favoritos" />
    <h2>Favoritos</h2>
    <StyledLink to="/">Ir a la página de inicio</StyledLink>
  </Layout>
)

export default Favorites
