import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import Separator from './separator'
import '../styles/global.css'

import {
    container, footer } from '../styles/layout.module.css'

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
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Navbar path={page}/>
      <div className={container}>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      </div>
      <footer className={footer}>
        <Separator />
      </footer>
    </div>
  )
}

export default Layout