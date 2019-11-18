import React from "react"
import { Link } from "gatsby"
import style from "./iteamlist.module.scss"
export default ({ node }) => {
  return (
    <Link className={style.link} to={node.fields.slug}>
      <h2>
        {node.frontmatter.title} -{" "}
        <span style={{ opacity: 0.2 }}>
          <i>{node.frontmatter.date}</i>
        </span>
      </h2>
      <p>{node.frontmatter.describe}</p>
    </Link>
  )
}
