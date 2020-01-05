import React, { Component } from "react";

class Logging extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div class="col-10"></div>
        <div class="col-4">
          <button>Zaloguj</button>
          <button>Załóż konto</button>
        </div>
        <div class="col-2"></div>
      </div>
    );
  }
}

export default Logging;
