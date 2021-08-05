import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="services-2" class="pt-80 pb-30 services-section division">
<div class="container">
    <div class="row">


        <!-- SERVICE BOX #1 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service-search-engine-optimisation">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.4s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/placeholder-1.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Search Engine Optimisation</h5>

                    <!-- Text -->
                    <p class="p-sm grey-color">We offer unique SEO services to your organization.</p>

                </div>
            </a>
        </div>

        <!-- SERVICE BOX #2 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service-content-writing-services">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.4s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/computer-1.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Content Marketing</h5>

                    <!-- Text -->
                    <p class="p-sm grey-color">Well-written, spoken content involves viewers and is also an image that you present in the world of the web.</p>

                </div>
            </a>
        </div>

        <!-- SERVICE BOX #3 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service-app-search-optimisation">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.8s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/mobile_app.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">App Search Optimisation</h5>

                    <!-- Text -->
                    <p class="p-sm grey-color">Tell your audience that you are here! With thousands of apps in the app store, it's easy to get lost.</p>

                </div>
            </a>
        </div>

        <!-- SERVICE BOX #4 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service-digital-strategy-consulting">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.8s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/digital-strategy-banner.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Digital Strategy & Consulting</h5>

                    <!-- Text -->
                    <p class="p-sm grey-color">Tell your audience that you are here! With thousands of apps in the app store, it's easy to get lost.</p>

                </div>
            </a>
        </div>

        <!-- SERVICE BOX #5 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service-creative-design-services">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.8s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/creative.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Creative Design Services</h5>

                    <!-- Text -->
                    <p class="p-sm grey-color">Tell your audience that you are here! With thousands of apps in the app store, it's easy to get lost.</p>

                </div>
            </a>
        </div>

    </div>	  <!-- End row -->
</div>	   <!-- End container -->
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class AllServices extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default AllServices;
