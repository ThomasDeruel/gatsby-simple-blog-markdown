import React from "react"
import Header from "../components/_shared/Header/header";
import { graphql } from "gatsby";

export default ({data}) => {
    console.log(data)
    const allData = data.allMarkdownRemark.edges;
    return(
        <div>
            <Header>
            {allData.map(({node})=> (
                <div key={node.id}>
                    <h2>
                        {node.frontmatter.title} - <span style={{opacity:0.2}}>{node.frontmatter.date}</span>
                    </h2>
                    <p>{node.excerpt}</p>
                </div>
                ))
            }
            </Header>
        </div>
    )
}
export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "DD/MM/YY")
        }
        excerpt
        id
      }
    }
  }
}
`