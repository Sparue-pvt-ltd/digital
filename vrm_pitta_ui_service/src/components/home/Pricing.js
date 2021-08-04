import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `<section id="pricing-1" class="wide-60 pricing-section division">
<div class="container">


    <!-- SECTION TITLE -->
    <div class="row">
        <div class="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">

            <!-- Title 	-->
            <h3 class="h3-lg">Simple Pricing, Instant Service</h3>

        </div>
    </div> <!-- END SECTION TITLE -->


    <div class="row pricing-row">


        <!-- PRICE PLAN STARTER -->
        <div class="col-md-4 col-lg-4">
            <div class="pricing-table wow fadeInUp" data-wow-delay="0.4s">

                <!-- Plan Price  -->
                <div class="pricing-plan">
                    <h5 class="h5-md">Starter</h5>
                    <sup>$</sup>
                    <span class="price">15</span>
                    <sup class="coins">99</sup>
                </div>

                <p class="p-sm">Monthly Payment</p>

                <!-- Pricing Plan Features  -->
                <ul class="features">
                    <li>10 Analytics Campaign</li>
                    <li><span>800 Change Keywords</span></li>
                    <li><span>3 Free Optimization</span></li>
                    <li><span>25 Social Media Reviews</span></li>
                    <li class="disabled-option">Upgrate Options</li>
                    <li class="disabled-option">Extra Features</li>
                    <li>12/5 Free Support</li>
                </ul>

                <!-- Pricing Table Button  -->
                <a href="/pricing" class="btn btn-tra-grey black-hover">Get Started</a>

            </div>
        </div> <!-- END PRICE PLAN STARTER -->


        <!-- PRICE PLAN BASIC -->
        <div class="col-md-4 col-lg-4">
            <div class="pricing-table wow fadeInUp" data-wow-delay="0.6s">

                <!-- Plan Price  -->
                <div class="pricing-plan primary-color">
                    <h5 class="h5-md">Pro</h5>
                    <sup>$</sup>
                    <span class="price">24</span>
                    <sup class="coins">99</sup>
                </div>

                <p class="p-sm">Monthly Payment</p>

                <!-- Pricing Plan Features  -->
                <ul class="features">
                    <li>20 Analytics Campaign</li>
                    <li><span>1,200 Change Keywords</span></li>
                    <li><span>15 Optimization</span></li>
                    <li><span>1K Social Media Reviews</span></li>
                    <li><span>Upgrate Options</span></li>
                    <li class="disabled-option">Extra Features</li>
                    <li>12/7 Free Support</li>
                </ul>

                <!-- Pricing Table Button  -->
                <a href="/pricing" class="btn btn-primary black-hover">Get Started</a>

            </div>
        </div> <!-- END PRICE PLAN BASIC -->


        <!-- PRICE PLAN PRO -->
        <div class="col-md-4 col-lg-4">
            <div class="pricing-table wow fadeInUp" data-wow-delay="0.8s">

                <!-- Plan Price  -->
                <div class="pricing-plan">
                    <h5 class="h5-md">Premium</h5>
                    <sup>$</sup>
                    <span class="price">89</span>
                    <sup class="coins">99</sup>
                </div>

                <p class="p-sm">Monthly Payment</p>

                <!-- Pricing Plan Features  -->
                <ul class="features">
                    <li>Unlimited Analytics Campaign</li>
                    <li><span>Unlimited Change Keywords</span></li>
                    <li><span>Unlimited Optimization</span></li>
                    <li><span>5K Social Media Reviews</span></li>
                    <li><span>Upgrate Options</span></li>
                    <li>Extra Features</li>
                    <li>24/7 Free Support</li>
                </ul>

                <!-- Pricing Table Button  -->
                <1<a href="/pricing" class="btn btn-tra-grey black-hover">Upgrade To Premium</a>

            </div>
        </div> <!-- END PRICE PLAN PRO -->


    </div> <!-- End row -->


    <!-- PRICING NOTICE TEXT -->
    <!--<div class="row">
        <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
            <div class="pricing-notice text-center mb-40">
                <p class="p-md"><span>Note!</span> Prices may vary from location to location due to local
                    taxation laws and conversion rates from U.S. Dollars.
                </p>
            </div>
        </div>
    </div>-->


</div> <!-- End container -->
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Pricing extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Pricing;
