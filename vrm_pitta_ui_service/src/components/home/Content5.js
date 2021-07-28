import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="content-5" class="wide-60 content-section division">
			<div class="container">
				<div class="row d-flex align-items-center">


					<!-- TEXT BLOCK -->
					<div class="col-md-7 col-lg-6">
						<div class="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">

							<!-- Title -->
							<h4 class="h4-xl">Our SEO plans will help you to dominate the search engines</h4>

							<!-- Text -->
							<div class="cbox-1">
								<i class="fas fa-check grey-color"></i>
								<div class="cbox-1-txt">
									<p>Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in
										ultrice ligula
										purus ipsum primis in cubilia
									</p>
								</div>
							</div>

							<!-- Text -->
							<div class="cbox-1">
								<i class="fas fa-check grey-color"></i>
								<div class="cbox-1-txt">
									<p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros
										dolor auctor
										ipsum blandit purus vehicula magna and luctus tempor quisque turpis magna ligula
									</p>
								</div>
							</div>

							<!-- Text -->
							<div class="cbox-1">
								<i class="fas fa-check grey-color"></i>
								<div class="cbox-1-txt">
									<p>An enim nullam tempor sapien gravida donec enim blandit ipsum at porta justo
										integer velna
										vitae auctor integer congue magna pretium purus pretium magnis nulla dolor
										sapien
									</p>
								</div>
							</div>

							<!-- Text -->
							<div class="cbox-1">
								<i class="fas fa-check grey-color"></i>
								<div class="cbox-1-txt">
									<p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros
										dolor auctor
										ipsum blandit purus
									</p>
								</div>
							</div>

						</div>
					</div> <!-- END TEXT BLOCK -->


					<!-- IMAGE BLOCK -->
					<div class="col-md-5 col-lg-6">
						<div class="content-5-img mb-40 wow fadeInRight" data-wow-delay="0.6s">
							<img class="img-fluid" src="./assets/images/image-09.png" alt="content-image">
						</div>
					</div>


				</div> <!-- End row -->
			</div> <!-- End container -->
		</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Content5 extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Content5;
