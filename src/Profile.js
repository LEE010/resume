import React from 'react';
import ProfileImg from './profile/ProfileImg'
import ProfileContent from './profile/ProfileContent'
import { Grid } from '@material-ui/core';
import './scss/Profile.scss';

function Profile() {
  return (
    <section className="Profile">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
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

export default Profile;
