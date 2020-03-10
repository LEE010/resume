import React from 'react';
import './scss/Header.scss'

function Header() {
  return (
    <section className='header' id='Header' style={{backgroundImage: 'url("images/header.jpg")'}}>
        <h1 className='resume-title'>더 나은 결과를 위해 최선을 다합니다.</h1>
    </section>
  );
}
export default Header;
