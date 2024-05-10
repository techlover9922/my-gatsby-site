// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home</title>

// Step 3: Export your component
export default IndexPage