import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="services-4" class="wide-60 services-section division">
    <div class="container">


        <!-- SECTION TITLE -->
        <div class="row">
            <div class="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">

                <!-- Title 	-->
                <h3 class="h3-lg">SEO Management & Strategy Services</h3>

                <!-- Text -->
                <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                    tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                </p>

            </div>
        </div>


        <!-- SERVICE BOXES -->
        <div class="services-boxes">
            <div class="row">


                <!-- SERVICE BOX #1 -->
                <div class="col-md-6">
                    <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="0.4s">

                        <!-- Icon -->
                        <img class="img-65" src="./assets/images/icons/analytics-2.png" alt="feature-icon" />

                        <!-- Text -->
                        <div class="sbox-4-txt">

                            <!-- Title -->
                            <h5 class="h5-lg">Advanced Analytics Review</h5>

                            <!-- Text -->
                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque
                                laoreet turpis at
                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere
                                vehicula imperdiet
                                varius undo viverra rutrum dignissim
                            </p>

                        </div>

                    </div>
                </div>


                <!-- SERVICE BOX #2 -->
                <div class="col-md-6">
                    <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="0.6s">

                        <!-- Icon -->
                        <img class="img-65" src="./assets/images/icons/email-1.png" alt="feature-icon" />

                        <!-- Text -->
                        <div class="sbox-4-txt">

                            <!-- Title -->
                            <h5 class="h5-lg">Email Marketing Campaigns</h5>

                            <!-- Text -->
                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque
                                laoreet turpis at
                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere
                                vehicula imperdiet
                                varius undo viverra rutrum dignissim
                            </p>

                        </div>

                    </div>
                </div>


                <!-- SERVICE BOX #3 -->
                <div class="col-md-6">
                    <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="0.8s">

                        <!-- Icon -->
                        <img class="img-65" src="./assets/images/icons/video-player-1.png" alt="feature-icon" />

                        <!-- Text -->
                        <div class="sbox-4-txt">

                            <!-- Title -->
                            <h5 class="h5-lg">Video Marketing</h5>

                            <!-- Text -->
                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque
                                laoreet turpis at
                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere
                                vehicula imperdiet
                                varius undo viverra rutrum dignissim
                            </p>

                        </div>

                    </div>
                </div>


                <!-- SERVICE BOX #4 -->
                <div class="col-md-6">
                    <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="1s">

                        <!-- Icon -->
                        <img class="img-65" src="./assets/images/icons/price-tag.png" alt="feature-icon" />

                        <!-- Text -->
                        <div class="sbox-4-txt">

                            <!-- Title -->
                            <h5 class="h5-lg">Search Engine Optimization (SEO)</h5>

                            <!-- Text -->
                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque
                                laoreet turpis at
                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere
                                vehicula imperdiet
                                varius undo viverra rutrum dignissim
                            </p>

                        </div>

                    </div>
                </div>


                <!-- SERVICE BOX #5 -->
                <div class="col-md-6">
                    <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="1.2s">

                        <!-- Icon -->
                        <img class="img-65" src="./assets/images/icons/pay-per-click-3.png" alt="feature-icon" />

                        <!-- Text -->
                        <div class="sbox-4-txt">

                            <!-- Title -->
                            <h5 class="h5-lg">Pay Per Click (PPC)</h5>

                            <!-- Text -->
                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque
                                laoreet turpis at
                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere
                                vehicula imperdiet
                                varius undo viverra rutrum dignissim
                            </p>

                        </div>

                    </div>
                </div>


                <!-- SERVICE BOX #6 -->
                <div class="col-md-6">
                    <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="1.4s">

                        <!-- Icon -->
                        <img class="img-65" src="./assets/images/icons/chat.png" alt="feature-icon" />

                        <!-- Text -->
                        <div class="sbox-4-txt">

                            <!-- Title -->
                            <h5 class="h5-lg">Strategy and Analytics Consulting</h5>

                            <!-- Text -->
                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque
                                laoreet turpis at
                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere
                                vehicula imperdiet
                                varius undo viverra rutrum dignissim
                            </p>

                        </div>

                    </div>
                </div>


                <!-- SERVICE BOX #7 -->
                <div class="col-md-6">
                    <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="1.6s">

                        <!-- Icon -->
                        <img class="img-65" src="./assets/images/icons/computer-1.png" alt="feature-icon" />

                        <!-- Text -->
                        <div class="sbox-4-txt">

                            <!-- Title -->
                            <h5 class="h5-lg">Content Marketing</h5>

                            <!-- Text -->
                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque
                                laoreet turpis at
                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere
                                vehicula imperdiet
                                varius undo viverra rutrum dignissim
                            </p>

                        </div>

                    </div>
                </div>


                <!-- SERVICE BOX #8 -->
                <div class="col-md-6">
                    <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="1.8s">

                        <!-- Icon -->
                        <img class="img-65" src="./assets/images/icons/responsive.png" alt="feature-icon" />

                        <!-- Text -->
                        <div class="sbox-4-txt">

                            <!-- Title -->
                            <h5 class="h5-lg">Website Design & Development</h5>

                            <!-- Text -->
                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque
                                laoreet turpis at
                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere
                                vehicula imperdiet
                                varius undo viverra rutrum dignissim
                            </p>

                        </div>

                    </div>
                </div>


            </div> <!-- End row -->
        </div> <!-- END SERVICE BOXES -->


    </div> <!-- End container -->
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Content3 extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Content3;
