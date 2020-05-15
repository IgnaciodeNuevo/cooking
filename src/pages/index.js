import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const HeadingWrapper = styled.header`
    margin-bottom: var(--space-l);
    display: flex;
    justify-content: space-between;
`

const H2 = styled.h2`
    margin-bottom: 0;
`

const StyledLink = styled(props => <Link {...props} />)`
    color: var(--color-brand-base);
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    transition: all var(--transition-duration-normal) var(--animation-type-cubic-fast);
    align-items: center;
    &:hover {
        color: var(--color-brand-hover);
    }
    &:hover svg {
        color: var(--color-brand-hover);
        transform: translateX(0.25rem);
    }
`;

// grid-template-columns
//  uses 320px (which is the minimum devide width the web supports)
//  minus --space-l * 2 used as padding-left and padding-right
const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(320px - (var(--space-l) * 2)), 1fr));
    grid-gap: var(--space-l);
`

const IndexPage = () => (
  <Layout>
    <SEO title="Recetas" />
    <HeadingWrapper>
        <H2>Recetas</H2>
        <StyledLink to="/">Ver todas <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></StyledLink>
    </HeadingWrapper>
    <Grid>
        <Card />
        <Card />
        <Card />
    </Grid>
  </Layout>
)

export default IndexPage
