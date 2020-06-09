import React from 'react';
import './App.css';
import Navigation from './Nav.js'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Unsplash from './ProjectPages/unsplash'
import Arbiter from './ProjectPages/arbiter'
import About from './About.js'
import Home from './Home.js'
import Contact from './Contact.js'

function App() {
  return (
    <div>
      <Router>
    <Navigation />
    <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/unsplash'><Unsplash /></Route>
        <Route path='/arbiter'><Arbiter /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/contact'><Contact /></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
