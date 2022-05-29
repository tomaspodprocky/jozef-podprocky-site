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
            <script src={`https://www.google.com/recaptcha/api.js?r=${Math.random()}`} async defer></script>
        </Helmet>
    )
}

export default SEO
