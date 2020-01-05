import React, { Component } from "react";
import Header from "./Header";

import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoDoWeHelp from "./WhoDoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <ThreeColumns />
        <FourSteps />
        <AboutUs />
        <WhoDoWeHelp />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Home;
