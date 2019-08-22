import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DrawerAppBar from './DrawerAppBar'
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import { Container } from '@material-ui/core';

const Styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <DrawerAppBar/>
        <main className={classes.content}>
            <Container maxWidth='md'>
              <Header/>
              <About />
              <Skills />
              <Experience />
              <Projects />
            </Container>
            <Footer/>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(App);
