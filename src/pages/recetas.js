import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Card from "../components/card"

const H2 = styled.h2`
  margin-bottom: var(--space-l);
`

export default ({ data }) => (
  <Layout>
    <SEO title="Recetas" />
    <H2>Recetas</H2>
    <Grid>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Card
          to={node.fields.slug}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
        />
      ))}
    </Grid>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields{
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
