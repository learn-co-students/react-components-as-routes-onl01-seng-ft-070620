// defining a navbar component that will always display
// also importing NavLink component
import React from 'react'
import {NavLink} from 'react-router-dom'

// add basic styling for NavLinks
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
      <NavLink
      to="/"
      exact // only set activeStyle when route is deeply equal to link
      style={link} // add styling to Navlink
      activeStyle={{ // add prop for activeStyle
        background: 'darkblue'
      }}
      >Home</NavLink>
      <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >About</NavLink>
      <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Login</NavLink>
      </div>
    )
  }

}
