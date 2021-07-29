import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<header id="header" class="header tra-menu navbar-light">
<div class="header-wrapper">
    <div class="wsmobileheader clearfix">
        <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
        <span class="smllogo smllogo-black"><img src="./assets/images/vrm_pitta.png" width="80" height="40" alt="mobile-logo"/></span>
        
        <a href="tel:123456789" class="callusbtn"><i class="fas fa-phone"></i></a>
     </div>

      <div class="wsmainfull menu clearfix">
        <div class="wsmainwp clearfix">

            <div class="desktoplogo"><a href="/" class="logo-black"><img src="./assets/images/vrm_pitta.png" width="80" height="40" alt="header-logo"/></a></div>
            <div class="desktoplogo"><a href="/" class="logo-white"><img src="./assets/images/vrm_pitta_white.png" width="80" height="40" alt="header-logo"/></a></div>

              <nav class="wsmenu clearfix blue-header">
                <ul class="wsmenu-list">

                    <li class="nl-simple" aria-haspopup="true"><a href="/about">About</a></li>

                    <li class="nl-simple" aria-haspopup="true"><a href="/services">Services</a></li>

                    <li class="nl-simple" aria-haspopup="true"><a href="/pricing">Pricing</a></li>

                    <li class="nl-simple" aria-haspopup="true"><a href="/case-studies">Case Studies</a></li>

                    <li class="nl-simple" aria-haspopup="true"><a href="/contacts">Contacts</a></li>

                    <li class="nl-simple primary-scroll" aria-haspopup="true">
                        <a href="tel:+918303871828" class="last-link last-link-number">
                            <i class="fas fa-phone-square-alt"></i> +91-8303871828
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</header>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Header extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Header;
