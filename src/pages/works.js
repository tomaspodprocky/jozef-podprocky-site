// Step 1: Import your component
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Separator from '../components/separator'
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
          Rok_vzniku
          Vydanie
          Zaner
          id
        }
        distinct(field: {Zaner: SELECT})
      }
    }`

function TableHead() {
  return (
    <thead>
      <tr>
        <th>Opus</th>
        <th>Názov</th>
        <th>Obsadenie</th>
        <th>Minutáž</th>
        <th>Rok vzniku</th>
      </tr>
    </thead>
  )
}

function TableRow(props) {
  return (
    <tr key={props.id}>
      <td>{props.Opus}</td>
      <td style={{textAlign: "left"}}>{props.Nazov}</td>
      <td style={{textAlign: "left"}}>{props.Obsadenie}</td>
      <td>{props.Minutaz}</td>
      <td>{props.Rok_vzniku}</td>
    </tr> )
}

function FilteredRows({query, zaner}) {
  const res = query.allOpusyJson.nodes.filter(nd => nd.Zaner === zaner)
  return (
  <>
    { res.map(node => TableRow(node)) }
  </>
  )
}

const OpusList = () => {
    const data = useStaticQuery(opusQuery)
    return (
        <div style={{
          marginBottom: "100px",
        }}>
          { data.allOpusyJson.distinct.map(zaner => (
          <>
            {zaner === "ZZZ" 
            ? <h2 key={"head" + zaner} style={{marginTop: "50px", marginBottom: "10px"}}>Bez opusu</h2>
            : <h2 key={"head" + zaner} style={{marginTop: "50px", marginBottom: "10px"}}>{zaner}</h2> }
            <table key={zaner}>
            <TableHead />
            <tbody>
              <FilteredRows query={data} zaner={zaner} />
            </tbody>
            </table>
          </>
          ))}
      </div>

    )
  }

// Step 2: Define your component
const WorksPage = ({location}) => {

  React.useEffect(() => {
    document.body.style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "url(/music.jpg)";
    document.body.style.backgroundPosition = "top right";
    // document.body.style.transition = "background-image 0s";
    // document.body.style.transitionDelay = "0s";
  })

  return (
    <div>
    <Layout pageTitle="Zoznam tvorby" page={location.pathname}>
        <p className='intro'>Nižšie je uvedený kompletný zoznam tvorby. Obsahuje vsetky opusové čisla aj diela vytvorené na objednávku k rôznym príležitostiam.</p>
        <OpusList />
        <div className="separator"><Separator /></div>
    </Layout>
    </div>
  )
}
// Step 3: Export your component
export default WorksPage