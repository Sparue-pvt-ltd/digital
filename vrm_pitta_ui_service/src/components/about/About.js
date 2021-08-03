import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="about-1" class="wide-60 about-section division">
<div class="container">
    <div class="row d-flex align-items-center">


        <!-- ABOUT IMAGE -->
        <div class="col-md-5 col-lg-6">
            <div class="img-block pr-25 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                <img class="img-fluid" src="./assets/images/image-01.png" alt="about-image">
            </div>
        </div>


        <!-- ABOUT TEXT -->
        <div class="col-md-7 col-lg-6">
            <div class="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">

                <!-- Title -->	
                <h4 class="h4-xl">We're providing the best SEO services for your website</h4>

                <!-- Text -->
                <p>
                VRMP used SEO and PPC to increase overall traffic and, in conjunction with the new CRO-focused website, were able to increase online leads.
                </p>

               		
                
            </div>
        </div>	  <!-- END ABOUT TEXT -->


    </div>    <!-- End row --> 	
</div>	   <!-- End container --> 	
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
