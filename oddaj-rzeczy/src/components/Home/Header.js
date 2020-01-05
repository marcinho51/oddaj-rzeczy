import React, { Component } from "react";
import Navigation from "./Navigation";
import Logging from "./Logging";

class Header extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div class="col-7 headerImage"></div>
        <div class="col-9">
          <Logging />

          <Navigation />
        </div>
      </div>
    );
  }
}

export default Header;
