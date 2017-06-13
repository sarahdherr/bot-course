import React from 'react'
import {Link} from 'react-router'

export default function Home () {
  return (
    <div className='center'>
      <h2>Welcome to Building a Twitter Bot</h2>
      <img src='https://tech.co/wp-content/uploads/2012/07/Women-in-Tech.jpeg' />
      <h3>Course Overview</h3>
      <h5>1. The setup</h5>
      <h5>2. Making your bot</h5>
      <h5>3. Deploying</h5>

      <h3>What You Need</h3>
      <h5>Terminal</h5>
      <h5>Code Editor</h5>
      <h5>Twitter account (for your bot)</h5>
      <h5>Heroku account</h5>
      <h5>Github account</h5>

      <Link to='/start'><button className='btn btn-primary btn-lg'>Get started</button></Link>
    </div>
  )
}
