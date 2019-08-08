import React, { Component, Fragment } from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import '../scss/Skills.scss';

// console.log(MyComponent)

class SkillsItem extends Component {
    render() {
      const item = this.props.item;

      return (
        <Fragment>
          <Grid item xs={12} sm={6} className='Skills'>
            <Paper className='item_div'>
              <h3 className='head'>
                {item.name}
              </h3>
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
