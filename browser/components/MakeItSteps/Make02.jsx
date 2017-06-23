import React from 'react'
import ReactPlayer from 'react-player'

export default (props) =>
  <div>
    <h1>Put tokens.js in the .gitignore</h1>
    <p>Adding this file to our .gitignore file, we make sure when we push up to GitHub no one can see our tokens.js. This completes our security measure to make sure no one can tweet as our bot.</p>
    <br />
    <ol>
      <li>Open your .gitignore file.</li>
      <li>
        <p>Add the following line of code:</p>
        <p className='code'>tokens.js</p>
      </li>
    </ol>
    <div className='video-center'>
      <ReactPlayer url='https://youtu.be/g5h3Gla1vpU' />
    </div>
  </div>
