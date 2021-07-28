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
                <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio 
                    velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice 
                    a gravida lectus suscipit gestas magna suscipit luctus undo
                </p>

                <!-- QUOTE -->
                <div class="quote quote-primary">

                    <!-- Quote Text -->
                    <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean magna ligula eget dolor 
                        suscipit egestas at viverra dolor iaculis luctus magna suscipit egestas "									   
                    </p>
                            
                    <!-- Quote Avatar -->
                    <div class="quote-avatar">
                        <img src="images/quote-avatar.jpg" alt="quote-avatar">
                    </div>
                                
                    <!-- Quote Author -->
                    <div class="quote-author">
                        <h5 class="h5-xs">Sean Mcmarthy </h5>
                        <span>Founder of Metreex</span>
                    </div>	
                
                </div>					
                
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
