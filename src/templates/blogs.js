import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/_shared/Header/header"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Header>
      <h2>{post.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/">Retour</Link>
    </Header>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
