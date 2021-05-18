import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
const IndexPage = ({ data }) => {
  const { title, description } = data.site.siteMetadata;
  const projects  = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className="bg-purple-900  flex flex-col justify-center h-80 text-white text-center">
        <h1 className="text-3xl lg:text-7xl xl:text-8xl cursor-pointer hover:text-purple-100 my-6" >
          My {title}
        </h1>
        <div className="text-sm cursor-pointer">
          {description}
        </div>

      </div>
      <div className="w-12/12 md:w-10/12 xl:w-8/12 m-auto p-2 py-6 grid grid-cols-1 lg:grid-cols-2 gap-2 justify-items-center">
        {projects.map(({frontmatter : project}) => (
            <>
              <Card cardData={project}/>  
            </>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        description
        stack
      }
    }
  }
  site {
    siteMetadata {
      title
      description
    }
  }
}

`
export default IndexPage
