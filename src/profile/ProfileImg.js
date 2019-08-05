import React from 'react';
import profile_img from './profile.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
});

function ProfileImg() {
  const profileStyles = useStyles();

  return (
    <Avatar alt="profile" src={ profile_img } className={ profileStyles.avatar }/>
  );
}
export default ProfileImg;
