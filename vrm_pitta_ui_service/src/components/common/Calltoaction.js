import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="cta-4" class="bg-06 cta-section division">
<div class="container white-color">
    <div class="row d-flex align-items-center">
    

        <!-- CALL TO ACTION TEXT -->
        <div class="col-lg-8">
            <div class="cta-txt">

                <!-- Title -->	
                <h3 class="h3-xs">Improve your search ranking now!</h3>

                <!-- Text -->
                <!--<p class="p-md">Donec vel sapien augue integer urna vel turpis cursus porta, mauris sed augue 
                    luctus dolor velna auctor congue tempus magna integer
                </p>-->

            </div>
        </div>	<!-- END CALL TO ACTION TEXT -->


        <!-- CALL TO ACTION BUTTON -->
        <div class="col-lg-4">
            <div class="cta-btn text-right">
                <a href="/contacts" class="btn btn-md btn-primary tra-white-hover">Get Started Now</a>
            </div>
        </div>	


    </div>	 <!-- End row -->
</div>	   <!-- End container -->	
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Calltoaction extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Calltoaction;
