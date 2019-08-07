import React, { Component, Fragment } from 'react';
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Container, Divider } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <Container fixed>
          <Profile/>
          <Divider/>
          <About />
          <Divider/>
          <Skills />
          <Divider/>
          <Experience />
          <Divider/>
          <Projects />
        </Container>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
