import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
        <section id="content-1" class="wide-60 content-section division">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-md-7 col-lg-6">
                    <div class="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">

                        <h4 class="h4-xl">{this.props.serviceTitle}</h4>
                        <p>
                            {this.props.servicedescription}
                        </p>

                        {/* <div class="quote quote-primary">

                            <p>"Lorem ipsum dolor sit, consectetuer amet adipiscing elit. Aenean magna ligula eget dolor
                                suscipit egestas at viverra dolor iaculis luctus magna suscipit egestas "
                            </p>

                            <div class="quote-avatar">
                                <img src="./assets/images/quote-avatar.jpg" alt="quote-avatar"/>
                            </div>

                            <div class="quote-author">
                                <h5 class="h5-xs">Sean Mcmarthy </h5>
                                <span>Founder of Metreex</span>
                            </div>
                        </div> */}

                    </div>
                </div>
                <div class="col-md-5 col-lg-6">
                    <div class="img-block pl-25 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                        <img class="img-fluid" src={this.props.serviceImageURL} alt=""/>
                    </div>
                </div>

            </div>
        </div>
        </section>
    );
  }
}
export default Content;