import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/main.scss";
import Home from "./components/Home/Home";
import Step1 from "./components/Steps/Step1";
import Login from "./components/RegisteringAndLogging/Login";
import Register from "./components/RegisteringAndLogging/Register";
import Logout from "./components/RegisteringAndLogging/Logout";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/oddaj-rzeczy" component={Step1} />
        <Route exact path="/logowanie" component={Login} />
        <Route exact path="/rejestracja" component={Register} />
        <Route exact path="/wylogowano" component={Logout} />
      </Switch>
    </HashRouter>
  );
}

export default App;
