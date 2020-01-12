import React, { Component } from "react";
import Navigation from "../Home/Navigation";
import Logging from "../Home/Logging";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {};
  render() {
    return (
      <section className="login">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-10">
            <Logging />
            <Navigation />
          </div>
        </div>
        <div className="loginDiv row">
          <h1>Zaloguj się</h1>
          <div className="decorationImage6"></div>
          <div className="loginForm">
            <form>
              <label>
                Email
                <input type="email" />
              </label>
              <label>
                Hasło
                <input type="password" />
              </label>
            </form>
          </div>
          <div className="loginButtons">
            <button>
              <Link to="/rejestracja">Załóż konto</Link>
            </button>
            <button>
              <Link to="/logowanie">Zaloguj się</Link>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
