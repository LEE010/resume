import React, { Component, Fragment } from 'react';
import { Typography, Grid } from '@material-ui/core';
import SkillsItem from './SkillsItem';

class SkillsList extends Component {
    render() {
      const items = this.props.items.map(
      item => (<SkillsItem id={item.name} item={item}/>)
    );
        return (
          <Fragment>
            <Typography variant='h3'>{this.props.head}</Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {items}
            </Grid>
        </Fragment>
        );
    }
}
export default SkillsList;
