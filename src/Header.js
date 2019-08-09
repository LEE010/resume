import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import NavBar from './NavBar'
import './scss/Header.scss'
// import { Grid } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
          <header>
            <NavBar/>
            <section>
              <Grid
                container
                justify="center"
                alignItems="center"
                spacing={5}
                className='header'
                >
                <div className='resume-title'>
                  <h1>가나다라마바사아자차카타파하</h1>
                </div>
              </Grid>

            </section>
          </header>
        );
    }
}
export default Header;
