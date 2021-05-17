import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
const IndexPage = ({data}) => {
  const {title, description} = data.site.siteMetadata;
  return (
    <Layout>
      <div className="bg-purple-900  flex flex-col justify-center w-full h-80 text-white text-center">
          <h1 className="text-3xl lg:text-7xl xl:text-8xl cursor-pointer hover:text-purple-100 my-6" >
            My {title}
          </h1>
          <div className="text-sm cursor-pointer">
            {description}
          </div>
        
      </div>  
    </Layout>
  )
}
export const query = graphql`
query MyQuery {
  site {
      siteMetadata {
        description
        title
      }
  }
}
`
export default IndexPage
