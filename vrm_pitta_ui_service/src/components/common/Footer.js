import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<footer id="footer-2" class="pt-100 footer division">
<div class="container">


  <!-- FOOTER CONTENT -->
  <div class="row">


    <!-- FOOTER INFO -->
    <div class="col-md-10 col-lg-4">
      <div class="footer-info mb-40">

        <!-- Footer Logo -->
        <!-- For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 364 x 90 pixels) -->
        <img src="./assets/images/vrm_pitta.png" width="120" height="70" alt="footer-logo">

        <!-- Text -->
        <p>Aliquam orci a nullam tempor sapien gravida donec enim ipsum porta justo velna an auctor
          undo congue magna laoreet augue sapien
        </p>

      </div>
    </div>


    <!-- FOOTER PRODUCTS LINKS -->
    <div class="col-md-3 col-lg-2 col-xl-2">
      <div class="footer-links mb-40">

        <!-- Title -->
        <h5 class="h5-sm">Quick Links</h5>

        <!-- Footer Links -->
        <ul class="foo-links clearfix">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/">Case Studies</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>
    </div>


    <!-- FOOTER COMPANY LINKS -->
    <div class="col-md-4 col-lg-3 col-xl-3">
      <div class="footer-links mb-40">

        <!-- Title -->
        <h5 class="h5-sm">Featured Services</h5>

        <!-- Footer Links -->
        <ul class="clearfix">
          <li><a href="#">Local SEO</a></li>
          <li><a href="#">Social Media Marketing</a></li>
          <li><a href="#">Pay Per Click Management</a></li>
          <li><a href="#">Search Engine Optimization</a></li>
          <li><a href="#">Free SEO Analysis</a></li>
        </ul>

      </div>
    </div>


    <!-- FOOTER NEWSLETTER FORM -->
    <div class="col-md-5 col-lg-3 col-xl-3">
      <div class="footer-form mb-20">

        <!-- Title -->
        <h5 class="h5-sm">Follow the Best</h5>

        <!-- Newsletter Form Input -->
        <form class="newsletter-form">

          <div class="input-group">
            <input type="email" class="form-control" placeholder="Email Address" required
              id="s-email">
            <span class="input-group-btn">
              <button type="submit" class="btn">
                <i class="far fa-arrow-alt-circle-right"></i>
              </button>
            </span>
          </div>

          <!-- Newsletter Form Notification -->
          <label for="s-email" class="form-notification"></label>

        </form>

      </div>
    </div> <!-- END FOOTER NEWSLETTER FORM -->


  </div> <!-- END FOOTER CONTENT -->


  <!-- BOTTOM FOOTER -->
  <div class="bottom-footer">
    <div class="row">


      <!-- FOOTER COPYRIGHT -->
      <div class="col-lg-8">
        <ul class="bottom-footer-list">
          <li>
            <p>&copy; Copyright Metreex 2020</p>
          </li>
          <li>
            <p><a href="tel:123456789">508.746.9892</a></p>
          </li>
          <li>
            <p class="last-li"><a href="mailto:yourdomain@mail.com">hello@domain.com</a></p>
          </li>
        </ul>
      </div>


      <!-- FOOTER SOCIALS LINKS -->
      <div class="col-lg-4 text-right">
        <ul class="foo-socials text-center clearfix">

          <li><a href="#" class="ico-facebook"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#" class="ico-twitter"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#" class="ico-google-plus"><i class="fab fa-google-plus-g"></i></a></li>
          <li><a href="#" class="ico-tumblr"><i class="fab fa-tumblr"></i></a></li>

          <!--
          <li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>	
          <li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>									
          <li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
          <li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
          <li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>								
          <li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>										
          <li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>
          <li><a href="#" class="ico-yelp"><i class="fab fa-yelp"></i></a></li>
          <li><a href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></a></li>
          -->

        </ul>
      </div>


    </div>
  </div> <!-- END BOTTOM FOOTER -->


</div> <!-- End container -->
</footer> <!-- END FOOTER-2 -->
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Footer extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}

export default Footer;
