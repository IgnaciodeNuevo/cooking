import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>App de cocina - IgnaciodeNuevo</h1>
    <Link to="/search/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
