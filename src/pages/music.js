import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Player from '../components/audio'

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


    return (
      <Layout pageTitle="Hudba">
          <p>Par nahravok na ukazku.</p>
          <div>
            <table>
            {
            data.music.nodes.map((node) => (
              <tr key={node.id}>
                  <td>{node.Opus}</td>
                  <td>{node.Nazov}</td>
                  <td><Player audio_source = 
                  { data.allFile.nodes.find(file => file.relativePath == node.Mp3) }
                  /></td>
              </tr>
              ))
            }
            {
              data.videos.nodes.map((node) => (
                <tr key={node.id} >
                  <td>{node.Opus}</td>
                  <td>{node.Nazov}</td>
                  <td><a href={node.Youtube}>Youtube link</a></td>
                </tr>
              )
              )
            }
            </table>
          </div>
      </Layout>
    )
  }
  // Step 3: Export your component
  export default MusicPage