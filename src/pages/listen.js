import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Separator from '../components/separator'
import * as styles from '../styles/listen.module.css'

const Player = ({audio_source}) => {

  console.log(audio_source)
  return(
    <div>
      <audio controls src={audio_source.publicURL}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  )};

const MusicPage = ({location}) => {

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
      // document.body.style.transition = "background-image 0s";
      // document.body.style.transitionDelay = "0s";
    })

    return (
      <div>
      <Layout pageTitle="Hudba" page={location.pathname}>
          <p className="intro">Nižšie sú k dispozícii ukážky z vybraných skladieb a prípadne linky na Youtube. Cieľom je illustrovať tvorbu Jozefa Podprockého, a preto nie sú kompletné.</p>
          <div style={{
              marginTop: "150px",
              marginBottom: "150px",
            }}>
            <table className={styles.table}>
              {
              data.music.nodes.map((node) => (
                <tr key={node.id}>
                  <td className={styles.centered}>
                    <Player audio_source = 
                      { data.allFile.nodes.find(file => file.relativePath === node.Mp3) }
                    />
                  </td>
                  <td>Opus {node.Opus}</td>
                  <td>{node.Nazov}</td>
                </tr>
                ))
              }
              {
                data.videos.nodes.map((node) => (
                  <tr key={node.id} >
                    <td className={styles.centered}>
                      <a href={node.Youtube}>Youtube link</a>
                    </td>
                    <td>Opus {node.Opus}</td>
                    <td>{node.Nazov}</td>
                  </tr>
                )
                )
              }
            </table>
          </div>
          <div className="separator"><Separator /></div>
      </Layout>
        </div>
    )
  }
  // Step 3: Export your component
  export default MusicPage