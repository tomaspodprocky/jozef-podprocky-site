import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Separator from '../components/separator'
import * as textStyles from '../styles/downloads.module.css'

const opusQuery = graphql`
query  {
  allFile(filter: {extension: {eq: "pdf"}}) {
      nodes {
        id
        relativePath
        publicURL
      }
    }
  allOpusyJson(filter: {pdf: {ne: ""}}) {
      nodes {
        Casti
        Diskografia
        Minutaz
        Nazov
        Obsadenie
        Opus
        Premiera
        Reflexia_diela
        Rok_vzniku_alebo_revizie
        Vydanie
        pdf
        id
      }
    }
  }`

const DownloadList = () => {
    const query = useStaticQuery(opusQuery)
    console.log(query);
    return (
        <div style={{
          marginBottom: "100px",
        }}>
        <table>
        <thead>
          <tr>
            <th>Opus</th>
            <th>Názov</th>
            <th>Minutáž</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {query.allOpusyJson.nodes.map(node => (
            <tr key={node.id}>
              <td>{node.Opus}</td>
              <td style={{textAlign: "left"}}>{node.Nazov}</td>
              <td>{node.Minutaz}</td>
              <td>
                <a href={ (() => { 
                    const retValue = query.allFile.nodes.find(file => file.relativePath === node.pdf);
                    return (retValue.publicURL);
                    })() } 
                  className={textStyles.buttonYellow}>Stiahnuť</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    )
  }

  const DownloadPage = ({location}) => {
    
    React.useEffect(() => {
      document.body.style.backgroundColor = "transparent";
      document.body.style.backgroundImage = "url(/download.jpg)";
      document.body.style.backgroundPosition = "top center";
      // document.body.style.transition = "background-image 0s";
      // document.body.style.transitionDelay = "0s";
    })
    
    return (
      <div>
      <Layout pageTitle="Na stiahnutie" page={location.pathname}>
          <p className="intro">
          Ku všetkým dielam sú k dispozícii partitúry. V prípade záujmu nás prosím kontaktujte. Čiastočné ukážky partitúr sú na stiahnutie k opusom uvedeným nižsie.</p>
          <DownloadList />
          <div className="separator"><Separator /></div>
      </Layout>
      </div>
    )
  }

  export default DownloadPage