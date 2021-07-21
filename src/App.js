import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Projects_Sub from './components/pages/Projects_Sub';
import ARProjSection from './components/ARProjSection';
import Skills from './components/pages/Skills';
import VirtualBox from './components/pages/VirtualBox';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/portfolio_web" exact component= {Home} />
          <Route path="/Projects" component= {Projects} />
          <Route path="/Projects_Sub" component= {Projects_Sub} />
          <Route path="/Portfolio_Project" component= {ARProjSection} />
          <Route path="/Skills" component= {Skills} />
          <Route path="/VirtualBox" component= {VirtualBox} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
