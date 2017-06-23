import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Link} from 'react-router'

const style = {margin: 12}

export default class extends React.Component {
  render () {
    return (
      <div className='center v-center'>
        {/* <MuiThemeProvider> */}
          {/* <div> */}
            <div className='mui--text-dark-secondary mui--text-display1'>Time to make your twitter bot</div><br />
            <div className='login-img'><img src='https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/12/04/101245423-robot.530x298.jpg?v=1386157003' /></div>
            <br />
            <TextField
              hintText='email@email.com'
              floatingLabelText='Email'
            /><br />
            <TextField
              hintText='abc123'
              floatingLabelText='Password'
              type='password'
            /><br />
            <RaisedButton label='Login' style={style} />
            <p>Or, <Link to='signup' className='blue-color'>create an account</Link>.</p>
        {/* </div> */}
      {/* </MuiThemeProvider> */}
      </div>
    )
  }
}
