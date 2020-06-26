require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.sportingquotes.com`,
    title: 'Sporting Quotes – Quotes to remember. Quotes to inspire. Quotes to make you dream.',
    description: 'Browse and share famous sporting quotes from superstars throughout the ages.',
    keywords: 'sporting quotes, quotes, quote, sport, inspiration, famous, superstars, history, dreams, winning'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sporting Quotes',
        short_name: 'Sporting Quotes',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/images/sporting-quotes-icon.png'
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lora:400', 'Open Sans:400,600,700']
        }
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID || '',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
