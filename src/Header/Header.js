import './Header.css';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userApi } from '../helpers/apis';

const Header = (props) => {
  console.log(props)
  return (
    (props.isUserAuthenticated) ? 
    <section className="header-container">
      <h2
        className="header-title"
      >
        Welcome `${props.user.name}!`
    </h2>
      <article className="header-login">
        <NavLink to="/">LogOut</NavLink>
      </article>
    </section> 
    :
    <section className="header-container">
      <h2 
        className="header-title"
      >
        Welcome To Rancid Tomatillos
      </h2>
      <article className="header-login">
      <NavLink to="/login">LogIn</NavLink>
      </article>
    </section> 
  )
}

export default Header;
