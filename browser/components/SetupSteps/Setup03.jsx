import React from 'react'
import ReactPlayer from 'react-player'

export default (props) => {
  return (
    <div>
      <h3 className='center'><u>Find your terminal and make the files</u></h3>
      <p className='center'>It is finally time to create some files where we will actually build our bot.</p>
      <br />
      <ol>
        <li>Open your iTerm2 application, or whatever terminal you like to use.</li>
        <li>Once open, input the following commands into the terminal:</li>
        <ul>
          <li>
            <p>Make a folder on your computer called "twit-bot"</p>
            <p className='code'>mkdir twit-bot</p>
            <p><em><span className='code'>mkdir</span> is a terminal command that makes a new folder in your directory named whatever follows, in this example it is twit-bot.</em></p>
          </li>
          <li>
            <p>Go into your twit-bot folder</p>
            <p className='code'>cd twit-bot</p>
            <p><em><span className='code'>cd</span> is a terminal command that opens the folder that follows the command, again this example is twit-bot.</em></p>
          </li>
          <li>
            <p>Make a new Node.js project.</p>
            <p className='code'>npm init</p>
            <p>Click enter until the prompts ask you "yes" or "no" for the package.json file. Type "yes" and press enter.</p>
            <p><em><span className='code'>npm init</span> creates a package.json file for this folder, creating a new Node project and allows you to download whatever npm's (API's) you want.</em></p>
          </li>
          <li>
            <p>Make all the files you will need for this project. These will all be used in the second section when you make your bot.</p>
            <p className='code'>touch config.js bot.js tokens.js .gitignore</p>
            <p><em><span className='code'>touch</span> is a terminal command that creates new files in the folder you are in.</em></p>
          </li>
          <li>
            <p>Install the Twitter API (twit npm) that you will need to make your Twitter bot.</p>
            <p className='code'>npm install twit --save</p>
            <p><em><span className='code'>npm install</span> downloads the API into your folder and <span className='code'>--save</span> automatically saves it to your package.json (this is important if another developer wants to download your project and run it on their own).</em></p>
          </li>
          <li>
            <p>Open your folder with all the files in your atom editor.</p>
            <p className='code'>atom .</p>
            <p><em><span className='code'>atom</span> opens all the files specified in your atom editor and <span className='code'>.</span> opens all the files in the folder.</em></p>
          </li>
        </ul>
      </ol>
      <br />
      <div className='video-center'>
        <ReactPlayer url='https://youtu.be/DmQNfBNC2jg' />
      </div>
    </div>
  )
}
