import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link color="inherit" href="https://github.com/LEE010/resume">
        Copyright © LEE DONG HYUN
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <MadeWithLove />
      </Container>
    </footer>
  );
}
