import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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

  submit(e) {
    e.preventDefault();
    if (!!this.state.username && !!this.state.password) {
      this.setState({ errMsg: "" });
      this.props.dispatch({
        type: "USERLOGIN",
        payload: {
          username: this.state.username,
          password: this.state.password
        }
      });
    } else {
      this.setState({ errMsg: "Enter UserName and Password." });
    }
  }

  render() {
    console.log(this.props);
    if (this.props && this.props.isLogdni) {
      return <Redirect to="/usersList" />;
    }
    return (
      <div>
        {this.props && this.props.isErr && (
          <p class="text-danger marginTop30 text-center">
            {this.props && this.props.errMsg}
          </p>
        )}
        {this.state && !!this.state.errMsg && (
          <p class="text-danger marginTop30 text-center">
            {this.state && this.state.errMsg}
          </p>
        )}
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
            <button type="submit" className="btn" onClick={e => this.submit(e)}>
              Login
            </button>
            <a className="forgot" href="#">
              Forgot Username?
            </a>
          </form>
        </div>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return state;
};

export default connect(MapStateToProps)(Login);
