import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const PageMenu = styled.aside`
    background: var( --color-brand-base);
    color: var(--color-base-lightest);
    padding: var(--space-l);
`

const Aside = () => (
  <PageMenu>
        <Link to="/">Inicio</Link>
        <Link to="/search">Buscar</Link>
        <Link to="/favorites">Favoritos</Link>
        <Link to="/shoshoppinglist">Compra</Link>
        <Link to="/shops">Tiendas</Link>
  </PageMenu>
)


export default Aside
