import './Header.css';

import React from 'react';

const Header = (props) => {
  return (
    <section className="header-container">
    <h2 className="header-title">Rancid Tomatillos</h2>
      <article className="header-login">
        <button className="login-button" onClick={props.showLoginPage}>LogIn</button>
      </article>
    </section>
  )
}

export default Header;
