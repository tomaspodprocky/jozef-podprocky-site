import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Separator from './separator'
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
          margin: "50px auto 0px auto",
          color: "beige",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}>
        <main>{children}</main>
      </div>
      <footer 
        style={{  
          textAlign: "center",
          padding: "20px 20px",
        }}>
        <Separator />
      </footer>
    </>
  )
}

export default Layout