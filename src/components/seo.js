import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <Helmet htmlAttributes={{ lang: 'sk',}}>
            <meta charSet="utf-8" />
            <title>Jozef Podprocky</title>
        </Helmet>
    )
}

export default SEO
