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
                <p class="p-lg">
                It is close to impossible to keep up with the ever-changing state of SEO. Since 1997, SEO Inc has been dedicated to the science and art of Search Engine Optimization, leading the way in SEO techniques and changes in algorithms. If you let SEO Inc improve your search engine optimization strategy with our advanced SEO services, it allows you to focus on your business / industry while leaving the search engine optimization and search engines. Our longevity and commitment to doing good sets us up as the leading Professional SEO company in the industry.
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
                            <p class="grey-color">
                                We use the power of analytics and improve the ability to identify hidden patterns in Google analytics data as part of our SEO services. We use this important data to create an audience that will have a long-term impact on performance. Our roadmap map and smart insights introduce new ways to focus on Search Engine performance and online website reputation on organic channels. As a customer-focused SEO company, we make data understandable by incorporating analytics data and comments into our monthly SEO report and publishing them consistently with reasonable numbers to empower you as a discerning business.
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
                            <p class="grey-color">
                                As the leading SEO company, we believe that quality content with the right set of keywords is essential for displaying search volume. Our solid content strategy is founded on research and the unrivalled integration of the best use of your business content by search engines while providing undeniable appeal to the consumer. We improve the combination of content and keywords to make it easier for audiences and search engines. One of the most important factors in your company's success in organic search is the creation of high-quality links. As a result, we take a content-driven approach and employ a variety of strategies such as blogging, influential marketing, digital PR, and community growth, among others. 
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
                            <p class="grey-color">
                                We've proven to deliver results on everything from complex eCommerce emails to creative B2B cold
                                email marketing. we use email marketing strategies and strategies to help all types of businesses 
                                grow.
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
                            <p class="grey-color">
                                Our goal is to create an accurate description of your paper that is accessible to anybody - from colleagues and potential collaborators to funders and members of the general public who are interested in your study.
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
                            <p class="grey-color">
                                We feel that SEO is at the forefront of digital marketing strategy and place a premium on it while executing digital marketing for our clients. With several years of experience in digital marketing and search engine optimization (SEO).
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
                            <p class="grey-color">
                                With our ever-changing SEO techniques and search engine algorithm changes, our approach to this dynamic field is changing.
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
                            <p class="grey-color">
                                Vrmp, in addition to its excellent team of experienced professionals, not only responsive developer solutions that build CSS to control multiple page layouts simultaneously, but also adhere more to class building programs, improve internet presence and create a lasting user experience through -UX enhanced with UI across all platforms. We are here to ensure that your website responds to the necessary changes, whether you want to upgrade an existing website or build it from the ground up.
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
