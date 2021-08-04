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

	        						<!-- SIMPLE NAVIGATION LINK -->
							    	<li aria-haspopup="true"><a href="/services">Services <span class="wsarrow"></span></a>
									<div class="wsmegamenu clearfix">
										 <div class="container">
											   <div class="row">


												   <!-- MEGAMENU QUICK LINKS -->
												<div class="col-md-12 col-lg-3">

													<!-- Title -->
													<h3 class="title">Featured Services :</h3>

													   <ul class="link-list">
														<li><a href="/service1">Search Engine Optimisation</a></li>
														<li><a href="/service2">Content Writing Services</a></li>
														<li><a href="/service3">App Search Optimisation</a></li>
														<li><a href="/service4">Digital Strategy & Consulting</a></li>
														<li><a href="/service5">Creative Design Services</a></li>
														<li><a href="/service6">React.js Development</a></li>
														<li><a href="/service7">Node.js Development</a></li>
														<li><a href="/service8">Responsive Web Design</a></li>
														<li><a href="/service9">Intuitive UI / UX designs</a></li>
													   </ul>

												</div>	<!-- END MEGAMENU QUICK LINKS -->


												<!-- MEGAMENU FEATURED NEWS -->
												<div class="col-md-12 col-lg-5">

													<!-- Title -->
													<h3 class="title">Featured Blog:</h3>

													<!-- Image -->
													<div class="fluid-width-video-wrapper mb-15"><img src="./assets/images/blog/featured-news.jpg" alt="featured-news" /></div>

													<!-- Text -->
													<h5 class="h5-md">
														<a href="/single-post1">Things to know while performing SEO for multiple location
															 businesses
														</a>
													</h5>
													<!--<p class="wsmwnutxt">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor
														tempus feugiat dolor impedit magna...
													</p>-->

												</div>	<!-- END MEGAMENU FEATURED NEWS -->


												<!-- MEGAMENU LATEST NEWS -->
												<div class="col-md-12 col-lg-4">

													<!-- Title -->
													<h3 class="title">Latest Blogs:</h3>

													<!-- Latest News -->
													<ul class="latest-news">
									
														<!-- Post #1 -->
														<li class="clearfix d-flex align-items-center">

															<!-- Image -->
															<img class="img-fluid" src="./assets/images/blog/latest-post-1.jpg" alt="blog-post-preview" />

															<!-- Text -->
															<div class="post-summary">
																<a href="/single-post2">We offer unique SEO services to your organization ...</a>
																<p>03 hours ago</p>
															</div>

														</li>
														
														<!-- Post #2 -->
														<li class="clearfix d-flex align-items-center">

															<!-- Image -->
															<img class="img-fluid" src="./assets/images/blog/latest-post-2.jpg" alt="blog-post-preview" />

															<!-- Text -->
															<div class="post-summary">
																<a href="/single-post3">Well-written, spoken content involves viewers ...
																</a>
																<p>Feb 02, 2020</p>
															</div>

														</li>
														
														<!-- Post #3 -->
														<li class="clearfix d-flex align-items-center">

															<!-- Image -->
															<img class="img-fluid" src="./assets/images/blog/latest-post-3.jpg" alt="blog-post-preview" />

															<!-- Text -->
															<div class="post-summary">
																<a href="/single-post4">Increase your user discovery; Tell your audience that you are here! ...</a>
																<p>Jan 29, 2020</p>
															</div>

														</li>
													</ul>
												</div>	<!-- END MEGAMENU LATEST NEWS -->

												
											</div>  <!-- End row -->	
										</div>  <!-- End container -->	
									</div>  <!-- End wsmegamenu -->	
								</li>

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
