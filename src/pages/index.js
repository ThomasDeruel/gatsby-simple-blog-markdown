import React from "react"
import Header from "../components/_shared/Header/header"
import ItemList from "../components/_shared/ItemLink/itemlist"

import { graphql } from "gatsby"

export default ({ data }) => {
  const allData = data.allMarkdownRemark.edges
  return (
    <div>
      <Header>
        {allData.map(({ node }) => (
          <ItemList node={node} key={node.id} />
        ))}
      </Header>
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YY")
            describe
          }
          excerpt
          id
        }
      }
    }
  }
`
