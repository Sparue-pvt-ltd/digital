import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="pricing-2" class=" wide-60 pricing-section division">
<div class="container">


    <!-- PRICING TABLES -->
    <div class="row pricing-row">


        <!-- PRICE PLAN BASIC -->
        <div class="col-md-6">
            <div class="pricing-table wow fadeInLeft" data-wow-delay="0.4s">

                <!-- Plan Price  -->
                <div class="pricing-plan indigo-color text-center">
                    <h4 class="h4-xs">Basic Subscription</h4>								
                    <sup>$</sup>								
                    <span class="price">24</span>
                    <sup class="coins">99</sup>
                    <p class="p-lg">Limited Access</p>
                </div>	

                <!-- Pricing Plan Features  -->
                <ul class="features">

                    <li><span class="indigo-color">Growth Plan</span> - purus ipsum neque dolor primis libero tempus, 
                        blandit posuere and ligula varius magna porta
                    </li>

                    <li><span class="indigo-color">Website Monitoring</span> - augue suscipit, luctus and neque purus 
                        ipsum neque dolor primis libero tempus, blandit posuere
                    </li>	

                    <li><span class="indigo-color">Weekly Snapshot Email</span> - purus ipsum neque at dolor primis 
                        libero tempus, blandit posuere and ligula varius
                    </li>

                    <li><span class="indigo-color">Benchmarking</span> - iaculis odio auctor integer congue an impedit 
                        magna viverra dolor vitae donec  mauris lectus laoreet gestas neque undo luctus feugiat lectus 
                        laoreet gestas neque
                    </li>

                    <li><span class="indigo-color">Daily Health Score</span> - pretium ipsum porta justo integer at 
                        odio velna vitae auctor integera congue magna
                    </li>

                    <li><span class="indigo-color">12/7 Free Support</span> - gravida lectus suscipit gestas luctus</li>

                </ul>

                <!-- Pricing Table Button -->
                <div class="text-center">
                    <a href="#" class="btn btn-tra-grey black-hover">Get Started</a>
                </div>

            </div>	
        </div>	<!-- END PRICE PLAN BASIC -->


        <!-- PRICE PLAN PRO -->
        <div class="col-md-6">
            <div class="pricing-table wow fadeInRight" data-wow-delay="0.4s">

                <!-- Plan Price  -->
                <div class="pricing-plan indigo-color text-center">
                    <h4 class="h4-xs">Pro Subscription</h4>	
                    <sup>$</sup>								
                    <span class="price">89</span>
                    <sup class="coins">99</sup>
                    <p class="p-lg">Full Access</p>
                </div>	

                <!-- Pricing Plan Features  -->
                <ul class="features">

                    <li><span class="indigo-color">Growth Plan</span> - purus ipsum neque dolor primis libero tempus, 
                        blandit posuere and ligula varius magna porta
                    </li>

                    <li><span class="indigo-color">Website Monitoring</span> - augue suscipit, luctus and neque purus 
                        ipsum neque dolor primis libero tempus, blandit posuere
                    </li>	

                    <li><span class="indigo-color">Weekly Snapshot Email</span> - purus ipsum neque at dolor primis 
                        libero tempus, blandit posuere and ligula varius
                    </li>

                    <li><span class="indigo-color">Benchmarking</span> - iaculis odio auctor integer congue an impedit 
                        magna viverra dolor vitae donec  mauris lectus laoreet gestas neque undo luctus feugiat lectus 
                        laoreet gestas neque
                    </li>

                    <li><span class="indigo-color">Daily Health Score</span> - pretium ipsum porta justo integer at 
                        odio velna vitae auctor integera congue magna
                    </li>

                    <li><span class="indigo-color">Social Media</span> - augue suscipit, luctus and neque purus ipsum 
                        neque dolor primis libero tempus, blandit posuere
                    </li>

                    <li><span class="indigo-color">SEO & Keywords</span> - iaculis odio auctor integer congue an impedit 
                        magna viverra dolor vitae donec  mauris lectus laoreet gestas neque undo luctus feugiat lectus laoreet 
                        gestas neque
                    </li>

                    <li><span class="indigo-color">24/7 Free Support</span> - gravida lectus suscipit gestas luctus</li>

                </ul>

                <!-- Pricing Table Button -->
                <div class="text-center">
                    <a href="#" class="btn btn-primary tra-black-hover">Upgrade To PRO</a>
                </div>

            </div>	
        </div>	<!-- END PRICE PLAN PRO -->
        

    </div>	<!-- END PRICING TABLES -->


    <!-- PRICING NOTICE TEXT -->
    <div class="row">
        <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
            <div class="pricing-notice text-center mb-40">							
                <p class="grey-color">No commitment required – you can cancel anytime.</p>
            </div>	
        </div>
    </div>


</div>     <!-- End container -->
				</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Content extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Content;
