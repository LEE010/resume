import React from 'react';
import { Grid } from '@material-ui/core';
import './scss/Header.scss'
import HeaderImg from './img/header.jpg';

function Header() {
  return (
    <section className='header'>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={5}
        >
        <img src={HeaderImg}></img>
        <div className='resume-title'>
          <h1>더 나은 결과를 위해 최선을 다합니다.</h1>
        </div>
      </Grid>

    </section>
  );
}
export default Header;
