import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import HomeScreen from './components/homescreen.js';
import AboutScreen from './components/aboutscreen.js';
import ResumeScreen from './components/resumescreen.js';

import Project1Screen from './components/project1screen.js';
import Project2Screen from './components/project2screen.js';
import Project3Screen from './components/project3screen.js';

class App extends Component {
  componentDidMount(){
    document.title = "Cody's Website"
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Route exact path="/" component={HomeScreen} />
            <Route path="/resume" component={ResumeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/3dprinter" component={Project1Screen} />
            <Route path="/ionthruster" component={Project2Screen} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
