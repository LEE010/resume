import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Profile from "./Profile";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import { Container } from '@material-ui/core';

const drawerWidth = 240;

const Styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
});

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

class App extends Component {
  constructor(props){
    super(props);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.state = {
      open: false,
      // setOpen: false,
      direction: false,
    };
  }

  handleDrawerOpen() {
    this.setState({
      open:true,
      direction:true,
    });
  };

  handleDrawerClose() {
    this.setState({
      open:false,
      direction:false,
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>
          <CssBaseline />
          <HideOnScroll {...this.props}>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <Typography variant="h6" noWrap>
                  <Link href='#Header' color="inherit" underline='none'>
                    LEE-DONG-HYUN
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <div>
              <Profile/>
            </div>
            <Divider />
            <List>
              {['About', 'Skills', 'Experience', 'Projects'].map((text) => (
                <ListItem button key={text} component='a' href={'#'+text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main className={classes.content}>
            <Header/>
              <Container fixed>
                <About />
                <Skills />
                <Experience />
                <Projects />
              </Container>
              <Footer/>
          </main>
        </div>

      </Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(App);
