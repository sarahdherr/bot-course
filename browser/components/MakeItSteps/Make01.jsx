import React from 'react'
import ReactPlayer from 'react-player'

export default (props) =>
  <div>
    <h3 className='center'><u>Writing Your Secret Token File</u></h3>
    <p className='center'>We do not want our Twitter tokens and secrets out in the open for security reasons. This is good practice because if someone gets your tokens and secrets for an API, then they can access your account (here your Twitter Bot account) and do whatever they want. In this case, the worst they can do it tweet something on your account, but if this was a paid service they could take advantage of your account and rack up a lot of money spent.</p>
    <br />
    <ol>
      <li>
        <p>Open tokens.js and write the following code:</p>
        <p className='code'>module.exports = </p>
        <p className='code'>    KEY: '',</p>
        <p className='code'>    SECRET: '',</p>
        <p className='code'>    TOKEN: '',</p>
        <p className='code'>    TOKEN_SECRET: '',</p>
        <p className='code'>}</p>
      </li>
      <li>
        <p>Find your tokens and secret from your twitter application account (you should have already made these in the last section).</p>
        <p>Under the "Keys and Access Tokens", you can find the key and secret under the "Application Settings" and the token and token secret under the "Your Access Tokens"</p>
      </li>
      <li>
        <p>Inside the quotes you just wrote in module.exports = {}, copy in the following:</p>
        <ul>
          <li>KEY, copy in the "Consumer Key (API Key)" value</li>
          <li>SECRET, copy in the "Consumer Secret (API Secret)" value</li>
          <li>TOKEN, copy in the "Access Token" value</li>
          <li>TOKEN_SECRET, copy in the "Access Token Secret" value</li>
        </ul>
      </li>
    </ol>
    <div className='video-center'>
      <ReactPlayer url='https://youtu.be/g5h3Gla1vpU' />
    </div>
  </div>
