import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/main.scss";
import Home from "./components/Home";
import Home_Organizations from "./components/Home_Organizations";
import Home_Local from "./components/Home_Local";
import Home_Logged_In from "./components/Home_Logged_In";
import Form_Step_1 from "./components/Form_Step_1";
import Form_Step_2 from "./components/Form_Step_2";
import Form_Step_3 from "./components/Form_Step_3";
import Form_Step_4 from "./components/Form_Step_4";
import Form_Summary from "./components/Form_Summary";
import Form_Thank_You from "./components/Form_Thank_You";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home_Organizations} />
        <Route exact path="/" component={Home_Local} />
        <Route exact path="/" component={Home_Logged_In} />
        <Route exact path="/oddaj-rzeczy" component={Form_Step_1} />
        <Route exact path="/oddaj-rzeczy" component={Form_Step_2} />
        <Route exact path="/oddaj-rzeczy" component={Form_Step_3} />
        <Route exact path="/oddaj-rzeczy" component={Form_Step_4} />
        <Route exact path="/oddaj-rzeczy" component={Form_Summary} />
        <Route exact path="/oddaj-rzeczy" component={Form_Thank_You} />
        <Route exact path="/logowanie" component={Login} />
        <Route exact path="/rejestracja" component={Register} />
        <Route exact path="/wylogowano" component={Logout} />
      </Switch>
    </HashRouter>
  );
}

export default App;
