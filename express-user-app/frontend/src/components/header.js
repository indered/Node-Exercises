import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <ul className="header">
        <li>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link to="/add">
            <h3>Add User</h3>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <h3>About Dev</h3>
          </Link>
        </li>
      </ul>
    );
  }
}
