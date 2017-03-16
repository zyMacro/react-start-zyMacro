"use strict";
//基本组件
import React, {Component} from 'react'
import {render} from 'react-dom'


import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../pages/home'
import About from '../pages/about'
import Nba from '../pages/nba'


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/nba">NBA</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route exact path="/nba" component={Nba}/>
    </div>
  </Router>
)

render(<BasicExample/>, document.getElementById('app'));
