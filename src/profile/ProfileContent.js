import React from 'react';
import { Typography } from '@material-ui/core';
import DevIcon from "devicon-react-svg";
import Icon from '@material-ui/core/Icon';

function ProfileContent() {
  return (
    <div className="right">
      <h2>이동현</h2>
      <h3>Lee Dong Hyun</h3>
      <p>
        <Icon>phone</Icon>010-2055-0328

      </p>
    </div>
  );
}
export default ProfileContent;
