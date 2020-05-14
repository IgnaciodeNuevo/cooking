import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Favorites = () => (
  <Layout>
    <SEO title="Favoritos" />
    <h1>Favoritos</h1>
    <Link to="/">Ir a la página de inicio</Link>
  </Layout>
)

export default Favorites
