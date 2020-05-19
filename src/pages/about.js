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
`;

const Favorites = () => (
  <Layout>
    <SEO title="Sobre Cookit" />
    <h2>Sobre Cookit</h2>
    <StyledLink to="/">Ir a la página de inicio</StyledLink>
  </Layout>
)

export default Favorites
