import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Menu from "./menu"

const PageHeader = styled.header`
  background: var(--color-brand-primary-dark);
  color: var(--color-base-lightest);
`

const H1 = styled.h1`
  margin-bottom: var(--space-l);

  @media (min-width: 80em) {
    margin-bottom: 0;
  }
`

const Wrapper = styled.header`
  margin: 0 auto;
  max-width: var(--component-max-with);
  padding: var(--space-l);

  @media (min-width: 80em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--color-base-lightest);
  text-decoration: none;

  &:hover {
    color: var(--color-base-lightest);
    text-decoration: underline;
  }

  &:not(:last-of-type) {
    margin-right: var(--space-m);
  }
`

const Header = ({ siteTitle }) => (
  <PageHeader>
    <Wrapper>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
      <Menu />
    </Wrapper>
  </PageHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
