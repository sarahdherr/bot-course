import React from 'react'
import ReactPlayer from 'react-player'

export default (props) =>
  <div>
    <h1>Write the retweet Function</h1>
    <p>This step will create a function called retweet, and when called it will retweet something based on what you query.</p>
    <br />
    <ol>
      <li>
        <p>Open the file bot.js and import the dependences you will need by writing the following code:</p>
        <p className='code'>var twit = require('twit')</p>
        <p className='code'>var config = require('./config')</p>
        <p className='code'>var Twitter = new twit(config)</p>
        <p>On the first line, we import the twit npm we installed a while back. This will make it possible to tweet, re-twet and favorite tweets using the built in API methods.</p>
        <p>The next line we bring in the config.js file we just make. This tells Twitter what account to tweet, retweet and favorite on behalf of.</p>
        <p>The last line you just typed is when we wire up our config file with the Twitter API by passing in these tokens and secrets into the Twitter npm.</p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p>Add the following line of code:</p>
        <p className='code'>tokens.js</p>
      </li>
    </ol>
    <div className='video-center'>
      <ReactPlayer url='https://youtu.be/g5h3Gla1vpU' />
    </div>
  </div>
