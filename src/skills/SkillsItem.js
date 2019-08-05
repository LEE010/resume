import React, { Component, Fragment } from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';

class SkillsItem extends Component {
    render() {
      const item = this.props.item;

      return (
        <Fragment>
          <Grid item sm={12} md={6}>
            <Paper>
              <Typography>
                {item.name}
              </Typography>
              <Typography>
                {item.level}
              </Typography>
            </Paper>
          </Grid>
        </Fragment>
      );
    }
}
export default SkillsItem;
