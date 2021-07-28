import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `<section id="services-5" class="bg-lightgrey wide-60 services-section division">
<div class="container">
    <div class="row">

        <div class="col-md-4">
            <div class="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.4s">

                <img class="img-65" src="./assets/images/icons/hierarchical-structure-1.png" alt="feature-icon" />

                <div class="sbox-5-txt">

                    <h5 class="h5-lg">Experienced and knowledgeable team</h5>

                    <p class="grey-color">Gravida magna luctus and augue tempor quisque at laoreet turpis
                        and
                        viverra augue dictum tempor varius at posuere imperdiet
                    </p>

                </div>

            </div>
        </div>


        <div class="col-md-4">
            <div class="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.6s">

                <img class="img-65" src="./assets/images/icons/trophy-1.png" alt="feature-icon" />

                <div class="sbox-5-txt">

                    <h5 class="h5-lg">Transparent and trustworthy services</h5>

                    <p class="grey-color">Gravida magna luctus and augue tempor quisque at laoreet turpis
                        and
                        viverra augue dictum tempor varius at posuere imperdiet
                    </p>

                </div>

            </div>
        </div>


        <div class="col-md-4">
            <div class="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.8s">

                <img class="img-65" src="./assets/images/icons/analytics-3.png" alt="feature-icon" />

                <div class="sbox-5-txt">

                    <h5 class="h5-lg">Quality Traffic. Measurable Results</h5>

                    <p class="grey-color">Gravida magna luctus and augue tempor quisque at laoreet turpis
                        and
                        viverra augue dictum tempor varius at posuere imperdiet
                    </p>

                </div>

            </div>
        </div>


    </div>
</div>
</section>`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Services extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Services;
