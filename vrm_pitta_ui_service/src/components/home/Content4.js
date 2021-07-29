import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="projects-1" class="bg-lightgrey wide-60 projects-section division">
			<div class="container">


				<!-- SECTION TITLE -->
				<div class="row">
					<div class="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">

						<!-- Title 	-->
						<h3 class="h3-lg">We Leave Lasting Impressions</h3>

						<!-- Text -->
						<p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
							tempus, blandit posuere and ligula varius magna a porta elementum massa risus
						</p>

					</div>
				</div>


				<!-- PROJECTS IMAGES HOLDER -->
				<div class="row">


					<!-- IMAGE #1 -->
					<div class="col-md-6 col-lg-4">
						<div class="project-1 wow fadeInUp" data-wow-delay="0.4s">
							<a href="project-details.html">

								<!-- Brand Logo -->
								<img class="img-fluid" src="./assets/images/brand-1.png" alt="project-logo" />

								<!-- Category -->
								<p>Burger Restaurant Website</p>

								<!-- Project Data -->
								<div class="project-data">

									<div class="pd-box d-flex align-items-center clearfix">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 270%
										</h5>
										<p class="p-sm">Increase in Website Traffic</p>
									</div>

									<div class="pd-box d-flex align-items-center ">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 110%
										</h5>
										<p class="p-sm">Increase in Leads</p>
									</div>
								</div>

							</a>
						</div>
					</div> <!-- END IMAGE #1 -->


					<!-- IMAGE #2 -->
					<div class="col-md-6 col-lg-4">
						<div class="project-1 wow fadeInUp" data-wow-delay="0.6s">
							<a href="project-details.html">

								<!-- Brand Logo -->
								<img class="img-fluid" src="./assets/images/brand-7.png" alt="project-logo" />

								<!-- Category -->
								<p>Travel Website</p>

								<!-- Project Data -->
								<div class="project-data">

									<div class="pd-box d-flex align-items-center clearfix">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 340%
										</h5>
										<p class="p-sm">Increase in Website Traffic</p>
									</div>

									<div class="pd-box d-flex align-items-center ">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 178%
										</h5>
										<p class="p-sm">Increase in Leads</p>
									</div>
								</div>

							</a>
						</div>
					</div> <!-- END IMAGE #2 -->


					<!-- IMAGE #3 -->
					<div class="col-md-6 col-lg-4">
						<div class="project-1 wow fadeInUp" data-wow-delay="0.8s">
							<a href="project-details.html">

								<!-- Brand Logo -->
								<img class="img-fluid" src="./assets/images/brand-3.png" alt="project-logo" />

								<!-- Category -->
								<p>Freelancer Website</p>

								<!-- Project Data -->
								<div class="project-data">

									<div class="pd-box d-flex align-items-center clearfix">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 260%
										</h5>
										<p class="p-sm">Increase in Website Traffic</p>
									</div>

									<div class="pd-box d-flex align-items-center ">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 160%
										</h5>
										<p class="p-sm">Increase in Leads</p>
									</div>
								</div>

							</a>
						</div>
					</div> <!-- END IMAGE #3 -->


					<!-- IMAGE #4 -->
					<div class="col-md-6 col-lg-4">
						<div class="project-1 wow fadeInUp" data-wow-delay="1s">
							<a href="project-details.html">

								<!-- Brand Logo -->
								<img class="img-fluid" src="./assets/images/brand-4.png" alt="project-logo" />

								<!-- Category -->
								<p>Homestays or Tourism Website</p>

								<!-- Project Data -->
								<div class="project-data">

									<div class="pd-box d-flex align-items-center clearfix">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 268%
										</h5>
										<p class="p-sm">Increase in Website Traffic</p>
									</div>

									<div class="pd-box d-flex align-items-center ">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 182%
										</h5>
										<p class="p-sm">Increase in Leads</p>
									</div>
								</div>

							</a>
						</div>
					</div> <!-- END IMAGE #4 -->


					<!-- IMAGE #5 -->
					<div class="col-md-6 col-lg-4">
						<div class="project-1 wow fadeInUp" data-wow-delay="1.2s">
							<a href="project-details.html">

								<!-- Brand Logo -->
								<img class="img-fluid" src="./assets/images/brand-5.png" alt="project-logo" />

								<!-- Category -->
								<p>Organic Food Website</p>

								<!-- Project Data -->
								<div class="project-data">

									<div class="pd-box d-flex align-items-center clearfix">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 315%
										</h5>
										<p class="p-sm">Increase in Website Traffic</p>
									</div>

									<div class="pd-box d-flex align-items-center ">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 214%
										</h5>
										<p class="p-sm">Increase in Leads</p>
									</div>
								</div>

							</a>
						</div>
					</div> <!-- END IMAGE #5 -->


					<!-- IMAGE #6 -->
					<div class="col-md-6 col-lg-4">
						<div class="project-1 wow fadeInUp" data-wow-delay="1.4s">
							<a href="project-details.html">

								<!-- Brand Logo -->
								<img class="img-fluid" src="./assets/images/brand-6.png" alt="project-logo" />

								<!-- Category -->
								<p>e-Commerce Business</p>

								<!-- Project Data -->
								<div class="project-data">

									<div class="pd-box d-flex align-items-center clearfix">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 195%
										</h5>
										<p class="p-sm">Increase in Website Traffic</p>
									</div>

									<div class="pd-box d-flex align-items-center ">
										<h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 96%
										</h5>
										<p class="p-sm">Increase in Leads</p>
									</div>
								</div>

							</a>
						</div>
					</div> <!-- END IMAGE #6 -->


				</div> <!-- END PROJECTS IMAGES HOLDER -->


				<!-- ALL PROJECTS BUTTON -->
				<div class="row">
					<div class="col-md-12 text-center all-projects-btn">
						<a href="/case-studies" class="btn btn-md btn-primary tra-black-hover">See All Case
							Studies</a>
					</div>
				</div>


			</div> <!-- End container -->
		</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Content4 extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Content4;
