import React, { Component } from "react";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li>
          <a href="#">Start</a>
        </li>
        <li>
          <a href="#">O co chodzi?</a>
        </li>
        <li>
          <a href="#">O nas</a>
        </li>
        <li>
          <a href="#">Fundacja i organizacje</a>
        </li>

        <li>
          <a href="#">Kontakt</a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
