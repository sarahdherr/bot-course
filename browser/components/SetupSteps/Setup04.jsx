import React from 'react'
import ReactPlayer from 'react-player'

export default (props) => {
  return (
    <div>
      <h3 className='center'><u>Update your package.json</u></h3>
      <p className='center'>Now you just need to update your package.json file to finish your Twitter bot set up.</p>
      <br />
      <ol>
        <li>
          Open your package.json file in your editor.
        </li>
        <li>
          <p>Find the "main" entry in the package.json (on about line 5). It should be defaulted to:</p>
          <p className='code'>"main": "index.js"</p>
        </li>
        <li>
          <p>Update "index.js" to "bot.js". The line should now look like the following line:</p>
          <p className='code'>"main": "bot.js"</p>
        </li>
      </ol>
      <br />
      <div className='video-center'>
        <ReactPlayer url='https://youtu.be/4x_F8uHb7mg' />
      </div>
    </div>
  )
}
