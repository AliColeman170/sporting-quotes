const { paginate, createPagePerItem } = require('gatsby-awesome-pagination')
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const { data } = await graphql(`{
      allContentfulQuote(sort: { fields: [title]}) {
        totalCount
        edges {
          node {
            id
            slug
          }
        }
      }
    }`)

    paginate({
      createPage, // The Gatsby `createPage` function
      items: data.allContentfulQuote.edges, // An array of objects
      itemsPerPage: 10, // How many items you want per page
      pathPrefix: '/quotes', // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve(`./src/templates/quotes.js`), // Just like `createPage()`
      context: {
        totalCount: data.allContentfulQuote.totalCount
      }
    })

    createPage({
      path: '/',
      component: path.resolve(`./src/templates/index.js`),
      context: {
        randomNum: Math.floor(Math.random() * data.allContentfulQuote.totalCount)
      },
    })

    createPagePerItem({
      createPage,
      items: data.allContentfulQuote.edges,
      component: path.resolve(`./src/templates/quote.js`),
      itemToPath: "node.slug",
      itemToId: "node.id"
    });

  }