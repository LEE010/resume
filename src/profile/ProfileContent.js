import React from 'react';
import IconButton from '@material-ui/core/IconButton';

function ProfileContent() {
  return (
    <>
      <strong>이동현</strong>
      <em className='subname'>Lee Dong Hyun</em>
      <div>
        <IconButton aria-label="github" component='a' href='https://github.com/LEE010'>
          <div className='icon' style={{backgroundImage: 'url("images/github-brands.svg")'}} ></div>
        </IconButton>
      </div>
    </>
  );
}
export default ProfileContent;
