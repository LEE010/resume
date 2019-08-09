import React, { Component, Fragment } from 'react';
import Header from "./Header"
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Container } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        
        <Container fixed>
          <Profile/>
          <About />
          <Skills />
          <Experience />
          <Projects />
        </Container>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
