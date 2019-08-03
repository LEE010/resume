import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './NavBar'

class ResumeAppBar extends Component {
    render() {
        return (
          <Fragment>
            <AppBar color="primary">
              <Toolbar>
                <TypoGraphy variant="title"
                  color="inherit"
                >
                  LEEDONGHYUN
               </TypoGraphy>
               <NavBar/>
              </Toolbar>
            </AppBar>
          </Fragment>

        );
    }
}
export default ResumeAppBar;
