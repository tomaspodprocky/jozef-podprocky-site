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
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      id
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        lang
        link
        summary
        title
        linkName
        image
      }
    }
  }
  file(relativePath: {eq: "Intro.jpg"}) {
    publicURL
  }
  allImageSharp {
    nodes {
      original {
        width
        height
        src
      }
      gatsbyImageData
      fixed {
        src
        originalName
      }
    }
  }
}`)

  // Create a mapping between image filenames and their public URLs
  const imageMap = data.allImageSharp.nodes.reduce((acc, node) => {
    const filename = node.fixed.src.split('/').pop();
    acc[filename] = node.gatsbyImageData.images.fallback.src;
    return acc;
  }, {});

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
            <div key={node.id} className={styles.paragraph}>
                <h3>{node.frontmatter.date} - {node.frontmatter.title}</h3>
                {node.frontmatter.summary && (
                  <p>{node.frontmatter.summary}</p>
              )}  
                {node.frontmatter.link && (
                  <p>Link: <a href={node.frontmatter.link} target="_blank" rel="noreferrer" 
                  style={{ color: "var(--default-yellow)" }}>{node.frontmatter.linkName}</a></p>)}
              {node.frontmatter.image && imageMap[node.frontmatter.image] && (
              <p>
                    <img
                      src={imageMap[node.frontmatter.image]}
                      alt={node.frontmatter.title}
                      style={{ maxWidth: "80%", height: "auto", display: "block", margin: "0 auto" }}
                    />
                  </p>
              )}
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