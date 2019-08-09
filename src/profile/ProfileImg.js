import React from 'react';
import profile_img from './profile.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

function ProfileImg() {
  return (
    <Avatar alt="profile" src={ profile_img } className='left'/>
  );
}
export default ProfileImg;
