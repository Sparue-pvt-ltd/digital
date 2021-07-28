import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="content-2" class="wide-60 content-section division">
<div class="container">
    <div class="row d-flex align-items-center">


        <!-- IMAGE BLOCK -->
        <div class="col-md-5 col-lg-6">
            <div class="img-block pr-25 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                <img class="img-fluid" src="./assets/images/image-03.png" alt="content-image">
            </div>
        </div>


        <!-- TEXT BLOCK -->
        <div class="col-md-7 col-lg-6">
            <div class="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">

                <!-- Title -->
                <h4 class="h4-xl">Integrated marketing solutions that business growth</h4>

                <!-- Text -->
                <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer and
                    odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus
                    and ultrice a gravida lectus
                </p>

                <!-- List -->
                <ul class="ico-list mb-10">
                    <li><i class="fas fa-check grey-color"></i> <span>Vitae auctor integer congue magna at
                            pretium</span></li>
                    <li><i class="fas fa-check grey-color"></i> <span>Integer congue magna and pretium purus
                            ligula</span></li>
                    <li><i class="fas fa-check grey-color"></i> <span>Sagittis congue augue egestas volutpat
                            egestas</span></li>
                </ul>

                <!-- Button -->
                <a href="resources.html" class="btn btn-md btn-primary tra-black-hover">Our Resources</a>

            </div>
        </div> <!-- END TEXT BLOCK -->

    </div>
</div>
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Content1 extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Content1;
