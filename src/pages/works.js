// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import OpusList from '../components/opuslist'

// Step 2: Define your component
const WorksPage = () => {

  React.useEffect(() => {
    document.body.style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "url(/music.jpg)";
    document.body.style.backgroundPosition = "top right";
  })

  return (
    <div>
    <Layout pageTitle="Zoznam tvorby" id="music">
        <OpusList />
    </Layout>
    </div>
  )
}
// Step 3: Export your component
export default WorksPage