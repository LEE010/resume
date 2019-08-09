import React, { Component, Fragment } from 'react';
import { Typography, Grid } from '@material-ui/core';
import SkillsItem from './SkillsItem';


class SkillsList extends Component {
    render() {
      const items = this.props.items.map(
      item => (<SkillsItem key={this.props.head+item.name} item={item}/>)
    );
        return (
          <Fragment>
            <h2>{this.props.head}</h2>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              {items}
            </Grid>
        </Fragment>
        );
    }
}
export default SkillsList;
