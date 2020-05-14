import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Shops = () => (
  <Layout>
    <SEO title="Tiendas" />
    <h1>Tiendas</h1>
    <Link to="/">Ir a la página de inicio</Link>
  </Layout>
)

export default Shops
