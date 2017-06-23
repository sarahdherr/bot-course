import React from 'react'
import ReactPlayer from 'react-player'

export default (props) => {
  return (
    <div>
      <h3 className='center'><u>Sign up for a twitter account for your bot</u></h3>
      <p className='center'>In order to have a bot retweet and favorite tweets, it needs it's own twitter account. To get a new twitter account just follow the normal steps to get a new account.</p>
      <p className='center'><em>Note: Make sure to use an email you can access.</em></p>
      <div className='video-center'>
        <ReactPlayer url='https://youtu.be/bTQOFKGh6_w' />
      </div>
    </div>
  )
}
