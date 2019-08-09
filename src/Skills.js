import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import SkillsList from './skills/SkillsList'

class Skills extends Component {
  static defaultProps = {
    lists: [
      { 'head':'coding',
        'items':[{ 'name':'C', 'level':3 },
                { 'name':'C++', 'level':2 },
                { 'name':'Java', 'level':2 },
                { 'name':'JavaScript', 'level':3 },
                { 'name':'Python3', 'level':4 },
                { 'name':'Ruby', 'level':3 },
                { 'name':'HTML', 'level':3 },
                { 'name':'CSS', 'level':2 }] }
      ]
    }

  render() {
    const { lists } = this.props;
    const skills = lists.map(
      list => (<SkillsList key={'skills-'+list.head} head={list.head} items={list.items}/>)
    );

    return (
      <section>
        <h1>Skills</h1>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            {skills}
          </Grid>
      </section>
    );
  }
}
export default Skills;
