import logo from './logo.svg';
import './App.css';

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles.css';  // Import the external CSS

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';


function App() {
  return (
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
