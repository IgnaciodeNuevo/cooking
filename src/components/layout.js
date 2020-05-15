import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Menu from "./menu"
import "./layout.css"

const Main = styled.main`
    color: var(--color-base-lightest);
    margin: 0 auto;
    maxWidth: var(--component-max-with);
    padding: var(--space-xl) var(--space-l);
`

const HeadingWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--margin-bottom-h2);
`

const H2 = styled.h2`
    margin-bottom: 0;
`

const RouteLink = styled.a`
    color: var(--color-brand-base);
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--space-m);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          twitter
          github
          web
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>
        <HeadingWrapper>
            <H2>Recetas</H2>
            <RouteLink href="">Ver todas <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></RouteLink>
        </HeadingWrapper>
        <Grid>{children}</Grid>
      </Main>
      <Menu />
      <Footer
        author={data.site.siteMetadata.author}
        twitter={data.site.siteMetadata.twitter}
        github={data.site.siteMetadata.github}
        web={data.site.siteMetadata.web}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
