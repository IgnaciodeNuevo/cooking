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

const Success = () => (
  <Layout>
    <SEO title="Formulario enviado correctamente" />
    <h2>Formulario enviado correctamente</h2>
    <p>Me pondré en contacto contigo en cuanto me sea posible.</p>
    <StyledLink to="/">Ir a la página de inicio</StyledLink>
  </Layout>
)

export default Success
