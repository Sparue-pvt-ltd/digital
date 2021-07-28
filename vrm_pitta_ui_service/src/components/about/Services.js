import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="services-2" class="bg-lightgrey wide-30 services-section division">
    <div class="container">


        <!-- SECTION TITLE -->	
        <div class="row">	
            <div class="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">

                <!-- Title 	-->	
                <h3 class="h3-lg">Custom SEO Services – Our Specialty</h3>	

                <!-- Text -->	
                <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero 
                    tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                </p>
                    
            </div>
        </div>	<!-- END SECTION TITLE -->	


        <!-- SERVICE BOXES -->	
        <div class="row">


            <!-- SERVICE BOX #1 -->
            <div class="col-sm-6 col-lg-3">
                <a href="service-details.html">
                    <div class="sbox-2 wow fadeInUp" data-wow-delay="0.4s">

                        <!-- Icon  -->
                        <img class="img-85" src="./assets/images/icons/placeholder-1.png" alt="feature-icon" />

                        <!-- Title -->
                        <h5 class="h5-md">Local SEO</h5>
                            
                        <!-- Text -->
                        <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                    </div>
                </a>
            </div>


            <!-- SERVICE BOX #2 -->
            <div class="col-sm-6 col-lg-3">
                <a href="service-details.html">
                    <div class="sbox-2 wow fadeInUp" data-wow-delay="0.6s">

                        <!-- Icon  -->
                        <img class="img-85" src="./assets/images/icons/online-shop-1.png" alt="feature-icon" />

                        <!-- Title -->
                        <h5 class="h5-md">E-Commerce SEO</h5>
                            
                        <!-- Text -->
                        <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                    </div>
                </a>
            </div>


            <!-- SERVICE BOX #3 -->
            <div class="col-sm-6 col-lg-3">
                <a href="service-details.html">
                    <div class="sbox-2 wow fadeInUp" data-wow-delay="0.8s">

                        <!-- Icon  -->
                        <img class="img-85" src="./assets/images/icons/pie-chart.png" alt="feature-icon" />

                        <!-- Title -->
                        <h5 class="h5-md">Advanced Analytics</h5>
                            
                        <!-- Text -->
                        <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                    </div>
                </a>
            </div>


            <!-- SERVICE BOX #4 -->
            <div class="col-sm-6 col-lg-3">
                <a href="service-details.html">
                    <div class="sbox-2 wow fadeInUp" data-wow-delay="1s">

                        <!-- Icon  -->
                        <img class="img-85" src="./assets/images/icons/pay-per-click-2.png" alt="feature-icon" />

                        <!-- Title -->
                        <h5 class="h5-md">PPC Management</h5>

                        <!-- Text -->
                        <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                    </div>
                </a>
            </div>


        </div>	<!-- END SERVICE BOXES -->	


    </div>	   <!-- End container -->		
</section>
`;

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
