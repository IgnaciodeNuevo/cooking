import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ShoshoppingList = () => (
  <Layout>
    <SEO title="Cesta de la compra" />
    <h1>Cesta de la compra</h1>
    <Link to="/">Ir a la página de inicio</Link>
  </Layout>
)

export default ShoshoppingList
