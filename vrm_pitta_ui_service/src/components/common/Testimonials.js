import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    return (
      <div>
        <section id="reviews-3" class="bg-04 wide-100 reviews-section division">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-10 offset-lg-1 section-title wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h3 class="h3-xs">
                  <span class="title-digit">
                    2,<span class="count-element">968</span>
                  </span>
                  Positive Reviews From Our Customers
                </h3>

                <p class="p-lg">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta elementum massa risus
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-10 offset-xl-1">
                <div class="owl-carousel owl-theme reviews-holder">
                  <div class="review-3">
                    <div class="quote-ico">
                      <img src="./assets/images/left-quote.png" alt="" />
                    </div>

                    <p>
                    VRMP has been the best SEO experience I have ever had. Their staff are attentive and knowledgeable, and adapt to a constantly changing environment. I can’t be happier with my experience.
                    </p>

                    <div class="review-3-author d-flex align-items-center">
                      <div class="author-avatar">
                        <img
                          class="img-fluid"
                          src="./assets/images/review-author-1.jpg"
                          alt="review-author-avatar"
                        />
                      </div>

                      <div class="review-author">
                        <h5 class="h5-xs">Sean McMarthy</h5>
                        {/* <span>
                          Owner, <a href="/">Company Name</a>
                        </span> */}
                      </div>
                    </div>
                  </div>

                  <div class="review-3">
                    <div class="quote-ico">
                      <img src="./assets/images/left-quote.png" alt="" />
                    </div>

                    <p>
                    VRMP has provided realistic and reliable SEO results from industry experts, as well as assistance with the following steps for the development of our facility.
                    </p>

                    <div class="review-3-author d-flex align-items-center">
                      <div class="author-avatar">
                        <img
                          class="img-fluid"
                          src="./assets/images/review-author-2.jpg"
                          alt="review-author-avatar"
                        />
                      </div>

                      <div class="review-author">
                        <h5 class="h5-xs">Evelyn Martinez</h5>
                        {/* <span>
                          Owner, <a href="/">Company Name</a>
                        </span> */}
                      </div>
                    </div>
                  </div>

                  <div class="review-3">
                    <div class="quote-ico">
                      <img src="./assets/images/left-quote.png" alt="" />
                    </div>

                    <p>
                      VRMP is an excellent resource for small businesses, especially those that do not have IT professionals and internal SEO. They’re a lot of partners to me, and they think outside the box to deal with the web and IT technology issues we can deal with. They bring new solutions and research to our specific needs, and we would be lost without them in our team.
                    </p>

                    <div class="review-3-author d-flex align-items-center">
                      <div class="author-avatar">
                        <img
                          class="img-fluid"
                          src="./assets/images/review-author-3.jpg"
                          alt="review-author-avatar"
                        />
                      </div>

                      <div class="review-author">
                        <h5 class="h5-xs">Joel Peterson</h5>
                        {/* <span>
                          Owner, <a href="/">Company Name</a>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Testimonials;
