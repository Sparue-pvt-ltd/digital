import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<div id="statistic-1" class="bg-06 statistic-section division">
    <div class="container white-color">
        <div class="row">


            <!-- STATISTIC BLOCK #1 -->
            <div class="col-sm-6 col-md-3">							
                <div class="statistic-block wow fadeInUp" data-wow-delay="0.4s">

                    <!-- Text -->
                    <h5 class="statistic-number">3,<span class="count-element">485</span></h5>
                    <p class="p-md">Links Optimized</p>																		
                                        
                </div>								
            </div>


            <!-- STATISTIC BLOCK #2 -->
            <div class="col-sm-6 col-md-3">									
                <div class="statistic-block wow fadeInUp" data-wow-delay="0.6s">

                    <!-- Text -->
                    <h5 class="statistic-number">1,<span class="count-element">281</span></h5>	
                    <p class="p-md">Happy Customers</p>									
                                                            
                </div>							
            </div>


            <!-- STATISTIC BLOCK #3 -->
            <div class="col-sm-6 col-md-3">						
                <div class="statistic-block wow fadeInUp" data-wow-delay="0.8s">	

                    <!-- Text -->
                    <h5 class="statistic-number">4,<span class="count-element">379</span></h5>
                    <p class="p-md">Websites Improved</p>								

                </div>						
            </div>
        

            <!-- STATISTIC BLOCK #4 -->
            <div class="col-sm-6 col-md-3">							
                <div class="statistic-block wow fadeInUp" data-wow-delay="1s">	

                    <!-- Text -->	
                    <h5 class="statistic-number">2,<span class="count-element">473</span></h5>
                    <p class="p-md">Active Accounts</p>				
                    
                </div>						
            </div>


        </div> <!-- End row -->
    </div>	 <!-- End container -->		
</div>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Statistic extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Statistic;
