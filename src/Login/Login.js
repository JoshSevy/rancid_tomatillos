import './Login.css'

import React, { Component } from 'react';

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
        <button className="close-login-form" onClick={this.props.closeLoginPage}>x</button>
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
