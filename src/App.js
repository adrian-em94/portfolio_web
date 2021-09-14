import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import ARProjSection from "./components/Projects/ARProjSection";
import Skills from "./components/pages/Skills";
import VirtualBox from "./components/pages/VirtualBox";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import ActiveDirectory from "./components/pages/Skills/ActiveDirectory";
import ADAccountCreation from "./components/pages/Skills/ADAccountCreation";
import Lab from "./components/pages/Skills/Lab";
import SharedFolder from "./components/pages/Skills/SharedFolder";
import Remote from "./components/pages/Skills/Remote";
import AZ_CustomDomain from "./components/pages/Skills/AZ_CustomDomain";
import AZ_CreateResourceGroup from "./components/pages/Skills/AZ-CreateResourceGroup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Portfolio_Project" component={ARProjSection} />
          <Route path="/Skills" component={Skills} />
          <Route path="/VirtualBox" component={VirtualBox} />
          <Route path="/ActiveDirectory" component={ActiveDirectory} />
          <Route path="/Contact" component={Contact} />
          <Route path="/ADAccountCreation" component={ADAccountCreation} />
          <Route path="/Lab" component={Lab} />
          <Route path="/SharedFolder" component={SharedFolder} />
          <Route path="/Remote" component={Remote} />
          <Route path="/AZ_CustomDomain" component={AZ_CustomDomain} />
          <Route
            path="/AZ_CreateResourceGroup"
            component={AZ_CreateResourceGroup}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
