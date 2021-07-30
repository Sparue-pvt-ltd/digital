import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="single-post" class="wide-100 single-post-section division">
					<div class="container">
						<div class="row">
							<div class="col-lg-10 offset-lg-1">


								<!-- SINGLE POST TITLE -->
								<div class="single-post-title text-center mb-40">

									<!-- Post Title -->
									<h3 class="h3-sm">5-Step Content Marketing Strategy for 2020</h3>

									<!-- Post Data -->
									<div class="single-post-data">
										<p class="post-meta">Posted by 
										   <a href="#">Sean McMarthy</a> on February 02, 2020 
										   <a href="#">in SocialMedia</a>
										</p>
									</div>

								</div>	<!-- END SINGLE POST TITLE -->


								<!-- BLOG POST TEXT -->
								<div class="single-post-txt mb-45">

									<!-- Post Text -->
									<p class="p-md">Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravida donec 
									   ipsum porta justo integer at odio velna. Maecenas gravida porttitor nunc, quis vehicula magna luctus 
									   tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar 
									   donec ociis et magnis sapien imperdiet dui varius viverra. Pellentesque ac massa lorem.
									</p>

								</div>
								

								<!-- BLOG MAIN POST IMAGE -->
					 			<div class="blog-post-img mb-40">
									<img class="img-fluid" src="./assets/images/image-16.png" alt="blog-post-image" />		
								</div>


								<!-- BLOG POST TEXT -->
								<div class="single-post-txt">

									<!-- Post Text -->
									<p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna 
									   nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor 
									   gravida donec enim ipsum porta justo integer at odio velna. Maecenas gravida porttitor nunc, quis vehicula 
									   magna luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu <a href="#">cursus fusce non nulla</a> vitae massa
									</p>

									<!-- Post Text -->
									<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur 
									   ipsum primis in cubilia laoreet augue egestas luctus donec diam.	Curabitur ac dapibus libero. Mauris donec 
									   ociis a neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae molestie nunc sapien justo, 
									   aliquet non molestie augue, venenatis nec purus. Aliquam eget lacinia elit. Augue tincidunt tincidunt massa, 
									   et porttitor justo blandit.
									</p>  

									<!-- Post Text -->
									<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna purus efficitur ipsum primis 
										in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo.
									</p>
		
									<!-- Post Text -->
									<p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis urna augue,
									   viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Sapien justo massa lorem. Fusce eu cursus non nulla vitae massa placerat purus. Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus <a href="#">efficitur ipsum primis</a> in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo ut aliquam.
									</p>	

									<!-- Small Title -->
									<h4 class="h4-xs">Vitae massa placerat vulputate</h4>

									<!-- Post Text -->  
									<p>Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, 
									   vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem. 
									   Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus Aliqum mullam blandit 
									   tempor sapien gravida donec
									</p>	

									<!-- INNER IMAGE -->
									<div class="post-inner-img">
										<img class="img-fluid" src="./assets/images/image-17.jpg" alt="blog-post-image" />
									</div>
											
									<!-- Small Title -->
									<h4 class="h4-xs">Semper lacus cursus porta, feugiat primis</h4>		
												
									<!-- Post Text -->
									<p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo ut aliquam. 
									   Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed, venenatis nec purus. Aliquam 
									   eget lacinia tincidunt tincidunt massa, et porttitor justo. Quisque vel laoreet turpis. Urna augue, viverra 
									   a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. 
									   Pellentesque ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat bulum tincidunt 
									   tincidunt massa, et porttitor justo
									</p>   
									  
									<!-- Post Text -->
									<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur 
									   ipsum primis in cubilia laoreet augue egestas luctus donec diam.	Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae <a href="#">molestie nunc 
									   sapien justo</a>, aliquet non molestie sed, venenatis nec purus. Aliquam eget lacinia elit. Vestibulum 
									   tincidunt tincidunt massa, et porttitor justo.
									</p>

									<!-- Small Title -->
									<h4 class="h4-xs">Cubilia laoreet augue egestas luctus</h4>

									<!-- Post Text -->
									<p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis. Urna augue,
									   viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus
									</p>

									<!-- INNER IMAGES -->
									<div class="post-inner-img">
										<div class="row">

											<!-- Inner Image #1 -->
											<div class="col-md-6">

												<!-- Image -->
												<img class="img-fluid" src="./assets/images/image-18.jpg" alt="blog-image" />			
	
												<!-- Text -->
												<p class="p-sm grey-color">Maecenas gravida a tempus at auctor ipsum mauris lectus enim magna luctus tempor</p>

											</div>

											<!-- Inner Image #2 -->
											<div class="col-md-6">

												<!-- Image -->
												<img class="img-fluid" src="./assets/images/image-19.jpg" alt="blog-image" />

												<!-- Text -->
												<p class="p-sm grey-color">Mullam blandit tempor sapien gravida donec ipsum, at porta mauris lectus enim magna luctus</p>

											</div>

										</div>
									</div>	<!-- END INNER IMAGES -->

									<!-- Text List -->
									<ul class="txt-list">
											
										<li>Vitae auctor integer congue magna at pretium cubilia laoreet augue egestas luctus donec diam. Curabitur 
											ac dapibus libero. Quisque eu tristique neque ipsum porta cubilia laoreet augue egestas
										</li>

										<li>Integer congue magna at pretium purus pretium ligula rutrum luctus risus eros dolor auctor ipsum 
											blandit purus 										
										</li>

										<li>Sagittis congue augue egestas volutpat egestas magna vitae auctor eros congue magna nihil impedit ligula
											risus. Mauris donec ociis et magnis sapien an sapien congue tempor gravida enim ipsum porta cubilia 
											laoreet augue egestas luctus egestas volutpat egestas magna suscipit egestas magna
										</li>

									</ul>

									<!-- Post Text -->
									<p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore. incididunt
									   ut labore et dolore. Neque turpis vitae eros praesent varius. Egestas pellentesque urna blandit, sed ac leo ut mi, nam wisi, <a href="#">laborum donec erat diam ociis</a> ultrice ligula magna suscipit lectus gestas egestas magna ipsum vitae purus ipsum
									</p>

								</div>	<!-- END BLOG POST TEXT -->


								<!-- SINGLE POST SHARE LINKS -->
								<div class="row post-share-links d-flex align-items-center">

									<!-- POST TAGS -->
									<div class="col-md-9 col-xl-8 post-tags-list">
										<span><a href="#">Tips & Tricks</a></span>	
										<span><a href="#">Marketing</a></span>
										<span><a href="#">SocialMedia</a></span>										
									</div>

									<!-- POST SHARE ICONS -->
									<div class="col-md-3 col-xl-4 post-share-list text-right">
										<ul class="share-social-icons text-center clearfix">														
											<li><a href="#" class="share-ico ico-facebook"><i class="fab fa-facebook-square"></i></a></li>
											<li><a href="#" class="share-ico ico-twitter"><i class="fab fa-twitter"></i></a></li>
											<li><a href="#" class="share-ico ico-like"><i class="far fa-bookmark"></i></a></li>			
										</ul>
									</div>

								</div>	<!-- END SINGLE POST SHARE -->


								<!-- ABOUT POST AUTHOR -->
								<div class="author-senoff d-flex align-items-center">
									
									<!-- Avatar -->	
									<img src="images/review-author-1.jpg" alt="author-avatar">

									<!-- Text -->
									<div class="author-senoff-txt">

										<!-- Title -->
										<h5 class="h5-xs">Published by</h5>
										<h5 class="h5-lg">Sean McMarthy</h5>
										<p>Lorem ipsum dolor sit amet, consectetur elit eiusmod tempor sapien dolore incidide labore dolore 
											incididunt ut labore turpis vitae raesent varius consectetur nibh, vel imperdiet varius viverra.
									        Pellentesque ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat bulum tincidunt 
									        tincidunt massa, et porttitor justo
										</p>

										<!-- Follow Button -->
										<div class="author-follow-btn"><a href="#">Follow</a></div>

									</div>

								</div>	<!-- END ABOUT POST AUTHOR -->		


								<!-- POST COMMENTS -->
								<div class="single-post-comments">

									<!-- Title -->	
									<h5 class="h5-xl mb-40">4 Comments</h5>	


									<!-- COMMENT #1 -->
									<div class="media mt-50">

										<!-- Comment-1 Avatar -->
									  	<img class="mr-3" src="./assets/images/post-author-1.jpg" alt="comment-avatar">

									 	<div class="media-body">

									 		<!-- Comment-1 Meta -->
									 		<div class="comment-meta">
									 			<h5 class="h5-sm mt-0">Joel Peterson</h5>											   		
										   		<span class="comment-date">February 08, 2020 at 9:31 pm - </span>
												<span class="btn-reply"><a href="#leave-comment" class="internal-link">reply</a></span>
											</div>
											
											<!-- Comment-1 Text -->	
									   		<p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra
									   		   suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean primis
									   		   in augue luctus neque purus ipsum neque dolor primis
									   		</p>

									   		<hr />

									   		<!-- COMMENT #2 -->
										    <div class="media mt-40">

										    	<!-- Comment-2 Avatar -->
										      	<a href="#" class="pr-3">
										        	<img src="./assets/images/post-author-2.jpg" alt="comment-avatar">
										      	</a>

										      	<div class="media-body">

										      		<!-- Comment-2 Meta -->
											 		<div class="comment-meta">
												   		<h5 class="h5-sm mt-0">Michael</h5>
												   		<span class="comment-date">February 12, 2020 at 04:17 pm - </span>
														<span class="btn-reply"><a href="#leave-comment" class="internal-link" >reply</a></span>
													</div>

										        	<!-- Comment-2 Text -->	
											   		<p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra suscipit
											   		   porta ratione, mollis risus lectus porta 
											   		</p>

										     	 </div>											      
										    </div>	<!-- END COMMENT #2 -->

									  	</div>
									</div>	<!-- END COMMENT #1 -->


									<hr />


									<!-- COMMENT #3 -->
									<div class="media mt-40">

										<!-- Comment-4 Avatar -->
									  	<img class="mr-3" src="./assets/images/post-author-3.jpg" alt="comment-avatar">

									 	<div class="media-body">

									 		<!-- Comment-4 Meta -->
									 		<div class="comment-meta">
										   		<h5 class="h5-sm mt-0">Samantha</h5>
										   		<span class="comment-date">January 29, 2020 at 5:26 pm - </span>
												<span class="btn-reply"><a href="#leave-comment" class="internal-link">reply</a></span>
											</div>
											
											<!-- Comment-4 Text -->	
									   		<p>Porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue luctus
									   		   neque purus ipsum neque dolor primis libero tempus, tempor posuere ligula varius
									   		   impedit enim tempor vitae pulvinar congue augue egestas
									   		</p>

									   </div>
									</div>	<!-- END COMMENT #3 -->	


									<!-- COMMENT #4 -->
									<div class="media mt-40">

										<!-- Comment-4 Avatar -->
									  	<img class="mr-3" src="./assets/images/post-author-4.jpg" alt="comment-avatar">

									 	<div class="media-body">

									 		<!-- Comment-4 Meta -->
									 		<div class="comment-meta">
										   		<h5 class="h5-sm mt-0">Aaron Wall</h5>
										   		<span class="comment-date">January 23, 2020 at 02:34 pm - </span>
												<span class="btn-reply"><a href="#leave-comment" class="internal-link">reply</a></span>
											</div>
											
											<!-- Comment-4 Text -->	
									   		<p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra
									   		   suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean
									   		   primis in augue auctor integer congue
									   		</p>

									   </div>
									</div>	<!-- END COMMENT #4 -->		


								</div>	 <!-- END POST COMMENTS -->

						
								<!-- COMMENT FORM -->
								<div id="leave-comment" class="mt-80">
									
									<!-- Title -->
									<h5 class="h5-xl">Leave a Comment</h5>
									
									<!-- Text -->
									<p class="grey-color">Your email address will not be published. Required fields are marked *</p>
									
									<!-- Comment Form Inputs -->
									<form name="commentform" class="comment-form row mt-40">

										<!-- Contact Form Input -->
										<div id="post-message" class="col-md-12">
											<p>Add Comment *</p>
											<textarea class="form-control comment" name="message" rows="6" placeholder="Enter your comment here ..."></textarea>
										</div> 

										<div id="post-name" class="col-md-12">
											<p>Name*</p>
											<input type="text" name="name" class="form-control name" placeholder="Your Name"> 
										</div>
													
										<div id="post-email" class="col-md-12">
											<p>Email*</p>
											<input type="text" name="email" class="form-control email" placeholder="Email Address"> 
										</div>
															
										<!-- Comment Form Button -->
										<div class="col-md-12 comment-form-btn mt-20 text-right">	
											<button type="submit" class="btn btn-primary black-hover submit">Post Comment</button>	
										</div>	

										<!-- Comment Form Message -->
										<div class="col-md-12 comment-form-msg">
											<span class="loading"></span>
										</div>				
																		
													
									</form>		
								
								</div>	<!-- END COMMENT FORM -->


							</div>
						</div>    <!-- End row -->
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
