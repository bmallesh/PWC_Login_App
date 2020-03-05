import React, { Component } from "react";
import { connect } from "react-redux";

import "./login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handlChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  submit() {
    alert(this.state.password);
  }

  render() {
    console.log(this.props);
    return (
      <div className="log-form">
        <h2>Login to your account</h2>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handlChange(e)}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handlChange(e)}
            placeholder="password"
          />
          <button type="submit" className="btn" onClick={() => this.submit()}>
            Login
          </button>
          <a className="forgot" href="#">
            Forgot Username?
          </a>
        </form>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return state;
};
export default connect(MapStateToProps)(Login);
