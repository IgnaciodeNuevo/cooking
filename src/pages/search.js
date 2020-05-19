import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--color-brand-base);
  text-decoration: none;

  &:hover {
    color: var(--color-brand-hover);
  }
`

const Search = () => (
  <Layout>
    <SEO title="Búsqueda" />
    <h2>Búsqueda</h2>
    <StyledLink to="/">Ir a la página de inicio</StyledLink>
  </Layout>
)

export default Search
