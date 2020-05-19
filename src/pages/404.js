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

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>No se encuentra lo que buscabas.</h2>
    <StyledLink to="/">Ir a la página de inicio</StyledLink>
  </Layout>
)

export default NotFoundPage
