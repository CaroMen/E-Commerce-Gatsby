/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const store = path.resolve('./src/components/Store.js')
    return graphql(`
      {
        allShopifyProduct {
            edges {
              node {
                title
                description
                variants {
                  image {
                    localFile {
                      childImageSharp {
                        fixed(width: 100, height: 2, fit: COVER, cropFocus: ATTENTION) {
                          srcSet
                        }
                      }
                    }
                  }
                  title
                  price
                }
                priceRange {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
      }
    `)
}
