import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Logging from "./Logging";

class Header extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div class="col-6 headerImage"></div>
        <div class="col-10">
          <Logging />
          <Navigation />
          <div class="row">
            <div class="col-3"></div>
            <div class="headerMain col-9">
              <div class="headerHeadline">
                <h3>Zacznij pomagać!</h3>
                <h3>Oddaj niechciane rzeczy w zaufane ręce</h3>
              </div>
              <div class="decorationImage1"></div>
              <div class="headerButtons">
                <button>
                  <Link to="/logowanie">Oddaj rzeczy</Link>
                </button>
                <button>
                  <Link to="/logowanie">Zorganizuj zbiórkę</Link>
                </button>
              </div>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
