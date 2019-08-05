import React from 'react';
import { Typography } from '@material-ui/core';
import DevIcon from "devicon-react-svg";
import Icon from '@material-ui/core/Icon';

function ProfileContent() {
  return (
    <div>
      <Typography variant='h3'>이동현</Typography>
      <Typography variant='h4'>Lee Dong Hyun</Typography>
      <Typography>
        <Icon>phone</Icon>010-2055-0328
        <DevIcon icon="github_badge" />
        <Icon>mail_outline</Icon>
      </Typography>
    </div>
  );
}
export default ProfileContent;
