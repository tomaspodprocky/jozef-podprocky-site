// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import OpusList from '../components/opuslist'

// Step 2: Define your component
const WorksPage = () => {
  return (
    <Layout pageTitle="Zoznam tvorby">
        <OpusList />
    </Layout>
  )
}
// Step 3: Export your component
export default WorksPage