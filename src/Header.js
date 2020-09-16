import React from 'react';
import './scss/Header.scss'

function Header() {
  return (
    <section className='header' id='Header' style={{backgroundImage: 'url("images/header.jpg")'}}>
        <h1 className='resume-title'>호기심 많은 예비 개발자 이동현입니다.</h1>
    </section>
  );
}
export default Header;
