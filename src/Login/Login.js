import './Login.css'

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { userApi } from '../apis/apis';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      error: '',
      email: '',
      password: '',
      user: {},
      userLoggedIn: false
    };
  }

  userLoginInfo = (event) => {
    const formData = event.target.name;
    const formValue = event.target.value;
    this.setState({[formData]: formValue});
  }

  loginUser = async (event) => {
    this.setState({user: {}, error: ''})
    event.preventDefault();
    const user = {
        email: this.state.email,
        password: this.state.password
      };

    await userApi(user)
    .then(response => this.setState({...response, email: '', password: ''}))
    await this.validateLogin();
    await this.props.getUserData(this.state.user, this.state.userLoggedIn)
  }

  validateLogin = async () => {
    (this.state.error === '') ? this.setState({userLoggedIn: true}) : this.setState({userLoggedIn: false})
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
              <button
                onClick={this.loginUser}
              >
              Submit
              </button>
          </form>
        </section>
      )
  }
}

export default Login;

Login.propTypes = {
  error: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
};