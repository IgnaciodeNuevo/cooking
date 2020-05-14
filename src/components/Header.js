import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const PageHeader = styled.header`
  background: var( --color-brand-base);
  color: var(--color-base-lightest);
  marginBottom: var(--space-m);
`

const H1 = styled.h1`
  padding: var(--space-l);
`

const Header = ({ siteTitle }) => (
  <PageHeader>
      <H1>
        <Link to="/" style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </H1>
  </PageHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
