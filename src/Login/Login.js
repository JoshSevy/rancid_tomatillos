import './Login.css'

import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  userLoginInfo = (event) => {
    const formData = event.target.name;
    const formValue = event.target.value;
    this.setState({[formData]: formValue});
    console.log(this.state)
  }

  loginUser(event) {
    event.preventDefault();
    
    //fetch user from api 
    // or send data to App to pull data there
  }

  render() {
    return (
      <section className="Login">
      <h2>Rancid Tomatillos</h2>
        <form className="login-form">
          <input 
            type="text" 
            placeholder="user email" 
            value={this.state.email} 
            name="email" 
            onChange={this.userLoginInfo}
          />
          <input 
            type="text" 
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