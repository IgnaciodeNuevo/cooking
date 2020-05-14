import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const PageFooter = styled.footer`
  background: var( --color-brand-base);
  color: var(--color-base-lightest);
  padding: var(--space-l);
`

const Paragraph = styled.p`
  color: var(--color-base-lightest);
  white-space: nowrap;
`

const Link = styled.a`
    color: var(--color-base-lightest);
`

const Footer = ({ author, twitter, github, web }) => (
    <PageFooter>
        <Paragraph>© {new Date().getFullYear()}, Built by {author}</Paragraph>
        <Paragraph>
            Follow me on <Link href={twitter} target="_blank" rel="noopener noreferrer me">Twitter</Link>, <Link href={github} target="_blank" rel="noopener noreferrer me">GitHub</Link> or subscribe via <Link href={web}>my web</Link>.
        </Paragraph>
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

