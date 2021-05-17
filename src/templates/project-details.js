import React from 'react'
import Layout from "../components/Layout"
export default function ProjectDetail({pageContext}) {
    return (
        <Layout>
            <div className="m-auto w-8/12 p-3">
                <div>title</div>
                <div dangerouslySetInnerHTML={{__html : pageContext.html}}/> 
            </div>           
        </Layout>
    )
}
