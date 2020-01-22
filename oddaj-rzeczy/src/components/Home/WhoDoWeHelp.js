import React, { Component } from "react";

class Home_Who_Do_We_Help extends Component {
  state = {
    fundations: [],
    currentOrganisation: 1,
    currentPage: 0,
    itemPerPage: 3
  };
  componentDidMount() {
    fetch("http://localhost:3001/fundations")
      .then(res => res.json())
      .then(fundations => this.setState({ fundations }));
  }

  handleOnClick = e => {
    this.setState({ currentOrganisation: e.target.id, currentPage: 0 });
  };

  handleButtonClick = e => {
    this.setState({ currentPage: e.target.id - 1 });
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
    return this.state.fundations.find(
      fundation => fundation.id == this.state.currentOrganisation
    );
  }

  get fundations() {
    console.log(this.items);
    const { currentPage, itemPerPage } = this.state;
    return this.items?.items?.length
      ? this.items.items.slice(
          currentPage * itemPerPage,
          currentPage * itemPerPage + itemPerPage
        )
      : [];
  }

  get pages() {
    return Math.ceil(this.items?.items?.length / this.state.itemPerPage);
  }

  render() {
    console.log(this.pages);

    let allPages = [];

    for (var i = 1; i <= this.pages; i++) {
      allPages.push(i);
    }

    let showPages = allPages.map(el => {
      return (
        <button
          key={el}
          id={el}
          onClick={this.handleButtonClick}
          className={this.state.currentPage == el - 1 && "showPagesButton"}
          // "showPagesButton"
        >
          {el}
        </button>
      );
    });

    console.log(allPages);
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

          {/* <div className="col-4"></div>
          <div className="col-8">{this.items.desc}</div>
          <div className="col-4"></div> */}

          <div className="col-3"></div>
          <div className="whoDoWeHelpList col-10">
            <div>
              {this.fundations.map(fundation => (
                <div key={fundation.header} className="fundationMain row">
                  <div className="fundationHeader col-7">
                    {fundation.header}
                  </div>
                  <div className="col-6"></div>
                  <div className="fundationDesc col-3">{fundation.desc}</div>
                  <div className="fundationSubheader col-7">
                    {fundation.subheader}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-3"></div>
          <div className="col-5"></div>
          <div className="showPages col-6">{showPages}</div>
          <div className="col-5"></div>
        </div>
      </section>
    );
  }
}

export default Home_Who_Do_We_Help;
