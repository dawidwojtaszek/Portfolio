exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query path {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        nodes {
          frontmatter {
            moreUrl
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    const path = node.frontmatter.moreUrl
    actions.createPage({
      path: path,
      component: require.resolve(`./src/templates/project.js`),
      context: { sitePath: path },
    })
  })
}
