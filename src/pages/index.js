// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/index.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Separator from '../components/separator'

// Step 2: Define your component
const IndexPage = ({location}) => {

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
    file(relativePath: {eq: "Intro.jpg"}) {
      publicURL
    }
  }`)

  React.useEffect(() => {
          document.body.style.backgroundImage = "url(/Intro.jpg)";
          document.body.style.backgroundColor = "transparent";
          document.body.style.backgroundPosition = "top right";
          // document.body.style.transition = "background-image 0.5s";
          // document.body.style.transitionDelay = "0.5s";
        })

  return (
    <>
      <Layout pageTitle="Úvod" page={location.pathname}>
          <div>
          <p className="intro">
          Vitajte na stránke venovanej tvorbe košického hudobného skladateľa Jozefa Podprockého. Nájdete tu kompletný zoznam tvorby ako aj notové a hudobné ukážky jeho vybraných diel. V prípade otázok nás prosím neváhajte kontaktovať.
          </p>
          </div>
          <Separator />
          {
            data.allMarkdownRemark.nodes.map(node => (
            <div key={node.frontmatter.id} className={styles.paragraph}>
              <h3>{node.frontmatter.date} - {node.frontmatter.title}</h3>
              <p>{node.frontmatter.summary}</p>
              <p>Link: <a href={node.frontmatter.link}>{node.frontmatter.linkName}</a></p>
            </div>
            ))
          }
        <div className="separator"><Separator /></div>
      </Layout>
    </>
  )
}

// Step 3: Export your component
export default IndexPage