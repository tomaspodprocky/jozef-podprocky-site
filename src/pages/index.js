// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/index.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import BackgroundImage from 'gatsby-background-image'


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
    file(relativePath: {eq: "Intro.jpg"}) {
      publicURL
    }
  }`)

  React.useEffect(() => {
          document.body.style.backgroundImage = "url(/Intro.jpg)";
          document.body.style.backgroundColor = "transparent";
          document.body.style.backgroundPosition = "top right";
        })

  return (
    <div className={styles.intro}>
    <Layout pageTitle="Úvod" id="../images/Intro.jpg">
      <div className={styles.page}>
        <div className={styles.paragraph}>
        <p>Jedna veta, ktorá zhrňuje všetko dôležité a potrebné. Ináč nič viac netreba. Fusce rhoncus risus eget nisl vulputate, id placerat mauris molestie. Sed semper sapien nec mi vulputate ultrices. Donec mollis condimentum consequat. Donec viverra sit amet lectus ac sagittis. Nullam porta arcu ut neque lobortis, sed condimentum leo scelerisque. Fusce viverra tortor sed nunc commodo ultrices. Etiam vitae convallis augue, ut efficitur diam. Sed eu arcu magna. Mauris pretium est et enim bibendum, vitae tempus dui ultricies. Quisque non odio sed erat sodales porttitor.</p>
        </div>
        <div className={styles.separator}>
          <StaticImage src="../images/Ciara.png" alt="Separator image"/>
        </div>
        {
          data.allMarkdownRemark.nodes.map(node => (
          <div key={node.frontmatter.id} className={styles.paragraph}>
            <h3>{node.frontmatter.date} - {node.frontmatter.title}</h3>
            <p>{node.frontmatter.summary}</p>
            <p>Link: <a href={node.frontmatter.link}>{node.frontmatter.linkName}</a></p>
          </div>
          ))
        }
      </div>
    </Layout>
    </div>
  )
}

// Step 3: Export your component
export default IndexPage