import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Player from '../components/audio'
import * as styles from '../styles/listen.module.css'

const MusicPage = () => {

    const data = useStaticQuery(graphql`
    query GetMp3fromJson {
      music: allOpusyJson(filter: {Mp3: {ne: ""}}) {
        nodes {
          Opus
          Nazov
          Mp3
          id
        }
      }
  		videos: allOpusyJson(filter: {Youtube: {ne: ""}}) {
        nodes {
          Opus
          Nazov
          Youtube
          id
        }
      }
      allFile(filter: {extension: {eq: "mp3"}}) {
        nodes {
          id
          relativePath
          publicURL
        }
      }
    }`)

    React.useEffect(() => {
      document.body.style.backgroundColor = "transparent";
      document.body.style.backgroundImage = "url(/listen.jpg)";
      document.body.style.backgroundPosition = "top right";
    })

    return (
      <div>
      <Layout pageTitle="Hudba" id="listen">
          <div className={styles.page}>
            <table className={styles.table}>
            {
            data.music.nodes.map((node) => (
              <tr key={node.id}>
                <td className={styles.centered}><Player audio_source = 
                  { data.allFile.nodes.find(file => file.relativePath === node.Mp3) }
                /></td>
                <td>{node.Opus}</td>
                <td>{node.Nazov}</td>
              </tr>
              ))
            }
            {
              data.videos.nodes.map((node) => (
                <tr key={node.id} >
                  <td className={styles.centered}><a href={node.Youtube}>Youtube link</a></td>
                  <td>{node.Opus}</td>
                  <td>{node.Nazov}</td>
                </tr>
              )
              )
            }
            </table>
          </div>
      </Layout>
        </div>
    )
  }
  // Step 3: Export your component
  export default MusicPage