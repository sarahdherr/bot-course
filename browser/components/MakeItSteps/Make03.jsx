import React from 'react'
import ReactPlayer from 'react-player'

export default (props) =>
  <div>
    <h1>Write the config File</h1>
    <p>This is the file that the Twitter API looks at for your secrets and tokens so that it knows who to tweet from and if you have the access to tweet as that account. We just put these tokens and secrets in our secret tokens.js file, now to access them!</p>
    <br />
    <ol>
      <li>
        <p>Open config.js and import your Twitter tokens from your secret file with the following code:</p>
        <p className='code'>var tokens = require('./tokens')</p>
      </li>
      <li>
        <p>Now we can use these tokens without anyone knowing our tokens. We will include these tokens in the rest of our confi code with the following code:</p>
        <p className='code'>module.exports = </p>
        <p className='code'>    consumer_key: tokens.KEY,</p>
        <p className='code'>    consumer_secret: tokens.SECRET,</p>
        <p className='code'>    access_token: tokens.TOKEN,</p>
        <p className='code'>    access_token_secret: tokens.TOKEN_SECRET</p>
        <p className='code'>}</p>
        <p>Note: You access the "KEY" you made in tokens.js by writing "tokens.KEY"</p>
      </li>
    </ol>
    <div className='video-center'>
      <ReactPlayer url='https://youtu.be/g5h3Gla1vpU' />
    </div>
  </div>
