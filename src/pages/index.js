// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/index.module.css'
import { graphql, useStaticQuery } from 'gatsby'


// Step 2: Define your component
const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query GetMdHeaders {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            lang
            link
            summary
            title
            linkName
          }
          id
        }
      }
    }`)

  return (
    <Layout pageTitle="Úvod">
      <div className={styles.page}>
        {
          data.allMarkdownRemark.nodes.map(node => (
          <div key={node.frontmatter.id} className={styles.paragraph}>
            <h3>{node.frontmatter.date} - {node.frontmatter.title}</h3>
            <p>{node.frontmatter.summary}</p>
            <p>Link: <a href={node.frontmatter.link}>{node.frontmatter.linkName}</a></p>
          </div>
          )
          )
        }
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage