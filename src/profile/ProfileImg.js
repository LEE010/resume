import React from 'react';
import profile_img from './profile.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width:'80%',
    height:'80%',
  },
});

function ProfileImg() {
  const classes = useStyles();

  return (
    <Avatar alt="profile" src={ profile_img } className={classes.avatar}/>
  );
}
export default ProfileImg;
