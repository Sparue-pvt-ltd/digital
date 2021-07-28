import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div>
        <section id={this.props.cssId} class="page-hero-section division">
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <div class="hero-txt text-center white-color">
                  <h3 class="h3-xl">{this.props.heroTitle}</h3>
                  <p>{this.props.heroDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Hero;
