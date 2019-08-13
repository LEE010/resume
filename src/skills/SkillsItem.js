import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import '../scss/Skills.scss';

function SkillsItem(item, skill_name) {
  return (
    <Grid item xs={12} sm={6}
      key={ skill_name+'-'+item.name}
      >
      <Paper className='item_div'>
        <h3 className='head'>
          {item.name}
        </h3>
        <Typography>
          {item.level}
        </Typography>
      </Paper>
    </Grid>
  );
}
export default SkillsItem;
