// Step 1: Import your component
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
// import OpusList from '../components/opuslist'

export const opusQuery = graphql`
query  {
    allOpusyJson {
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
          id
        }
      }
    }`

const OpusList = () => {
    const data = useStaticQuery(opusQuery)
    return (
        <div>
        <table>
        <thead>
          <tr>
            <th>Opus</th>
            <th>Nazov</th>
            <th>Minutaz</th>
            <th>Rok vzniku</th>
          </tr>
        </thead>
        <tbody>
          {data.allOpusyJson.nodes.map(node => (
            <tr key={node.id}>
              <td>{node.Opus}</td>
              <td style={{textAlign: "left"}}>{node.Nazov}</td>
              <td>{node.Minutaz}</td>
              <td>{node.Rok_vzniku_alebo_revizie}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    )
  }

// Step 2: Define your component
const WorksPage = ({location}) => {

  React.useEffect(() => {
    document.body.style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "url(/music.jpg)";
    document.body.style.backgroundPosition = "top right";
  })

  return (
    <div>
    <Layout pageTitle="Zoznam tvorby" page={location.pathname}>
        <OpusList />
    </Layout>
    </div>
  )
}
// Step 3: Export your component
export default WorksPage