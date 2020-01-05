import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/main.scss";
import Home from "./components/Home/Home";
import Step1 from "./components/Steps/Step1";
// import Form_Step_2 from "./components/Steps/Step2";
// import Form_Step_3 from "./components/Steps/Step3";
// import Form_Step_4 from "./components/Steps/Step4";
// import Form_Summary from "./components/Form/Summary";
// import Form_Thank_You from "./components/Form/ThankYou";
import Login from "./components/Registration/Login";
import Register from "./components/Registration/Register";
import Logout from "./components/Registration/Logout";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/oddaj-rzeczy" component={Step1} />
        {/* <Route exact path="/oddaj-rzeczy" component={Form_Step_2} />
        <Route exact path="/oddaj-rzeczy" component={Form_Step_3} />
        <Route exact path="/oddaj-rzeczy" component={Form_Step_4} /> */}
        {/* <Route exact path="/oddaj-rzeczy" component={Form_Summary} />
        <Route exact path="/oddaj-rzeczy" component={Form_Thank_You} /> */}
        <Route exact path="/logowanie" component={Login} />
        <Route exact path="/rejestracja" component={Register} />
        <Route exact path="/wylogowano" component={Logout} />
      </Switch>
    </HashRouter>
  );
}

export default App;
