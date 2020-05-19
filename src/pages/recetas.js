import {graphql, Link} from 'gatsby';
import React from 'react';
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const H2 = styled.h2`
    margin-bottom: var(--space-l);
`

const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(320px - (var(--space-l) * 2)), 1fr));
    grid-gap: var(--space-l);
`

export default ({data}) => (
  <Layout>
    <SEO title="Recetas" />
    <H2>Recetas</H2>
    <Grid>
        {data.allMarkdownRemark.edges.map(({node}) => (
            <Card
                to={node.frontmatter.slug}
                title={node.frontmatter.title}
                excerpt={node.excerpt}
            />
        ))}
    </Grid>
  </Layout>
);

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
        excerpt
        frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;
