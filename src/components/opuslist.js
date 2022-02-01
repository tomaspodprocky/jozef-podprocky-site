import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import * as styles from '../styles/opuslist.module.css'

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
              <td className={styles.column_align_left}>{node.Nazov}</td>
              <td>{node.Minutaz}</td>
              <td>{node.Rok_vzniku_alebo_revizie}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    )
  }

  export default OpusList