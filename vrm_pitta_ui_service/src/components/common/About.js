import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="about-2" class="wide-60 about-section division">
    <div class="container">
        <div class="row d-flex align-items-center">


            <!-- ABOUT TEXT -->
            <div class="col-md-7 col-lg-6">
                <div class="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">

                    <!-- Title -->
                    <h4 class="h4-xl">Increase your sales with SEO, PPC, and email marketing.</h4>

                    <!-- List -->
                    <ul class="txt-list">
                        
                        VRMP used SEO and PPC to increase overall traffic and, in conjunction with the new CRO-focused website, were able to increase online leads.
                        
                        <!--
                        <li>Integer congue magna at pretium purus a pretium ligula rutrum and luctus risus eros dolor 
                            auctor ipsum blandit purus vehicula magna luctus tempor quisque			
                        </li>
                        -->

                    </ul>

                    

                </div>
            </div>	  <!-- END ABOUT TEXT -->


            <!-- ABOUT IMAGE -->
            <div class="col-md-5 col-lg-6">
                <div class="img-block pl-25 wow fadeInRight" data-wow-delay="0.6s">
                    <img class="img-fluid" src="./assets/images/image-02.png" alt="about-image">
                </div>
            </div>


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
