import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="tabs-1" class="wide-60 tabs-section division">
<div class="container">


    <!-- TABS NAVIGATION -->
    <div class="row">
        <div class="col-lg-12 text-center">
            <div class="tabs-nav clearfix">
                <ul class="tabs-1 primary-tabs">

                    <!-- TAB-1 LINK -->
                    <li class="tab-link displayed" data-tab="tab-1">Pay-Per-Click Advertising</li>

                    <!-- TAB-2 LINK -->
                    <li class="tab-link" data-tab="tab-2">Social Media Marketing</li>

                    <!-- TAB-3 LINK -->
                    <li class="tab-link" data-tab="tab-3">Search Engine Optimization</li>

                </ul>
            </div>
        </div>	
    </div> <!-- END TABS NAVIGATION -->


    <!-- TABS CONTENT -->
    <div class="tabs-content">


        <!-- TAB-1 CONTENT -->
        <div id="tab-1" class="tab-content displayed">
            <div class="row d-flex align-items-center">


                <!-- IMAGE BLOCK -->
                <div class="col-md-5 col-lg-6">
                    <div class="img-block pr-25 mb-40">
                        <img class="img-fluid" src="./assets/images/image-05.png" alt="content-image">
                    </div>
                </div>


                <!-- TEXT BLOCK -->	
                <div class="col-md-7 col-lg-6">
                    <div class="txt-block pc-25 mb-40">

                        <!-- Title -->	
                        <h4 class="h4-xl">We will help your business achieve predictable growth</h4>

                        <!-- Text -->
                        <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna vitae
                            auctor integer congue magna at pretium purus pretium ligula rutrum and luctus risus ultrice
                        </p> 

                        <!-- List -->
                        <ul class="txt-list mb-15">
                                    
                            <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor 
                                auctor ipsum blandit purus vehicula magna and luctus tempor quisque integer congue magna			
                            </li>

                            <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et magnis ipsum porta 
                                justo integer velna purus
                            </li>

                        </ul>

                        <!-- Button -->
                        <a href="services.html" class="btn btn-tra-grey primary-hover">Learn More</a>

                    </div>
                </div>	<!-- END TEXT BLOCK -->	


            </div>	  <!-- End row -->
        </div>	<!-- END TAB-1 CONTENT -->


        <!-- TAB-2 CONTENT -->
        <div id="tab-2" class="tab-content">
            <div class="row d-flex align-items-center">


                <!-- IMAGE BLOCK -->
                <div class="col-md-5 col-lg-6">
                    <div class="img-block pr-25 mb-40">
                        <img class="img-fluid" src="./assets/images/image-03.png" alt="content-image">
                    </div>
                </div>


                <!-- TEXT BLOCK -->	
                <div class="col-md-7 col-lg-6">
                    <div class="txt-block pc-25 mb-40">

                        <!-- Title -->	
                        <h4 class="h4-xl">We craft marketing & digital products that grow business</h4>

                        <!-- Text -->
                        <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer and 
                            odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus 
                            and ultrice a gravida lectus
                        </p> 

                        <!-- List -->
                        <ul class="ico-list mb-10">	
                            <li><i class="fas fa-check grey-color"></i> <span>Vitae auctor integer congue magna at pretium</span></li>
                            <li><i class="fas fa-check grey-color"></i> <span>Integer congue magna and pretium purus ligula</span></li>
                            <li><i class="fas fa-check grey-color"></i> <span>Sagittis congue augue egestas volutpat egestas</span></li>
                        </ul>

                        <!-- Button -->
                        <a href="case-studies-1.html" class="btn btn-md btn-primary tra-black-hover">Our Case Studies</a>

                    </div>
                </div>	<!-- END TEXT BLOCK -->	


            </div>	 <!-- End row -->	
        </div>	<!-- END TAB-2 CONTENT -->


        <!-- TAB-3 CONTENT -->
        <div id="tab-3" class="tab-content">
            <div class="row d-flex align-items-center">


                <!-- IMAGE BLOCK -->
                <div class="col-md-5 col-lg-6">
                    <div class="img-block pr-25 mb-40">
                        <img class="img-fluid" src="./assets/images/image-04.png" alt="content-image">
                    </div>
                </div>


                <!-- TEXT BLOCK -->	
                <div class="col-md-7 col-lg-6">
                    <div class="txt-block pc-25 mb-40">

                        <!-- Title -->	
                        <h4 class="h4-xl">We're providing the best SEO services for your website</h4>

                        <!-- Text -->
                        <div class="cbox-1">	
                            <i class="fas fa-check grey-color"></i>
                            <div class="cbox-1-txt">
                                <p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor 
                                    auctor ipsum blandit purus vehicula magna and luctus tempor quisque turpis magna ligula 
                                </p>
                            </div>
                        </div>
                        
                        <!-- Text -->
                        <div class="cbox-1">	
                            <i class="fas fa-check grey-color"></i>
                            <div class="cbox-1-txt">
                                <p>An enim nullam tempor sapien gravida donec enim blandit ipsum at porta justo integer velna
                                    vitae auctor integer congue magna pretium purus pretium magnis nulla dolor sapien 
                                </p>
                            </div>
                        </div>

                        <!-- Text -->
                        <div class="cbox-1">	
                            <i class="fas fa-check grey-color"></i>
                            <div class="cbox-1-txt">
                                <p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor 
                                    auctor ipsum blandit purus vehicula magna and luctus tempor quisque turpis magna ligula 
                                </p>
                            </div>
                        </div>

                    </div>
                </div>	<!-- END TEXT BLOCK -->	


            </div>	 <!-- End row -->	
        </div>	<!-- END TAB-3 CONTENT -->


    </div>	<!-- END TABS CONTENT -->


</div>     <!-- End container -->	
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Tabs extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Tabs;
