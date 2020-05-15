import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RecetaTest = () => (
  <Layout>
    <SEO title="Test de Receta" />
    <h1>Test de Receta</h1>
    <Link to="/">Ir a la página de inicio</Link>
  </Layout>
)

export default RecetaTest
