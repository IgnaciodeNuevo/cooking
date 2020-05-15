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

const Header = ({ siteTitle }) => (
    <PageHeader>
        <Wrapper>
            <H1>
                <Link to="/" style={{ color: `white`, textDecoration: `none`,}}>{siteTitle}</Link>
            </H1>
            <aside>
                <Link to="/">Inicio</Link>
                <Link to="/search">Buscar</Link>
                <Link to="/favorites">Favoritos</Link>
                <Link to="/shoshoppinglist">Compra</Link>
                <Link to="/shops">Tiendas</Link>
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
