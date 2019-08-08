import React from 'react';
import { Typography } from '@material-ui/core';
import DevIcon from "devicon-react-svg";
import Icon from '@material-ui/core/Icon';

function ProfileContent() {
  return (
    <div>
      <h2>이동현</h2>
      <h3>Lee Dong Hyun</h3>
      <p>
        <Icon>phone</Icon>010-2055-0328
        <DevIcon icon="github_badge" />
        <Icon>mail_outline</Icon>
      </p>
    </div>
  );
}
export default ProfileContent;
