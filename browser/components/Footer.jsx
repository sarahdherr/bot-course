// import React, {Component} from 'react'
// import FontIcon from 'material-ui/FontIcon'
// import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
// import Paper from 'material-ui/Paper'
// import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
//
// const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>
// const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>
// const nearbyIcon = <IconLocationOn />
//
// /**
//  * A simple example of `BottomNavigation`, with three labels and icons
//  * provided. The selected `BottomNavigationItem` is determined by application
//  * state (for instance, by the URL).
//  */
// export default class BottomNavigationExampleSimple extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       selectedIndex: 0,
//     }
//   }
//
//   select (index) {
//     this.setState({selectedIndex: index})
//   }
//
//   render () {
//     return (
//       <Paper zDepth={1} className='footer'>
//         <BottomNavigation selectedIndex={this.state.selectedIndex}>
//           <BottomNavigationItem
//             label='Home'
//             icon=<span>Home</span>
//             onTouchTap={() => this.select(0)}
//           />
//           <BottomNavigationItem
//             label='Favorites'
//             icon={favoritesIcon}
//             onTouchTap={() => this.select(1)}
//           />
//           <BottomNavigationItem
//             label='Logout'
//             icon=<span>Wave</span>
//             onTouchTap={() => this.select(2)}
//           />
//         </BottomNavigation>
//       </Paper>
//     )
//   }
// }
//
// // export default BottomNavigationExampleSimple

import React from 'react'

export default (props) => {
  return (
    <div className='footer'>
      <div id='foot-home'><span className='fa fa-home'></span></div>
      <div id='foot-contact'><span className='fa fa-pencil-square-o'></span></div>
    </div>
  )
}
