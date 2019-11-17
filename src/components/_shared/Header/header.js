import React from "react";
import { StaticQuery, graphql } from "gatsby";
import style from "./header.module.scss";

const query = graphql`
    query HeaderQuery {
        site {
            siteMetadata {
                siteTitle
            }
        }
    }        
`
const render = (data) => (
    <h1 className={style.title}>
        { data.site.siteMetadata.siteTitle }
    </h1>
)
const Header = ({data,children}) => (
    <div className={style.header}>
        <StaticQuery
        query={query}
        render={render}
        />
        {children}
    </div>
);

export default Header;