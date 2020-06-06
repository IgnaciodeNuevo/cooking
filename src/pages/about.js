import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--color-brand-primary-dark);
  text-decoration: none;

  &:hover {
    color: var(--color-brand-primary-medium);
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query SiteAboutQuery {
      site {
        siteMetadata {
          web
          repository
          twitter
          github
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
        cualquier momento. Con las algunas funcionalidades que creo me serán
        útiles:
      </p>
      <ul>
        <li>Lista de la compra</li>
        <li>Tiendas favoritas</li>
        <li>Recetas favoritas</li>
        <li>Sistema de búsqueda de recetas</li>
      </ul>
      <p>
        La idea de esta app surge dado mi interés por la cocina para poder tener
        en un dispositivo (móvil o de sobremesa) acceso a cosas que para mi son
        importantes.
      </p>
      <h2>Sobre Mi</h2>
      <p>
        Soy{" "}
        <a
          href={data.site.siteMetadata.web}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ignacio Villanueva
        </a>{" "}
        y trabajo como{" "}
        <a
          href={data.site.siteMetadata.web}
          target="_blank"
          rel="noopener noreferrer"
        >
          fontend developer
        </a>
        .
      </p>
      <p>
        Me especializo en el rendimiento, diseño de responsive, tipografía web y
        accesibilidad.
      </p>
      <p>
        Escribo artículos y he sido ponente en eventos. También paso tiempo{" "}
        <a
          href="https://ignaciodenuevo.com/2019/06/12/mentoring-mi-camino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          mentorizando gente
        </a>
        .
      </p>
      <p>
        Anfitrión de{" "}
        <a
          href="http://wecodesign.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WeCodeSign
        </a>
        , un podcast que hablaba de frontend, UX y diseño web. Cofundador del{" "}
        <a
          href="http://frontfest.es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FrontFest.es
        </a>{" "}
        (hasta que se dejó de hacer en 2020 la mayor conferencia sobre
        desarrollo de frontend en España) y también cofundador de{" "}
        <a
          href="https://www.meetup.com/Open-Source-Weekends/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Weekends
        </a>
        , un Meetup mensual sobre software Open Source. 😊
      </p>
      <p>
        Puedes seguirme en{" "}
        <a
          href={data.site.siteMetadata.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        , forkearme en{" "}
        <a
          href={data.site.siteMetadata.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        , suscribirte a través de{" "}
        <a
          href="https://ignaciodenuevo.com/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS Feed
        </a>{" "}
        o enviarme un correo electrónico a{" "}
        <a href="mailto:ignaciodenuevo@posteo.net?Subject=Contact% 20from%20IgnaciodeNuevo's%20website">
          ignaciodenuevo@posteo.net
        </a>
        .
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
        actúa como CDN.
      </p>
      <p>Las fuentes utilizadas son:</p>
      <ul>
        <li>Playfair Display para titulares</li>
        <li>Source Sans Pro para el resto del texto</li>
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
        </li>
        <li>
          <a
            href="https://imageoptim.com/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image Optim
          </a>
        </li>
      </ul>
      <div>
        <StyledLink to="/">Ir a la página de inicio</StyledLink>
      </div>
    </Layout>
  )
}

export default About
