import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logging extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div class="col-10"></div>
        <div class="loggingButtons col-5">
          <button>
            <Link to="/logowanie">Zaloguj</Link>
          </button>
          <button>
            <Link to="/rejestracja">Załóż konto</Link>
          </button>
        </div>
        <div class="col-1"></div>
      </div>
    );
  }
}

export default Logging;
