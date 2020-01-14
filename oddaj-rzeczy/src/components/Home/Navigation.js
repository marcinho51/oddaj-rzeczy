import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";

const options = {
  duration: 500,
  activeClass: "active"
};
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
                  <ScrollLink to="header" {...options}>
                    <a href="#">Start</a>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="fourSteps" {...options}>
                    <a href="#">O co chodzi?</a>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="aboutUs" {...options}>
                    <a href="#">O nas</a>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="whoDoWeHelp" {...options}>
                    <a href="#">Fundacja i organizacje</a>
                  </ScrollLink>
                </li>

                <li>
                  <ScrollLink to="contact" {...options}>
                    <a href="#">Kontakt</a>
                  </ScrollLink>
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
