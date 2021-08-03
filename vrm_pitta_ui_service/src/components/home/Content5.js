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
								<div class="cbox-1-txt">
									<p>
									VRMP SEO solutions do more than just increase the amount and quality of traffic to your website. They also increase product visibility, customer trust, customer loyalty, conversions, and total return on investment.

									However, we do not believe in solutions that are the same size.
									
									Instead, we offer a variety of services so you can choose the right amount of SEO for your needs. When choosing an online SEO marketing plan, we will work directly with you to find specific goals you have for your organization so that we can achieve them as a whole.
									
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
