import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Menu from "./menu"
import "./layout.css"

const Main = styled.main`
    margin: 0 auto;
    maxWidth: var(--component-max-with);
    padding: var(--space-m);
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
        {children}
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
