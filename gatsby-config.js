module.exports = {
  siteMetadata: {
    title: `Cooking PWA`,
    description: `Aplicación de cocina donde puedes buscar, añadir a favoritos a la lista de la compra tus recetas o donde puedes ver tus tiendas favoritas.`,
    author: `@IgnaciodeNuevo`,
    twitter: `https://twitter.com/IgnaciodeNuevo`,
    github: `https://twitter.com/IgnaciodeNuevo`,
    web: `https://ignaciodenuevo.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
