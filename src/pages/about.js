import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--color-brand-base);
  text-decoration: none;

  &:hover {
    color: var(--color-brand-hover);
  }
`

const Favorites = () => {
  const data = useStaticQuery(graphql`
    query SiteAboutQuery {
      site {
        siteMetadata {
          web
          repository
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Sobre Cookit" />
      <h2>Sobre Cookit</h2>
      <p>
        Esta aplicación web está pensada para tener recetas accesibles en
        cualquier momento y si decides ir a comprar que puedas tener una lista
        de la compra, tus tiendas favoritas con sus datos, una sección con
        recetas favoritas y un sistema de búsqueda.
      </p>
      <p>
        La idea de esta app surge dado mi interés por la cocina para poder tener
        en un dispositivo acceso a cosas que para mi son importantes y me son
        útiles, surge de hacer un proyecto personal sin más intención que hacer
        algo que a mi me sirva.
      </p>
      <p>
        Su crees que puede haber alguna funcionalidad extra que te pudiese
        interesar no dudes en contactarme o si te dedicas al desarrollo fontend
        y tabajas con Gatsby y React (librería con la que ha construido esta
        aplicación web) crees tu dicha{" "}
        <a
          href={data.site.siteMetadata.repository}
          target="_blank"
          rel="noopener noreferrer me"
        >
          funcionalidad aquí.
        </a>
      </p>
      <h2>Sobre Mi</h2>
      <p>
        Soy Ignacio Villanueva y trabajo como{" "}
        <a
          href={data.site.siteMetadata.web}
          target="_blank"
          rel="noopener noreferrer"
        >
          fontend developer
        </a>
      </p>
      <h2>Colofón</h2>
      <p>
        Esta aplicación web está construido utilizando una serie de herramientas
        y servicios de terceros.
      </p>
      <p>
        Está hecho con{" "}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{" "}
        (
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        ), un generador de sitios estáticos, puedes ver el código en{" "}
        <a
          href={data.site.siteMetadata.repository}
          target="_blank"
          rel="noopener noreferrer me"
        >
          el repositorio de GitHub
        </a>{" "}
        y{" "}
        <a
          href="https://styled-components.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          styled-components
        </a>{" "}
        producido en un{" "}
        <a
          href="https://www.apple.com/imac/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple iMac
        </a>
        , programado con el editor de código{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>
        .
      </p>
      <p>
        Desplegado en{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>{" "}
        mientras que{" "}
        <a
          href="https://aws.amazon.com/cloudfront/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CloudFront
        </a>{" "}
        actúa como CDN, protección y optimización de la caché.
      </p>
      <p>Las fuentes utilizadas son:</p>
      <ul>
        <li>DM Serif Text para titulares.</li>
        <li>Roboto para el resto del texto.</li>
      </ul>

      <p>
        Otras herramientas, scripts y servicios utilizados dignos de mención
        son:
      </p>

      <ul>
        <li>
          Iconos{" "}
          <a
            href="https://feathericons.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feather Icons
          </a>
          .
        </li>
        <li>
          <a
            href="https://imageoptim.com/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image Optim
          </a>{" "}
          desarrollado por Kornel Lesiński.
        </li>
      </ul>
      <div>
        <StyledLink to="/">Ir a la página de inicio</StyledLink>
      </div>
    </Layout>
  )
}

export default Favorites
