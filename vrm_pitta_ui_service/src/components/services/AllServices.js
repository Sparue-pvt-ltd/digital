import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="services-2" class="pt-80 pb-30 services-section division">
<div class="container">
    <div class="row">


        <!-- SERVICE BOX #1 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service1">
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
            <a href="/service2">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.6s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/enterprise1.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Enterprise SEO</h5>
                        
                    <!-- Text -->
                    <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                </div>
            </a>
        </div>


        <!-- SERVICE BOX #3 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service3">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.8s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/online-shop-1.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">E-Commerce SEO</h5>
                        
                    <!-- Text -->
                    <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                </div>
            </a>
        </div>


        <!-- SERVICE BOX #4 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service4">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="1s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/strategy.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">UX Evaluation</h5>

                    <!-- Text -->
                    <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                </div>
            </a>
        </div>


        <!-- SERVICE BOX #5 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service5">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.4s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/link-1.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Link-Building</h5>
                        
                    <!-- Text -->
                    <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                </div>
            </a>
        </div>


        <!-- SERVICE BOX #6 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service6">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.6s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/pay-per-click-2.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">PPC Management</h5>
                        
                    <!-- Text -->
                    <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                </div>
            </a>
        </div>


        <!-- SERVICE BOX #7 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service7">
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


        <!-- SERVICE BOX #8 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service8">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="1s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/user.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Social Media</h5>
                        
                    <!-- Text -->
                    <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                </div>
            </a>
        </div>


        <!-- SERVICE BOX #9 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service9">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.4s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/computer-1.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Content Marketing</h5>
                        
                    <!-- Text -->
                    <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                </div>
            </a>
        </div>


        <!-- SERVICE BOX #10 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service10">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.6s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/video-player-1.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Video Marketing</h5>
                        
                    <!-- Text -->
                    <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                </div>
            </a>
        </div>


        <!-- SERVICE BOX #11 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service11">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="0.8s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/email-1.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Email Marketing</h5>
                        
                    <!-- Text -->
                    <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                </div>
            </a>
        </div>


        <!-- SERVICE BOX #12 -->
        <div class="col-sm-6 col-lg-3">
            <a href="/service12">
                <div class="sbox-2 wow fadeInUp" data-wow-delay="1s">

                    <!-- Icon  -->
                    <img class="img-85" src="./assets/images/icons/responsive.png" alt="feature-icon" />

                    <!-- Title -->
                    <h5 class="h5-md">Web Development</h5>

                    <!-- Text -->
                    <p class="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>

                </div>
            </a>
        </div>


    </div>	  <!-- End row -->
</div>	   <!-- End container -->
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class AllServices extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default AllServices;
