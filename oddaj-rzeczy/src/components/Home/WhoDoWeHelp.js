import React, { Component } from "react";

class Home_Who_Do_We_Help extends Component {
  state = {
    fundations: [],
    currentOrganisation: 1
  };
  componentDidMount() {
    fetch("http://localhost:3001/fundations")
      .then(res => res.json())
      .then(fundations => this.setState({ fundations }));
  }

  handleOnClick = e => {
    this.setState({ currentOrganisation: e.target.id });
  };

  get names() {
    return this.state.fundations.map(fundation => {
      return (
        <>
          <li
            key={fundation.id}
            id={fundation.id}
            onClick={this.handleOnClick}
            className={
              this.state.currentOrganisation == fundation.id && "active"
            }
          >
            {fundation.name}
          </li>
        </>
      );
    });
  }

  get items() {
    const fun = this.state.fundations.find(
      fundation => fundation.id == this.state.currentOrganisation
    );
    console.log(fun);
    return (
      fun &&
      fun.items.map(fundation => {
        return (
          <div key={fundation.header} className="fundationMain row">
            <div className="fundationHeader col-7">{fundation.header}</div>
            <div className="col-6"></div>
            <div className="fundationDesc col-3">{fundation.desc}</div>
            <div className="fundationSubheader col-7">
              {fundation.subheader}
            </div>
          </div>
        );
      })
    );
  }

  render() {
    console.log(this.state);
    return (
      <section className="whoDoWeHelp">
        <div className="whoDoWeHelpHeadline">
          <h1>Komu pomagamy?</h1>
        </div>
        <div className="decorationImage4"></div>
        <div className="row">
          <div className="col-4"></div>
          <div className="whoDoWeHelpNav col-8">
            <ul>{this.names}</ul>
          </div>
          <div className="col-4"></div>

          <div className="col-3"></div>
          <div className="whoDoWeHelpList col-10">
            <div>{this.items}</div>
          </div>
          <div className="col-3"></div>
        </div>
      </section>
    );
  }
}

export default Home_Who_Do_We_Help;
