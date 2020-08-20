import './Header.css';

import React from 'react';

const Header = (props) => {
  return (
    <section className="header-container">
    <h2 className="header-title">Rancid Tomatillos</h2>
      <article className="header-login">
        {!props.user ?
          <button className="login-button" onClick={props.showLoginPage}>LogIn</button>
         :
           <section>
            <h4>Hello, {props.user.name}!</h4>
            <button className="logout-button" onClick={props.logOut}>LogOut</button>
          </section>
        }
      </article>
    </section>
  )
}

export default Header;
