import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
// import Separator from './separator'
import SEO from './seo'
import '../styles/global.css'

const Layout = ({ pageTitle, page, children }) => {

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
    <>
      <SEO />
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header path={page}/>
      <div 
        style={{
          maxWidth: "var(--default-max-width)",
          marginTop: "var(--default-margin-top)",
          marginBottom: "0px",
          marginLeft:"auto",
          marginRight:"auto",
          // color: "beige",
          backgroundColor: "rgba(0, 0, 0, 0)",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}>
        <main>{children}</main>
      </div>
      <footer></footer>
    </>
  )
}

export default Layout