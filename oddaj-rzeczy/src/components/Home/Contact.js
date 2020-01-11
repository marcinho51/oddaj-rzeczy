import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="contact">
        <div className="row">
          <div className="contactImg col-9"></div>
          <div className="col-1"></div>
          <div className="contactForm col-5">
            <h3>Skontaktuj się z nami</h3>
            <div className="decorationImage5"></div>
            <form>
              <div className="row">
                <div className="col-8">
                  <label>
                    Wpisz swoje imię
                    <input type="name" placeholder="Krzysztof" />
                  </label>
                </div>
                <div className="col-8">
                  <label>
                    Wpisz swój email
                    <input type="email" placeholder="abc@xyz.pl" />
                  </label>
                </div>
                <div className="col-16">
                  <label>
                    Wpisz swoją wiadomość
                    <textarea placeholder="Curabitur non gravida eros. Mauris placerat quis dui sed venenatis. Integer sapien lectus, mattis rhoncus eros a, fermentum dictum orci. Morbi at lacus est. Nulla facilisi. Nullam enim." />
                  </label>
                </div>
                <div className="col-13"></div>
                <div className="col-3">
                  <input type="submit" value="Wyślij" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-1"></div>
        </div>
      </section>
    );
  }
}

export default Contact;
