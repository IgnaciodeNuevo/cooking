import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Wrapper from "./wrapper"

const PageMenu = styled.aside`
    background: var( --color-brand-base);
    color: var(--color-base-lightest);
`

const Aside = () => (
  <PageMenu>
    <Wrapper>
        <Link to="/">Inicio</Link>
        <Link to="/search">Buscar</Link>
        <Link to="/favorites">Favoritos</Link>
        <Link to="/shoshoppinglist">Compra</Link>
        <Link to="/shops">Tiendas</Link>
    </Wrapper>
  </PageMenu>
)


export default Aside
