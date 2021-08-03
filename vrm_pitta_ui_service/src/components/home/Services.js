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

                    <p class="grey-color">
                        You can have a website, but it doesn't help your business if search engines are not available.
                        We can take your online presence to the next level, including website design, copywriting, keywords,
                        access to social media, and more, to ensure customers find your site online. When you work with us, 
                        you get the most out of your marketing investment.
                    </p>

                </div>

            </div>
        </div>


        <div class="col-md-4">
            <div class="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.6s">

                <img class="img-65" src="./assets/images/icons/trophy-1.png" alt="feature-icon" />

                <div class="sbox-5-txt">

                    <h5 class="h5-lg">Transparent and trustworthy services</h5>

                    <p class="grey-color">
                        We value the honesty, integrity, and respect of our customers.
                        We do not believe in "selling" the service you do not need or in contacting each client with the same size.
                    </p>

                </div>

            </div>
        </div>


        <div class="col-md-4">
            <div class="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.8s">

                <img class="img-65" src="./assets/images/icons/analytics-3.png" alt="feature-icon" />

                <div class="sbox-5-txt">

                    <h5 class="h5-lg">Quality Traffic. Measurable Results</h5>

                    <p class="grey-color">
                        Why not work with an SEO service company that doesn't deliver the results you need? Stop wasting your money on a 
                        fixed plan.
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
