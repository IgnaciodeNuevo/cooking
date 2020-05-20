import { useStaticQuery, graphql, Link } from "gatsby"
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

const SecondaryContent = styled.div`
  background-color: var(--color-base-lightest);
`

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
    text-decoration: underline;
  }

  &:hover svg {
    color: var(--color-brand-primary-medium);
    transform: translateX(0.25rem);
  }
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
        <SecondaryContent>
          <Wrapper>
            <HeadingWrapper>
              <H2>Title 2</H2>
              <StyledLink to="/">
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
            <section>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odio cupiditate quaerat sint recusandae magnam, voluptates
                commodi asperiores, nostrum voluptatibus placeat. Quia rerum
                similique quisquam reiciendis facere, recusandae dicta
                perspiciatis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odio cupiditate quaerat sint recusandae magnam, voluptates
                commodi asperiores, nostrum voluptatibus placeat. Quia rerum
                similique quisquam reiciendis facere, recusandae dicta
                perspiciatis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odio cupiditate quaerat sint recusandae magnam, voluptates
                commodi asperiores, nostrum voluptatibus placeat. Quia rerum
                similique quisquam reiciendis facere, recusandae dicta
                perspiciatis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odio cupiditate quaerat sint recusandae magnam, voluptates
                commodi asperiores, nostrum voluptatibus placeat. Quia rerum
                similique quisquam reiciendis facere, recusandae dicta
                perspiciatis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                odio cupiditate quaerat sint recusandae magnam, voluptates
                commodi asperiores, nostrum voluptatibus placeat. Quia rerum
                similique quisquam reiciendis facere, recusandae dicta
                perspiciatis?
              </p>
            </section>
          </Wrapper>
        </SecondaryContent>
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
