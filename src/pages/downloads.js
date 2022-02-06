import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import * as textStyles from '../styles/downloads.module.css'

export const opusQuery = graphql`
query  {
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
    allFile(filter: {extension: {eq: "pdf"}}) {
      nodes {
        id
        relativePath
        publicURL
      }
    }
  }`

const DownloadList = () => {
    const data = useStaticQuery(opusQuery)
    return (
        <div className={textStyles.paragraph}>
        <table>
        <thead>
          <tr>
            <th>Opus</th>
            <th>Nazov</th>
            <th>Minutáž</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {data.allOpusyJson.nodes.map(node => (
            <tr key={node.id}>
              <td>{node.Opus}</td>
              <td style={{textAlign: "left"}}>{node.Nazov}</td>
              <td>{node.Minutaz}</td>
              <td>
                <a href={ (() => { 
                    const retValue = data.allFile.nodes.find(file => file.relativePath === node.pdf);
                    console.log(retValue);
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
    })
    
    return (
      <div>
      <Layout pageTitle="Na stiahnutie" page={location.pathname}>
          <p>Čiastočné ukážky partitúr na stiahnutie k opusom uvedeným nižsie. V prípade záujmu o kompletné partitúry, alebo partitúry pre iné diela, nás prosím kontaktujte.</p>
          <DownloadList />
      </Layout>
      </div>
    )
  }

  export default DownloadPage