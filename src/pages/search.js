import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Search = () => (
  <Layout>
    <SEO title="Búsqueda" />
    <h1>Búsqueda</h1>
    <Link to="/">Ir a la página de inicio</Link>
  </Layout>
)

export default Search
