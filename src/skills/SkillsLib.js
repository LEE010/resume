import React, { Component, Fragment } from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';

function SkillsLib() {
    render() {
        return (
          <section>
            <Typography variant='h1'>Skills</Typography>
              <Grid
                container
                direction="col"
                justify="center"
                alignItems="center"
              >
                <Grid item sm={12} md={6}>
                  <Paper>xs=6 sm=3</Paper>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Paper>xs=6 sm=3</Paper>
                </Grid>
              </Grid>
          </section>
        );
    }
}
export default SkillsLib;
