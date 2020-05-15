import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const PageHeader = styled.header`
    background: var( --color-brand-base);
    color: var(--color-base-lightest);
    margin-bottom: var(--space-m);
`

const H1 = styled.h1`
    margin-bottom: 0;
`

const Wrapper = styled.header`
    margin: 0 auto;
    max-width: var(--component-max-with);
    padding: var(--space-l);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled(props => <Link {...props} />)`
    color: var(--color-base-lightest);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &:not(:last-of-type) {
        margin-right: var(--space-m);
    }
`;

const Header = ({ siteTitle }) => (
    <PageHeader>
        <Wrapper>
            <H1>
                <StyledLink to="/">{siteTitle}</StyledLink>
            </H1>
            <aside>
                <StyledLink to="/">Inicio</StyledLink>
                <StyledLink to="/search">Buscar</StyledLink>
                <StyledLink to="/favorites">Favoritos</StyledLink>
                <StyledLink to="/shoshoppinglist">Compra</StyledLink>
                <StyledLink to="/shops">Tiendas</StyledLink>
            </aside>
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
