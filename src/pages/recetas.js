import {graphql, Link} from 'gatsby';
import React from 'react';
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const H2 = styled.h2`
    margin-bottom: var(--space-l);
`

const CardWrapper = styled.article`
    background-color: var(--color-base-dark);
    overflow: hidden;
    border-radius: 6px;
    box-shadow: var(--box-shadow-base);
    transition: all var(--transition-duration-normal) var(--animation-type-cubic-fast);
    position: relative;

    &:hover {
        box-shadow: var(--box-shadow-hover);
        transform: translateY(-0.5rem);
        cursor: pointer;
    }
`

const StyledLink = styled(props => <Link {...props} />)`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const ContentWrapper = styled.p`
    padding: var(--space-m);
`

const Date = styled.p`
    color: var(--color-text);
    font-feature-settings: "c2sc","smcp";
    font-variant-caps: opentype-all-opentype-small-caps;
    letter-spacing: var(--letter-spacing-m);
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
            <CardWrapper>
            <StyledLink to={node.frontmatter.slug} />
                <Image />
                <ContentWrapper>
                    <Date>April 9, 2020</Date>
                    <h3>{node.frontmatter.title}</h3>
                    <p>{node.excerpt}</p>
                </ContentWrapper>
            </CardWrapper>
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
