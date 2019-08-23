import React from 'react';
import ProfileImg from './profile/ProfileImg'
import ProfileContent from './profile/ProfileContent'
import { Grid } from '@material-ui/core';
import './scss/Profile.scss';

function Profile() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="Profile"
    >
      <Grid item container justify="center" alignItems="center">
        <ProfileImg/>
      </Grid>
      <Grid direction="column" item container>
        <ProfileContent/>
      </Grid>
    </Grid>
  );
}

export default Profile;
