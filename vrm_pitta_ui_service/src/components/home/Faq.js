import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `<section id="faqs-1" class="wide-100 faqs-section division">
<div class="container">


  <!-- SECTION TITLE -->
  <div class="row">
    <div class="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">

      <!-- Title -->
      <h3 class="h3-lg">Frequently Asked Questions</h3>

      <!-- Text -->
      <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
        tempus, blandit posuere and ligula varius magna a porta elementum massa risus
      </p>

    </div>
  </div> <!-- END SECTION TITLE -->


  <!-- QUESTIONS HOLDER -->
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <div id="accordion" role="tablist">


        <!-- QUESTION #1 -->
        <div class="card wow fadeInUp" data-wow-delay="0.4s">

          <!-- Question -->
          <div class="card-header" role="tab" id="headingOne">
            <h5 class="h5-sm">
              <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true"
                aria-controls="collapseOne">
                Do you require a contract?
              </a>
            </h5>
          </div>

          <!-- Answer -->
          <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne"
            data-parent="#accordion">
            <div class="card-body">

              <!-- Text -->
              <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo.
                Velna vitae and
                congue auctor magna nihil impedit ligula risus. Mauris donec ociis et magnis
                sapien etiam
                sapien sagittis congue tempor gravida donec enim ipsum porta justo integer
                at odio velna
                placerat purus, aliquet elementum massa mollis risus lectus porta rutrum
                magna dignissim,
                porttitor hendrerit
              </p>

            </div>
          </div>


        </div> <!-- END QUESTION #1 -->


        <!-- QUESTION #2 -->
        <div class="card wow fadeInUp" data-wow-delay="0.6s">

          <!-- Question -->
          <div class="card-header" role="tab" id="headingTwo">
            <h5 class="h5-sm">
              <a class="collapsed" data-toggle="collapse" href="#collapseTwo" role="button"
                aria-expanded="false" aria-controls="collapseTwo">
                Should I ask to see law firm website ranking proof?
              </a>
            </h5>
          </div>

          <!-- Answer -->
          <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo"
            data-parent="#accordion">
            <div class="card-body">

              <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque
                vel laoreet
                turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar
                consectetur
                nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce
                eu cursus est.
                Fusce non nulla vitae massa placerat vulputate vel a purus
              </p>

            </div>
          </div>

        </div> <!-- END QUESTION #2 -->


        <!-- QUESTION #3 -->
        <div class="card wow fadeInUp" data-wow-delay="0.8s">

          <!-- Question -->
          <div class="card-header" role="tab" id="headingThree">
            <h5 class="h5-sm">
              <a class="collapsed" data-toggle="collapse" href="#collapseThree" role="button"
                aria-expanded="false" aria-controls="collapseThree">
                Do you provide details of what SEO work you will be doing?
              </a>
            </h5>
          </div>

          <!-- Answer -->
          <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree"
            data-parent="#accordion">
            <div class="card-body">

              <!-- Text -->
              <p>Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien
                egestas,
                congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas
                neque vitae
                auctor eros dolor luctus odio placerat magna cursus
              </p>

              <!-- List -->
              <ul class="txt-list">

                <li>Vitae auctor integer congue magna at pretium</li>

                <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus
                  risus eros dolor auctor
                  ipsum blandit purus vehicula magna and luctus tempor quisque
                </li>

                <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et
                  magnis ipsum porta justo
                  integer velna purus ehicula magna luctus vel laoreet turpis
                </li>

              </ul>

            </div>
          </div>

        </div> <!-- END QUESTION #3 -->


        <!-- QUESTION #4 -->
        <div class="card wow fadeInUp" data-wow-delay="1s">

          <!-- Question -->
          <div class="card-header" role="tab" id="headingFour">
            <h5 class="h5-sm">
              <a class="collapsed" data-toggle="collapse" href="#collapseFour" role="button"
                aria-expanded="false" aria-controls="collapseFour">
                What is on-page search engine optimization?
              </a>
            </h5>
          </div>

          <!-- Answer -->
          <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour"
            data-parent="#accordion">
            <div class="card-body">

              <!-- Text -->
              <p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit
                tristique justo
                ut aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non
                molestie sed purus,
                venenatis nec. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt
                massa, et porttitor
              </p>

            </div>
          </div>

        </div> <!-- END QUESTION #4 -->


        <!-- QUESTION #5 -->
        <div class="card wow fadeInUp" data-wow-delay="1.2s">

          <!-- Question -->
          <div class="card-header" role="tab" id="headingFive">
            <h5 class="h5-sm">
              <a class="collapsed" data-toggle="collapse" href="#collapseFive" role="button"
                aria-expanded="false" aria-controls="collapseFive">
                How much do your monthly services cost?
              </a>
            </h5>
          </div>

          <!-- Answer -->
          <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive"
            data-parent="#accordion">
            <div class="card-body">

              <!-- List -->
              <ul class="txt-list">

                <li>Vitae auctor integer congue magna at pretium</li>

                <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus
                  risus eros dolor auctor
                  ipsum blandit purus vehicula magna and luctus tempor quisque
                </li>

                <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et
                  magnis ipsum porta justo
                  integer velna purus ehicula magna luctus vel laoreet turpis
                </li>

              </ul>

            </div>
          </div>

        </div> <!-- END QUESTION #5 -->


      </div> <!-- END ACCORDION -->
    </div> <!-- End col-x -->
  </div> <!-- END QUESTIONS HOLDER -->


  <!-- MORE QUESTIONS BUTTON -->
  <div class="row">
    <div class="col-md-12 text-center more-questions">
      <h5>Still have a question? <a href="/contacts" class="primary-color">Ask your question
          here</a></h5>
    </div>
  </div>


</div> <!-- End container -->
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Faq extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Faq;
