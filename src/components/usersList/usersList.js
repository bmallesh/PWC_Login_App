import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./usersList.css";

class UsersList extends Component {
  render() {
    if (this.props && !this.props.isLogdni) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container marginTop30">
        <h2>Users List</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>PhoneNo</th>
            </tr>
          </thead>
          <tbody>
            {this.props.usersList.map((data, i) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
                <td>{data.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(UsersList);
