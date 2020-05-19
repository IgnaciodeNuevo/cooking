import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Menu from "./menu"

const PageFooter = styled.footer`
  background: var(--color-brand-base);
  color: var(--color-base-lightest);
`

const Paragraph = styled.p`
  color: var(--color-base-lightest);
`

const Link = styled.a`
  color: var(--color-base-lightest);
`

const MenuWrapper = styled.div`
  margin: 0 auto;
  max-width: var(--component-max-with);
  padding: var(--space-xl) var(--space-l) var(--space-l);
`

const InfoWrapper = styled.div`
  margin: 0 auto;
  max-width: var(--component-max-with);
  padding: var(--space-s) var(--space-l) var(--space-xl);
`

const Footer = ({ author, twitter, github, web }) => (
  <PageFooter>
    <MenuWrapper>
      <Menu />
    </MenuWrapper>
    <InfoWrapper>
      <Paragraph>
        ©{new Date().getFullYear()}. Creado por {author}
      </Paragraph>
      <Paragraph>
        Sígueme en{" "}
        <Link href={twitter} target="_blank" rel="noopener noreferrer me">
          Twitter
        </Link>
        ,{" "}
        <Link href={github} target="_blank" rel="noopener noreferrer me">
          GitHub
        </Link>{" "}
        o échale un vistazo a <Link href={web}>web</Link>.
      </Paragraph>
    </InfoWrapper>
  </PageFooter>
)

Footer.propTypes = {
  author: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
  web: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
