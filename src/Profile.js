import React, { Component } from 'react';
import ProfileImg from './profile/ProfileImg'
import ProfileContent from './profile/ProfileContent'
import { Grid } from '@material-ui/core';
import './scss/Profile.scss';

class Profile extends Component {
    render() {
        return (
          <section className="Profile">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={5}
            >
              <Grid item xs={12} sm={6}>
                <ProfileImg/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ProfileContent/>
              </Grid>
            </Grid>
          </section>
        );
    }
}
export default Profile;
