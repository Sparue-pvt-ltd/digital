import React, { Component } from "react";

class Testimonials1 extends Component {
  render() {
    return (
      <div>
        <section id="reviews-4" class="bg-05 reviews-section division">
          <div class="container white-color">
            <div class="row d-flex align-items-center">
              <div class="col-lg-6">
                <div class="small-statistic pc-25">
                  <div class="row">
                    <div class="col-sm-6 col-md-3 col-lg-6">
                      <div
                        class="statistic-block wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <h5 class="statistic-number primary-color">
                          <span class="count-element">735</span>%
                        </h5>
                        <p>increase in SEO traffic from benchmark month</p>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-3 col-lg-6">
                      <div
                        class="statistic-block wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <h5 class="statistic-number primary-color">
                          <span class="count-element">363</span>%
                        </h5>
                        <p>increase in phone calls from search engines</p>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-3 col-lg-6">
                      <div
                        class="statistic-block wow fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        <h5 class="statistic-number primary-color">
                          <span class="count-element">528</span>%
                        </h5>
                        <p>increase in organic visitors in 6 months</p>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-3 col-lg-6">
                      <div
                        class="statistic-block wow fadeInUp"
                        data-wow-delay="1s"
                      >
                        <h5 class="statistic-number primary-color">
                          <span class="count-element">436</span>%
                        </h5>
                        <p>increase in first page rankings in the 6 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="review-4 wow fadeInUp" data-wow-delay="0.4s">
                  <div class="quote-ico">
                    <img
                      src="./assets/images/left-quote.png"
                      alt=""
                    />
                  </div>

                  <p>
                    "
                    <span>
                      They're communicative, honest, and reliably deliver
                      tangible results.
                    </span>
                  </p>

                  {/* <div class="review-4-author">
                    <h5 class="h5-xs">, CEO</h5>
                    <span class="lightgrey-color">Vrm Pitta</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Testimonials1;
