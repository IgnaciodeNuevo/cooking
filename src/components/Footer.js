import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Menu from "./menu"
import Contact from "./contact"

const PageFooter = styled.footer`
  background: var(--color-brand-primary-dark);
  color: var(--color-base-lightest);
  padding: var(--space-l);

  @media (min-width: 80em) {
    display: flex;
  }
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

  @media (min-width: 80em) {
    padding-top: 0;
    padding-right: 0;
    padding-bottom: var(--space-l);
    padding-left: var(--space-xl);
  }
`

const InfoWrapper = styled.div`
  margin: 0 auto;
  max-width: var(--component-max-with);
  padding: 0 var(--space-l) var(--space-xl);

  @media (min-width: 80em) {
      padding-top: 0;
      padding-right: 0;
      padding-bottom: 0;
      padding-left: var(--space-xl);
  }
`

const H2 = styled.h2`
  margin-bottom: 0;
  color: var(--color-base-lightest);
  padding-top: var(--space-xl);
  padding-left: var(--space-l);

  @media (min-width: 80em) {
    padding-top: var(--space-l);
    padding-left: var(--space-xl);
  }
`

const Footer = ({ author, twitter, github, web }) => (
  <PageFooter>
    <Contact />
    <div>
        <H2>Info</H2>
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
    </div>
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
