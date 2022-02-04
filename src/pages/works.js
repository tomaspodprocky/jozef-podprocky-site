// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import OpusList from '../components/opuslist'

// Step 2: Define your component
const WorksPage = () => {
  return (
    <div>
    <Layout pageTitle="Zoznam tvorby" id="music">
        <OpusList />
    </Layout>
    <script type="text/javascript">
        {
        (function() {
          document.body.style.backgroundColor = "transparent";
          document.body.style.backgroundImage = "url(/music.jpg)";
          document.body.style.backgroundPosition = "top right";
          })()
        }
      </script>
    </div>
  )
}
// Step 3: Export your component
export default WorksPage