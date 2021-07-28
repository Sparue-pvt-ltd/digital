import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="hero-4" class="bg-fixed hero-section division">
<div class="container">
    <div class="row">

        <div class="col-xl-10 offset-xl-1">
            <div class="hero-txt text-center white-color">

                <h3>Get more sales with SEO, PPC, and Email Marketing</h3>

                <p>Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue
                    luctus
                    magna dolor luctus undo magna an dolor
                </p>

                <div class="form-holder text-center">
                    <form name="seoForm" class="row seo-form">

                        <div id="input-email" class="col-lg-4">
                            <input type="text" name="email" class="form-control email"
                                placeholder="Email Address*">
                        </div>

                        <div id="input-url" class="col-lg-5">
                            <input type="url" name="url" class="form-control url"
                                placeholder="Your Website*" value="http://www./">
                        </div>

                        <div class="col-lg-3 form-btn">
                            <button type="submit" class="btn btn-yellow black-hover submit">Let's
                                Started</button>
                        </div>

                        <div class="col-lg-12 seo-form-msg"><span class="loading"></span></div>

                    </form>
                </div>

                <div class="hero-links">
                    <span>No credit card required</span>
                    <span>* <a href="#">See FAQ</a> for more details</span>
                    <span><a href="#">Privacy Policy</a></span>
                </div>

            </div>
        </div>
    </div>
</div>
</section>`

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Hero extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Hero;
