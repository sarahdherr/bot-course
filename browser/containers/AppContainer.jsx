import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AppContainer (props) {
  return (
    <MuiThemeProvider>
      <div>
        {
          props.children
        }
        <Footer />
      </div>
    </MuiThemeProvider>
  )
}
