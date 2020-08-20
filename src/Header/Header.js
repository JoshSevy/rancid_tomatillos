import './Header.css';

import React from 'react';

const Header = (props) => {
  return (
    <section className="header-container">
    <h2 className="header-title">{props.title}</h2>
      <article className="header-login">
        <button className="login-button" onClick={props.buttonLog}>{props.buttonName}</button>
      </article>
    </section>
  )
}

export default Header;
