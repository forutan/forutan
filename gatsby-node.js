
const path = require('path')
exports.createPages = async({graphql, actions}) => {
    const {data} = await graphql(`
    query Pages {
        allMarkdownRemark {
          nodes {
            id
            frontmatter {
              title
            }
            fileAbsolutePath
            html
          }
        }
      }
    `
    );

    data.allMarkdownRemark.nodes.forEach(node => {
        const basename = path.basename(node.fileAbsolutePath).replace(/\.[^/.]+$/, "");
         actions.createPage({
            path: '/projects/' + basename,
            component : path.resolve('./src/templates/project-details.js'),
            context: {
                name : basename,
                html: node.html
            }
         });
    })
    
}