import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
// importing BrowserRouter + Route components from react-router-dom
// also aliasing BrowserRouter as Router
import {BrowserRouter as Router, Route} from 'react-router-dom'


// returning router as the top-level component
// nesting the Route component inside the Router component...
// to display the navbar + certain components based on 3 different routes
ReactDOM.render((
  <Router>
    <>
      <Navbar /><br></br>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </>
  </Router>),
  document.getElementById('root')
)
