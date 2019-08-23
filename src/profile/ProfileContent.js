import React from 'react';
import IconButton from '@material-ui/core/IconButton';

function ProfileContent() {
  return (
    <>
      <h2>이동현</h2>
      <h3>Lee Dong Hyun</h3>
      <p>
        <IconButton aria-label="github" component='a' href='https://github.com/LEE010'>
          <div className='icon'></div>
        </IconButton>

      </p>
    </>
  );
}
export default ProfileContent;
