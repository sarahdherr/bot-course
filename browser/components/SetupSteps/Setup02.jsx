import React from 'react'
import ReactPlayer from 'react-player'

export default (props) => {
  return (
    <div>
      <h3 className='center'><u>Get your Twitter tokens and secrets</u></h3>
      <p>Next we will get our tokens and secrets in order to access the Twitter API and query Twitter.</p>
      <br />
      <ol>
        <li>Go to https://apps.twitter.com/</li>
        <li>Create a new app (click the button at the top right "Create New App")</li>
        <li>Fill out the information with whatever you want. Your app name has to be unique, I would use your twitter bot "@" name or something similar. Also, you can put https://www.placeholder.com in the website field.</li>
        <li>Now you have your new application account. Once on this page, go to the "Keys and Access Tokens" tab.</li>
        <li>Scroll to the bottom of the page and click the "Create my access token" button.</li>
      </ol>
      <p>Cool! Now you have all the information from Twitter for your bot.</p>
      <div className='video-center'>
        <ReactPlayer url='https://youtu.be/g5h3Gla1vpU' />
      </div>
  </div>
  )
}
