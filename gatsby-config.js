const path = require('path');
const linkResolver = require('./src/utils/linkResolver').linkResolver;

console.log(`Running in the ${process.env.NODE_ENV} environment.`);

require('dotenv').config({ path: '.env' });

if (!process.env.GATSBY_PRISMIC_REPO_NAME || !process.env.PRISMIC_API_KEY || !process.env.PRISMIC_CUSTOM_TYPES_KEY) {
  throw new ReferenceError('Environment not loaded. Check config or .env files');
}

module.exports = {
  siteMetadata: {
    title: `Example Repo`,
    description: `Purpose: debug sass-modules not triggering rebuilds in newer versions of Gatsby.`,
    author: `Erik Griffin`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-dts-css-modules`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        fileName: `types/graphql.ts`,
        documentPaths: ['./src/**/*.{ts,tsx}'],
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        customTypesApiToken: `${process.env.PRISMIC_CUSTOM_TYPES_KEY}`,
        linkResolver: linkResolver,
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        images: path.join(__dirname, 'src/images'),
        styles: path.join(__dirname, 'src/styles'),
        utils: path.join(__dirname, 'src/utils'),
        types: path.join(__dirname, 'types'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
};
