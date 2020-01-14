import React, { Component } from "react";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <section className="navigation">
        <div className="row">
          <div className="col-5"></div>
          <div className="col-10">
            <nav>
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
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default Navigation;
