import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Wrapper from "./wrapper"

import "./layout.css"

const Main = styled.main`
  background-color: #fff;
  color: var(--color-base-dark);
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
        <Wrapper>
          <section>{children}</section>
        </Wrapper>
      </Main>
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
