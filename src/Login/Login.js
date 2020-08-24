import './Login.css'

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      error: '',
      email: '',
      password: ''
    };
  }

  fetchUserData(user) {
    const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(url, options)
      .then(response => response.json())
      .then(userData => this.props.getUserData(userData.user))
      .catch(error => {
        console.log('invalid user', error)
        this.setState({ error: 'Invalid email or password' })
      })
  }

  userLoginInfo = (event) => {
    const formData = event.target.name;
    const formValue = event.target.value;
    this.setState({[formData]: formValue});
  }

  loginUser = (event) => {
    event.preventDefault();
    const user = {
        email: this.state.email,
        password: this.state.password
      };

    this.fetchUserData(user);
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