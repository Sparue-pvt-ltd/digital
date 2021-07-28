import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="about-page" class="page-hero-section division">
    <div class="container">	
        <div class="row">	


            <!-- PAGE HERO TEXT -->
            <div class="col-md-10 offset-md-1">
                <div class="hero-txt text-center white-color">

                    <!-- Title -->
                    <h3 class="h3-xl">About Metreex</h3>

                    <!-- Text -->
                    <p>We provide professional PPC, Web and SEO services to increase online visibility and qualified leads 
                        to your business
                    </p>

                </div>
            </div>	<!-- END PAGE HERO TEXT -->


        </div>    <!-- End row --> 
    </div>	   <!-- End container --> 
</section>
`

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Hero extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Hero;
