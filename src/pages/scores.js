import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import * as styles from '../styles/scores.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const ScoresPage = () => {

    const data = useStaticQuery(graphql`
    query GetScoresfromJson {
      music: allOpusyJson(filter: {Mp3: {ne: ""}}) {
        nodes {
          Opus
          Nazov
          Mp3
          id
        }
      }
      allFile(filter: {extension: {eq: "pdf"}}) {
        nodes {
          id
          relativePath
          publicURL
        }
      }
    }`)


    return (
      <Layout pageTitle="Na stiahnutie">
          <p>Partitúry na prezretie a stiahnutie.</p>
          <div className={styles.scorePage}>
            {
            data.music.nodes.map((node) => (
              <div key={node.id} className={styles.scoreItem}>
                  <a href="https://google.com">
                    <StaticImage src="../../scores/score-01-cover.jpg" width={120} />
                    </a>
                  <p>{node.Opus}</p>
                  <h3>{node.Nazov}</h3>
                  {/* <td><Player audio_source = 
                  { data.allFile.nodes.find(file => file.relativePath == node.Mp3) }
                  /></td> */}
              </div>
              ))
            }
          </div>
      </Layout>
    )
  }
  // Step 3: Export your component
  export default ScoresPage