import React, { Component, Fragment } from 'react';
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import { Container, Divider } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Fragment>
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
