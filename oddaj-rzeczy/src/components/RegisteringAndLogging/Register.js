import React, { Component } from "react";
import Navigation from "../Home/Navigation";
import Logging from "../Home/Logging";
import { Link } from "react-router-dom";
class Register extends Component {
  state = {};
  render() {
    return (
      <section className="register">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-10">
            <Logging />
            <Navigation />
          </div>
        </div>
        <div className="registerDiv">
          <h1>Załóż konto</h1>
          <div className="decorationImage7"></div>
          <div className="registerForm">
            <form>
              <label>
                Email
                <input type="email" />
              </label>
              <label>
                Hasło
                <input type="password" />
              </label>
              <label>
                Powtórz hasło
                <input type="password" />
              </label>
            </form>
          </div>
          <div className="registerButtons">
            <button>
              <Link to="/logowanie">Zaloguj się</Link>
            </button>
            <button>
              <Link to="/rejestracja">Załóż konto</Link>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
