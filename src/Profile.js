import React, { Component, Fragment } from 'react';
import ProfileImg from './profile/ProfileImg'
import ProfileContent from './profile/ProfileContent'
import './scss/Profile.scss';
import { Grid } from '@material-ui/core';
import profile_img from './img/profile.jpg';

class Profile extends Component {
    render() {
        return (
          <section className="Profile">
            Profile
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <ProfileImg/>
              </Grid>
              <Grid item xs={12}>
                <ProfileContent/>
              </Grid>
            </Grid>
          </section>
        );
    }
}
export default Profile;
