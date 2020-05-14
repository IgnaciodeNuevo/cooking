import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Card />
    <Card />
    <Card />
    <Link to="/search/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
