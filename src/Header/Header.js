import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    (props.isUserAuthenticated) ?
    <section className="header-container">
      <article className="header-favorites">
        <NavLink
          to="/favorites"
          className="favorites-button"
        >
          My Favorites
        </NavLink>
      </article>
      <h2 className="header-title">
        Welcome {props.user.name}!
      </h2>
      <article className="header-login">
        <NavLink
          to="/"
          onClick={props.logOut}
          className='login-button'
        >
          LogOut
        </NavLink>
      </article>
    </section>
    :
    <section className="header-container">
      <h2 className="header-title">
        Welcome To Rancid Tomatillos
      </h2>
      <article className="header-login">
        <NavLink
          to="/login"
          className="login-button"
        >
          LogIn
        </NavLink>
      </article>
    </section>
  )
}

export default Header;
