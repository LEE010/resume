import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillsItem from './SkillsItem';

function SkillsList(skill) {
  const items = skill.items.map(item => SkillsItem(item, skill.head));

  return (
    <div key={'skills-'+ skill.head}>
      <h2>{skill.head}</h2>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {items}
      </Grid>
    </div>
  );
}
export default SkillsList;
