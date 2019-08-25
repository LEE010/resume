import React from 'react';
import './scss/Header.scss'

function Header() {
  return (
    <section className='header' id='Header' style={{backgroundImage: 'url("images/header.jpg")'}}>
      <div className='resume-title'>
        <h1>더 나은 결과를 위해 최선을 다합니다.</h1>
      </div>
    </section>
  );
}
export default Header;
