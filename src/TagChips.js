import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(0.25),
  },
  chip: {
    margin: theme.spacing(0.25),
  },
}));

function TagChip(tag, name, style) {
  return(
    <Chip size="small" label={tag} key={name+'-'+tag} className={style}/>
  );
}

function TagChips(tags, name) {
  const classes = useStyles();
  const chips = tags.map(tag => TagChip(tag, name, classes.chip ));

  return (
    <div className={classes.chips}>
      {chips}
    </div>
  );
}
export default TagChips;
