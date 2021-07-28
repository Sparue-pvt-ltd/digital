import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `<div id="brands-2" class="bg-lightgrey brands-section division">
<div class="container">
    <div class="row">
        <div class="col-md-12 text-center">

            <!-- Title -->
            <p class="p-lg grey-color">Used by startups, e-stores, web designers, and teams including:</p>

            <ul class="brands-list">

                <!-- BRAND LOGO IMAGE -->
                <li class="brand-logo">
                    <img class="img-fluid" src="./assets/images/brand-1.png" alt="brand-logo" />
                </li>

                <!-- BRAND LOGO IMAGE -->
                <li class="brand-logo">
                    <img class="img-fluid" src="./assets/images/brand-2.png" alt="brand-logo" />
                </li>

                <!-- BRAND LOGO IMAGE -->
                <li class="brand-logo">
                    <img class="img-fluid" src="./assets/images/brand-3.png" alt="brand-logo" />
                </li>

                <!-- BRAND LOGO IMAGE -->
                <li class="brand-logo">
                    <img class="img-fluid" src="./assets/images/brand-4.png" alt="brand-logo" />
                </li>

                <!-- BRAND LOGO IMAGE -->
                <li class="brand-logo">
                    <img class="img-fluid" src="./assets/images/brand-5.png" alt="brand-logo">
                </li>

                <!-- BRAND LOGO IMAGE -->
                <li class="brand-logo">
                    <img class="img-fluid" src="./assets/images/brand-6.png" alt="brand-logo" />
                </li>

                <!-- BRAND LOGO IMAGE -->
                <li class="brand-logo">
                    <img class="img-fluid" src="./assets/images/brand-7.png" alt="brand-logo" />
                </li>

                <!-- BRAND LOGO IMAGE -->
                <li class="brand-logo">
                    <img class="img-fluid" src="./assets/images/brand-8.png" alt="brand-logo" />
                </li>

                <!-- BRAND LOGO IMAGE -->
                <li class="brand-logo">
                    <img class="img-fluid" src="./assets/images/brand-9.png" alt="brand-logo" />
                </li>

            </ul>

        </div>
    </div> <!-- End row -->
</div> <!-- End container -->
</div>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Brands extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Brands;
