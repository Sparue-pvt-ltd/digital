import React, { Component } from "react";

const current_year = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (
      <footer id="footer-2" class="pt-100 footer division">
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-lg-4">
              <div class="footer-info mb-40">
                <img
                  src="./assets/images/vrm_pitta.png"
                  width="250"
                  height="150"
                  alt="footer-logo"
                />

                {/* <p>
                  Aliquam orci a nullam tempor sapien gravida donec enim ipsum
                  porta justo velna an auctor undo congue magna laoreet augue
                  sapien
                </p> */}
              </div>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2">
              <div class="footer-links mb-40">
                <h5 class="h5-sm">Quick Links</h5>

                <ul class="foo-links clearfix">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="/case-studies">Case Studies</a>
                  </li>
                  <li>
                    <a href="/contacts">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3">
              <div class="footer-links mb-40">
                <h5 class="h5-sm">Featured Services</h5>

                <ul class="clearfix">
                  <li>
                    <a href="/service-search-engine-optimisation">Search Engine Optimisation</a>
                  </li>
                  <li>
                    <a href="/service-content-writing-services">Content Writing Services</a>
                  </li>
                  <li>
                    <a href="/service-app-search-optimisation">App Search Optimisation</a>
                  </li>
                  <li>
                    <a href="/service-digital-strategy-consulting">Digital Strategy & Consulting</a>
                  </li>
                  <li>
                    <a href="/service-creative-design-services">Creative Design Services</a>
                  </li>
                  <li>
                    <a href="/service-react-development">React.js Development</a>
                  </li>
                  <li>
                    <a href="/service-node-development">Node.js Development</a>
                  </li>
                  <li>
                    <a href="/service-responsive-web-design">Responsive Web Design</a>
                  </li>
                  <li>
                    <a href="/service-intuitive-ui-designs">Intuitive UI / UX designs</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-5 col-lg-3 col-xl-3">
              <div class="footer-form mb-20">
                <h5 class="h5-sm">Follow the Best</h5>

                <form class="newsletter-form">
                  <div class="input-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      required
                      id="s-email"
                    />
                    <span class="input-group-btn">
                      <button type="submit" class="btn">
                        <i class="far fa-arrow-alt-circle-right"></i>
                      </button>
                    </span>
                  </div>

                  <label for="s-email" class="form-notification"></label>
                </form>
              </div>
            </div>
          </div>

          <div class="bottom-footer">
            <div class="row">
              <div class="col-lg-8">
                <ul class="bottom-footer-list">
                  <li>
                    <p>&copy; Copyright {current_year}</p>
                  </li>
                  <li>
                    <p>
                      <a href="tel:+914042027115">+91-4042027115</a>
                    </p>
                  </li>
                  <li>
                    <p class="last-li">
                      <a href="mailto:yourdomain@mail.com">support@vrmpitta.com</a>
                    </p>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 text-right">
                <ul class="foo-socials text-center clearfix">
                <li><a href="https://www.facebook.com/profile.php?id=100071026336584"  class="ico-facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.linkedin.com/company/vrm-pitta-private-limited"  class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/vrmpitta/"  class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
