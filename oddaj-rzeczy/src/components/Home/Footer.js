import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section className="footer">
        <div className="row">
          <div className="col-7"></div>
          <div className="col-2">
            <p>Copyright by Coders Lab</p>
          </div>
          <div className="col-5"></div>
          <div className="footerIcons col-1">
            <div className="footerFacebook"></div>
            <div className="footerInstagram"></div>
          </div>
          <div className="col-1"></div>
        </div>
      </section>
    );
  }
}

export default Footer;
