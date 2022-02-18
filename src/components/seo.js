import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const SEO = ( {pageTitle} ) => {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
            }
            }
        }
  `)
    return (
        <Helmet htmlAttributes={{ lang: 'sk',}}>
            <meta charSet="utf-8" />
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        </Helmet>
    )
}

export default SEO
