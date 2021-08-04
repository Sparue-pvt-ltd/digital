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
				    	<a href="tel:+914042027115" class="callusbtn"><i class="fas fa-phone"></i></a>
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

									<li aria-haspopup="true"><a href="/services">Services <span class="wsarrow"></span></a>
										<div class="wsmegamenu clearfix halfmenu">
											<div class="container-fluid">
												<div class="row">
													<!-- Links -->
													<ul class="col-lg-6 col-md-12 col-xs-12 link-list">
														<li><a href="/service1">Search Engine Optimisation</a></li>
														<li><a href="/service2">Content Writing Services</a></li>
														<li><a href="/service3">App Search Optimisation</a></li>
														<li><a href="/service5">Creative Design Services</a></li>
														<li><a href="/service4">Digital Strategy & Consulting</a></li>
													</ul>

													<!-- Links -->
													<ul class="col-lg-6 col-md-12 col-xs-12 link-list">
														<li><a href="/service6">React.js Development</a></li>
														<li><a href="/service7">Node.js Development</a></li>
														<li><a href="/service8">Responsive Web Design</a></li>
														<li><a href="/service9">Intuitive UI / UX designs</a></li>
													</ul>
												</div>
											</div>
										</div>
									</li>	<!-- END DROPDOWN MENU -->

									<!-- SIMPLE NAVIGATION LINK -->
							    	<li class="nl-simple" aria-haspopup="true"><a href="/pricing">Pricing</a></li>

							    	<!-- SIMPLE NAVIGATION LINK -->
							    	<li class="nl-simple" aria-haspopup="true"><a href="/contacts">Contacts</a></li>

								    <!-- HEADER PHONE NUMBER -->
								    <li class="nl-simple primary-scroll" aria-haspopup="true">
								    	<a href="tel:+914042027115" class="last-link last-link-number">
								    		<i class="fas fa-phone-square-alt"></i> +91-4042027115
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
