import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<header id="header" class="header white-menu navbar-dark">
				<div class="header-wrapper">


					<!-- MOBILE HEADER -->
				    <div class="wsmobileheader clearfix">
				    	<a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
				    	<span class="smllogo smllogo-black"><img src="./assets/images/vrm_pitta.png" width="80" height="40" alt="mobile-logo"/></span>
				    	<span class="smllogo smllogo-white"><img src="./assets/images/vrm_pitta.png" width="80" height="40" alt="mobile-logo"/></span>
				    	<a href="tel:123456789" class="callusbtn"><i class="fas fa-phone"></i></a>
				 	</div>


				  	<!-- NAVIGATION MENU -->
				  	<div class="wsmainfull menu clearfix">
	    				<div class="wsmainwp clearfix">


	    					<!-- LOGO IMAGE -->
	    					<!-- For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 334 x 80 pixels) -->
	    					<div class="desktoplogo"><a href="/" class="logo-black"><img src="./assets/images/vrm_pitta.png" width="80" height="40" alt="header-logo"></a></div>
	    					<div class="desktoplogo"><a href="/" class="logo-white"><img src="./assets/images/vrm_pitta.png" width="80" height="40" alt="header-logo"></a></div>


	    					<!-- MAIN MENU -->
	      					<nav class="wsmenu clearfix">
	        					<ul class="wsmenu-list">

                                    <!-- SIMPLE NAVIGATION LINK -->
                                    <li class="nl-simple" aria-haspopup="true"><a href="/about">About</a></li>

	        						<!-- SIMPLE NAVIGATION LINK -->
							    	<li class="nl-simple" aria-haspopup="true"><a href="/services">Services</a></li>

						          	<!-- SIMPLE NAVIGATION LINK -->
							    	<li class="nl-simple" aria-haspopup="true"><a href="/case-studies">Case Studies</a></li>

							    	<!-- SIMPLE NAVIGATION LINK -->
							    	<li class="nl-simple" aria-haspopup="true"><a href="/contacts">Contacts</a></li>

								    <!-- HEADER PHONE NUMBER -->
								    <li class="nl-simple primary-scroll" aria-haspopup="true">
								    	<a href="tel:+918303871828" class="last-link last-link-number">
								    		<i class="fas fa-phone-square-alt"></i> +91-8303871828
								    	</a>
								    </li>
	        					</ul>
	        				</nav>	<!-- END MAIN MENU -->

	    				</div>
	    			</div>	<!-- END NAVIGATION MENU -->


				</div>     <!-- End header-wrapper -->
			</header>	<!-- END HEADER -->
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Header extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Header;
