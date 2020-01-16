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
        <li
          key={fundation.id}
          id={fundation.id}
          onClick={this.handleOnClick}
          className={this.state.currentOrganisation == fundation.id && "active"}
        >
          {fundation.name}
        </li>
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
        return <li>{fundation.header}</li>;
      })
    );
  }

  render() {
    console.log(this.state);
    return (
      <section className="whoDoWeHelp">
        <h1>Who do we help</h1>
        <ul>{this.names}</ul>
        Lista
        <ul>{this.items}</ul>
      </section>
    );
  }
}

export default Home_Who_Do_We_Help;
