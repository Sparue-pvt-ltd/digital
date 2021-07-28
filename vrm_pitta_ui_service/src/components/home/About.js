import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="about-2" class="pt-60 pb-60 about-section division">
<div class="container">
    <div class="row d-flex align-items-center">

        <div class="col-md-7 col-lg-6">
            <div class="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">

                <h4 class="h4-xl">We're providing the best SEO services for your website</h4>

                <ul class="txt-list">

                    <li>Vitae auctor integer congue magna at pretium blandit porta justo integer. Feugiat a
                        ligula rutrum luctus primis ultrice
                    </li>

                    <li>Integer congue magna at pretium purus a pretium ligula rutrum and luctus risus eros
                        dolor
                        auctor ipsum blandit purus vehicula magna luctus tempor quisque
                    </li>

                </ul>

                <div class="small-statistic">
                    <div class="row">

                        <div class="col-sm-6">
                            <div class="statistic-block">
                                <h5 class="statistic-number primary-color">4,<span
                                        class="count-element">379</span></h5>
                                <p>Websites Improved</p>
                                <p class="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="statistic-block">
                                <h5 class="statistic-number primary-color"><span
                                        class="count-element">99</span>%</h5>
                                <p>Customer Satisfaction</p>
                                <p class="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


        <div class="col-md-5 col-lg-6">
            <div class="img-block pl-25 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                <img class="img-fluid" src="./assets/images/image-02.png" alt="about-image">
            </div>
        </div>


    </div>
</div>
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class About extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default About;
