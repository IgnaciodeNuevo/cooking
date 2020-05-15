import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

// grid-template-columns
//  uses 320px (which is the minimum devide width the web supports)
//  minus --space-l * 2 used as padding-left and padding-right
const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(320px - (var(--space-l) * 2)), 1fr));
    grid-gap: var(--space-l);
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
        <Card />
        <Card />
        <Card />
    </Grid>
  </Layout>
)

export default IndexPage
