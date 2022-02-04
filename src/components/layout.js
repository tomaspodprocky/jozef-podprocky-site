import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import '../styles/global.css'

import {
    container, footer } from '../styles/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'


const Layout = ({ pageTitle, id, children }) => {

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
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Navbar />
      <div className={container}>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      </div>
      <footer className={footer}>
        <StaticImage 
          src = "../images/Ciara.png" alt="Separator image"
        />
      </footer>
    </div>
  )
}

export default Layout