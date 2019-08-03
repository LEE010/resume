import React, { Component, Fragment } from 'react';
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container fixed>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
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
