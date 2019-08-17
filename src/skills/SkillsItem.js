import React from 'react';
import { Typography, Grid, Paper, LinearProgress, Chip } from '@material-ui/core';
import { lighten, withStyles } from '@material-ui/core/styles';
import '../scss/Skills.scss';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    borderRadius: 20,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

function TechChips(tech, name) {
  return(
    <Chip size="small" label={tech} key={name+'-'+tech}/>
  );
}

function SkillsItem(item) {
  const name = item.name
  const chips = item.techs.map(tech => TechChips(tech, name));

  return (
    <Grid item xs={12} sm={6}
      key={ '-'+ name}
      >
      <Paper className='item_div'>
        <h5 className='head'>
          {name}
        </h5>
        <div>{chips}</div>
        <BorderLinearProgress variant="determinate" value={item.level*20} />
      </Paper>
    </Grid>
  );
}
export default SkillsItem;
