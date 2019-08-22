import React from 'react';
import { Typography, Grid, Paper, LinearProgress, Chip } from '@material-ui/core';
import { lighten, withStyles, makeStyles } from '@material-ui/core/styles';
import '../scss/Skills.scss';

const useStyles = makeStyles(theme => ({
  progressDiv: {
    margin: theme.spacing(1),
  }
}));

const BorderLinearProgress = withStyles( {
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

function SkillsItem(item) {
  const name = item.name
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}
      key={ '-'+ name}
      >
      <Paper className='item_div'>
        <h5 className='head'>
          {name}
        </h5>
        <div className={classes.progressDiv}>
          <BorderLinearProgress
            variant="determinate"
            value={item.level*20}
            />
        </div>

      </Paper>
    </Grid>
  );
}
export default SkillsItem;
