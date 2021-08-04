import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Projects_Sub from './components/pages/Projects_Sub';
import ARProjSection from './components/Projects_Sub/ARProjSection';
import Skills from './components/pages/Skills';
import VirtualBox from './components/pages/VirtualBox';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import ActiveDirectory from './components/pages/ActiveDirectory'
import ADAccountCreation from './components/pages/ADAccountCreation';
import Lab from './components/pages/Lab';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component= {Home} />
          <Route path="/Projects" component= {Projects} />
          <Route path="/Projects_Sub" component= {Projects_Sub} />
          <Route path="/Portfolio_Project" component= {ARProjSection} />
          <Route path="/Skills" component= {Skills} />
          <Route path="/VirtualBox" component= {VirtualBox} />
          <Route path='/ActiveDirectory' component={ActiveDirectory} />
          <Route path="/Contact" component= {Contact} />
          <Route path="/ADAccountCreation" component={ADAccountCreation} />
          <Route path="/Lab" component={Lab} />
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
