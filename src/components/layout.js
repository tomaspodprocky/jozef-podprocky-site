import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import '../styles/global.css'

import {
    heading,
    container, footer } from '../styles/layout.module.css'

const Layout = ({ pageTitle, children }) => {
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
      <main>
        <div className={container}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
      </main>
      {/* <footer className={footer}>Kontakt</footer> */}
    </div>
  )
}

export default Layout