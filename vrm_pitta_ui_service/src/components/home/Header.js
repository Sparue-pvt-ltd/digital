import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<header id="header" class="header tra-menu navbar-light">
<div class="header-wrapper">
    <div class="wsmobileheader clearfix">
        <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
        <span class="smllogo smllogo-black"><img src="./assets/images/vrm_pitta.png" width="80" height="40" alt="mobile-logo"/></span>
        
        <a href="tel:123456789" class="callusbtn"><i class="fas fa-phone"></i></a>
     </div>

      <div class="wsmainfull menu clearfix">
        <div class="wsmainwp clearfix">

            <div class="desktoplogo"><a href="/" class="logo-black"><img src="./assets/images/vrm_pitta.png" width="80" height="40" alt="header-logo"/></a></div>
            <div class="desktoplogo"><a href="/" class="logo-white"><img src="./assets/images/vrm_pitta_white.png" width="80" height="40" alt="header-logo"/></a></div>

              <nav class="wsmenu clearfix blue-header">
                <ul class="wsmenu-list">

                    <li class="nl-simple" aria-haspopup="true"><a href="/about">About</a></li>

                    <li aria-haspopup="true"><a href="/services">Services <span class="wsarrow"></span></a>
	            						<div class="wsmegamenu clearfix">
	             							<div class="container">
	               								<div class="row">


	               									<!-- MEGAMENU QUICK LINKS -->
													<div class="col-md-12 col-lg-3">

														<!-- Title -->
														<h3 class="title">Marketing Solutions:</h3>

		               									<ul class="link-list">   						                    
										                    <li><a href="/service1">Search Engine Optimization</a></li>
										                    <li><a href="/service2">Web Design & Development</a></li>	
										                    <li><a href="/service3">Social Media Marketing</a></li>							                
										                    <li><a href="/service4">Pay per Click (PPC)</a></li>
										                    <li><a href="/service5">Video Production</a></li>
										                    <li><a href="/service6">Content Marketing</a></li>	
										                    <li><a href="/service7">Email Marketing Campaigns</a></li>	
										                </ul>

										            </div>	<!-- END MEGAMENU QUICK LINKS -->


									                <!-- MEGAMENU FEATURED NEWS -->
									                <div class="col-md-12 col-lg-5">

									                	<!-- Title -->
									                    <h3 class="title">Featured News:</h3>

									                    <!-- Image -->
									                    <div class="fluid-width-video-wrapper mb-15"><img src="./assets/images/blog/featured-news.jpg" alt="featured-news" /></div>

									                    <!-- Text -->
									                    <h5 class="h5-md">
									                    	<a href="/single-post1">Things to know while performing SEO for multiple location
										                         businesses
										                    </a>
									                    </h5>
									                    <p class="wsmwnutxt">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor
									                       tempus feugiat dolor impedit magna...
									                    </p>

									                </div>	<!-- END MEGAMENU FEATURED NEWS -->


									                <!-- MEGAMENU LATEST NEWS -->
									                <div class="col-md-12 col-lg-4">

									                	<!-- Title -->
	                    								<h3 class="title">Latest News:</h3>

	                    								<!-- Latest News -->
	                    								<ul class="latest-news">
										
															<!-- Post #1 -->
															<li class="clearfix d-flex align-items-center">

																<!-- Image -->
																<img class="img-fluid" src="./assets/images/blog/latest-post-1.jpg" alt="blog-post-preview" />

																<!-- Text -->
																<div class="post-summary">
																	<a href="/single-post2">Etiam sapien risus ante auctor tempus an accumsan...</a>
																	<p>03 hours ago</p>
																</div>

															</li>
															
															<!-- Post #2 -->
															<li class="clearfix d-flex align-items-center">

																<!-- Image -->
																<img class="img-fluid" src="./assets/images/blog/latest-post-2.jpg" alt="blog-post-preview" />

																<!-- Text -->
																<div class="post-summary">
																	<a href="/single-post3">Blandit tempor sapien ipsum, porta risus auctor justo...
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
																	<a href="/single-post4">Cursus risus an auctor risus laoreet undo auctor varius...</a>
																	<p>Jan 29, 2020</p>
																</div>

															</li>
														</ul>
	                    							</div>	<!-- END MEGAMENU LATEST NEWS -->

								                </div>  <!-- End row -->
								            </div>  <!-- End container -->
								        </div>  <!-- End wsmegamenu -->
								    </li>

                    <li class="nl-simple" aria-haspopup="true"><a href="/pricing">Pricing</a></li>


									  <li class="nl-simple" aria-haspopup="true"><a href="/blogs">Blogs</a></li>

                    <li class="nl-simple" aria-haspopup="true"><a href="/contacts">Contacts</a></li>

                    <li class="nl-simple primary-scroll" aria-haspopup="true">
                        <a href="tel:+918303871828" class="last-link last-link-number">
                            <i class="fas fa-phone-square-alt"></i> +91-8303871828
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</header>
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
