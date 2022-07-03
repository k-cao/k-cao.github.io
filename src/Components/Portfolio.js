import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  handleClick(event) {
    event.preventDefault();
    alert('click. but dont redirect...');
  }

  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {        
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <div style={{ textAlign: "center" }}>
              <a href='https://google.com'>{projects.title}</a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check out some of my works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
