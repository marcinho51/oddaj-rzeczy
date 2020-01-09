import React, { Component } from "react";
import { Link } from "react-router-dom";

class FourSteps extends Component {
  state = {};
  render() {
    return (
      <section class="fourSteps">
        <div class="fourStepsHeadline">
          <h1>Wystarczą 4 proste kroki</h1>
          <div class="decorationImage2"></div>
        </div>
        <div class="row fourStepsSteps">
          <div class="col-4"></div>
          <div class="col-2 fourStepsStep">
            <div class="fourStepsImage1"></div>
            <h5>Wybierz rzeczy</h5>
            <h5>_______________</h5>
            <h5>ubrania, zabawki, sprzęt, inne</h5>
          </div>
          <div class="col-2 fourStepsStep">
            <div class="fourStepsImage2"></div>
            <h5>Spakuj je</h5>
            <h5>_______________</h5>
            <h5>skorzystaj z worków na śmieci</h5>
          </div>
          <div class="col-2 fourStepsStep">
            <div class="fourStepsImage3"></div>
            <h5>Zdecyduj komu chcesz pomóc</h5>
            <h5>_______________</h5>
            <h5>wybierz zaufane miejsce</h5>
          </div>
          <div class="col-2 fourStepsStep">
            <div class="fourStepsImage4"></div>
            <h5>Zamów kuriera</h5>
            <h5>_______________</h5>
            <h5>kurier przyjedzie w dogodnym terminie</h5>
          </div>
          <div class="col-3"></div>
        </div>
        <div class="fourStepsButton">
          <button>
            <Link to="/logowanie">Oddaj rzeczy</Link>
          </button>
        </div>
      </section>
    );
  }
}

export default FourSteps;
