import './Login.css'

import React, { Component } from 'react';
import {link, Link} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      error: '',
      email: '',
      password: '',
      user: null
    };
    this.loginUser = this.loginUser.bind(this)
  }

  userLoginInfo = (event) => {
    const formData = event.target.name;
    const formValue = event.target.value;
    this.setState({[formData]: formValue});
  }

  loginUser(event) {
    event.preventDefault();
    const user = {
        email: this.state.email,
        password: this.state.password
      };

    this.props.fetchUserData(user)
    this.props.closeLoginPage();
  }

  render() {
      return (
      <section className="Login">
      <Link to="/">
        <button 
          className="close-login-form"
        >
          <span>&#215;</span>
        </button>
      </Link>
        <h2>Rancid Tomatillos Login</h2>
          <form className="login-form">
            <input
              type="text"
              placeholder="user email"
              value={this.state.email}
              name="email"
              onChange={this.userLoginInfo}
            />
            <input
              type="password"
              placeholder="user password"
              value={this.state.password}
              onChange={this.userLoginInfo}
              name="password"
            />
            <Link to="/">
              <button
                onClick={this.loginUser}
              >
              Submit
              </button>
            </Link>
          </form>
        </section>
      )
  }
}

export default Login;
