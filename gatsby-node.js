/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
      graphql(`
        {
          allContentfulQuote(sort: { fields: [title]}) {
            totalCount
            edges {
              node {
                id
                title
                slug
                quotee {
                  id
                  title
                }
              }
            }
          }
        }
      `).then(result => {
        createPage({
          path: '/',
          component: path.resolve(`./src/templates/index.js`),
          context: {
            randomNum: Math.floor(Math.random() * result.data.allContentfulQuote.totalCount)
          },
        })
        createPaginatedPages({
          edges: result.data.allContentfulQuote.edges,
          createPage,
          pageTemplate: "src/templates/quotes.js",
          pageLength: 10,
          pathPrefix: "quotes",
          context: {
            totalCount: result.data.allContentfulQuote.totalCount
          }
        })
        result.data.allContentfulQuote.edges.forEach(({ node }) => {
          createPage({
            path: `quotes/${node.slug}`,
            component: path.resolve(`./src/templates/quote.js`),
            context: {
              id: node.id,
            },
          })
        })
        resolve()
      })

    })

  }