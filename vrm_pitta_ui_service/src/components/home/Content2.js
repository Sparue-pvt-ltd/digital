import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="content-4" class="bg-primary bg-map pt-100 content-section division">
<div class="container white-color">
  <div class="row d-flex align-items-center">


    <!-- TEXT BLOCK -->
    <div class="col-md-7 col-lg-6">
      <div class="txt-block pc-25 wow fadeInLeft" data-wow-delay="0.4s">

        <!-- Title -->
        <h4 class="h4-xl">We will help your business achieve predictable growth</h4>

        <!-- List -->
        <ul class="txt-list mb-15">

          <li>Vitae auctor integer congue magna at pretium blandit porta justo integer. Feugiat a
            ligula rutrum luctus primis ultrice
          </li>

          <li>Integer congue magna at pretium purus a pretium ligula rutrum and luctus risus eros
            dolor
            auctor ipsum blandit purus vehicula magna luctus tempor quisque
          </li>

          <li>Congue magna at pretium purus a pretium ligula rutrum and luctus risus luctus neque
            purus
            posuere neque at dolor primis
          </li>

        </ul>

        <!-- Button -->
        <a href="/pricing" class="btn btn-md btn-yellow tra-white-hover">Our Pricing
          Packages</a>

      </div>
    </div> <!-- END TEXT BLOCK -->


    <!-- IMAGE BLOCK -->
    <div class="col-md-5 col-lg-6">
      <div class="content-4-img wow fadeInRight" data-wow-delay="0.6s">
        <img class="img-fluid" src="./assets/images/image-11.png" alt="content-image">
      </div>
    </div>


  </div> <!-- End row -->
</div> <!-- End container -->
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Content2 extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Content2;
