import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Card from "../components/card"

const HeadingWrapper = styled.header`
  margin-bottom: var(--space-l);
  display: flex;
  justify-content: space-between;
`

const H2 = styled.h2`
  margin-bottom: 0;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--color-brand-primary-dark);
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  transition: all var(--transition-duration-normal)
    var(--animation-type-cubic-fast);
  align-items: center;
  &:hover {
    color: var(--color-brand-primary-medium);
  }
  &:hover svg {
    color: var(--color-brand-primary-medium);
    transform: translateX(0.25rem);
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Recetas" />
    <HeadingWrapper>
      <H2>Recetas</H2>
      <StyledLink to="/recetas">
        Ver todas{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </StyledLink>
    </HeadingWrapper>
    <Grid>
      {data.allMarkdownRemark.edges.slice(0, 3).map(({ node }) => (
        <Card
          to={node.fields.slug}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
        />
      ))}
    </Grid>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
          }
        }
      }
    }
  }
`
