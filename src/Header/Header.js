import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <section className="header-container">
    <h2 className="header-title">{props.title}</h2>
      <article className="header-login">
        <Link to="/login">
          <button 
            className="login-button" 
            onClick={props.buttonDisplay}>
            {props.buttonText}
          </button>
        </Link>
      </article>
    </section>
  )
}

export default Header;
