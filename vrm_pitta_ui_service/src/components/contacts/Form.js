import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="contacts-1" class="wide-60 contacts-section division">
<div class="container">
    <div class="row">


        <!-- CONTACT FORM -->
        <div class="col-lg-8">
            <div class="form-holder mb-40 pc-25">
                <form name="contactform" class="row contact-form">
                                                                        
                    <!-- Contact Form Input -->
                    <div id="input-name" class="col-md-6">
                        <input type="text" name="name" class="form-control name" placeholder="Your Name"> 
                    </div>
                                
                    <div id="input-email" class="col-md-6">
                        <input type="text" name="email" class="form-control email" placeholder="Email Address"> 
                    </div>

                    <div id="input-subject" class="col-md-12">
                        <input type="text" name="subject" class="form-control subject" placeholder="What's this about?"> 
                    </div>

                    <div id="input-message" class="col-md-12 input-message">
                        <textarea class="form-control message" name="message" rows="6" placeholder="Your Message ..."></textarea>
                    </div> 
                                                                        
                    <!-- Contact Form Button -->
                    <div class="col-lg-12 mt-10 form-btn text-right">	
                        <button type="submit" class="btn btn-md btn-green deepgreen-hover submit">Send Message</button>	
                    </div>
                                                                                                            
                    <!-- Contact Form Message -->
                    <div class="col-lg-12 contact-form-msg">
                        <span class="loading"></span>
                    </div>	
                                                                            
                </form>	
            </div>	
        </div>	<!-- END CONTACT FORM -->	


        <!-- CONTACTS INFO -->
        <div class="col-lg-4">
            <div class="contacts-info pc-25">

                <!-- LOCATION -->
                <div class="contact-box wow fadeInUp" data-wow-delay="0.4s">
                    <h5 class="h5-sm">Our Location:</h5>
                    <p class="grey-color"><strong>US Address:</strong></p>
                    <p class="grey-color">30 N Gould St</p>
                    <p class="grey-color">STE R Sheridan, Wyoming 82801</p>
                    <br/>
                    <p class="grey-color"><strong>Second Address:</strong></p>
                    <p class="grey-color">2400 N 2nd St.,</p>
                    <p class="grey-color">Minneapolis, MN 55414</p>
                    <br/>
                    <p class="grey-color"><strong>India Address:</strong></p>
                    <p class="grey-color">2nd Floor, H No 2-56/10/A, Chanda Naik Nagar,</p>
                    <p class="grey-color">Near Ayyappa society Madhapur, Hyderabad, 500081 </p>
                </div>

                <!-- PHONES -->
                <div class="contact-box wow fadeInUp" data-wow-delay="0.6s">
                    <h5 class="h5-sm">Contact Phones:</h5>
                    <a href="tel:+914042027115" class="grey-color">
                        Phone: +91-4042027115
                    </a>
                </div>

                <!-- WORKING HOURS -->
                <div class="contact-box wow fadeInUp" data-wow-delay="0.8s">
                    <h5 class="h5-sm">Office Hours:</h5>
                    <p class="grey-color">Mon - Fri: 8:30am - 7:30pm</p>
                    <p class="grey-color">Saturday: 8:30am - 3:30pm</p>
                    <p class="grey-color">Sunday: 12:00PM - 5:00PM</p>
                </div>

            </div>
        </div>	<!-- END CONTACTS INFO -->


    </div>	  <!-- End row -->
</div>	   <!-- End container -->
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Form extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}

export default Form;
