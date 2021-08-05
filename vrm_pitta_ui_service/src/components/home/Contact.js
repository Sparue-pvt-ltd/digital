import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `<section id="contacts-2" class="bg-primary bg-map contacts-section division">
<div class="container white-color">
    <div class="row">


        <!-- LOCATION -->
        <div class="col-md-4">
            <div class="contact-box icon-sm clearfix">

                <!-- Icon -->
                <img class="img-50" src="./assets/images/icons/placeholder-4.png" alt="clock-icon" />

                <!-- Text -->
                <div class="cbox-2-txt">

                    <!-- Title -->
                    <h5 class="h5-lg">Our Location:</h5>

                    <!-- Title -->
                    <p><strong>US Address:</strong></p>
                    <p>30 N Gould St</p>
                    <p>STE R Sheridan, Wyoming 82801</p>
                    <br/>
                    <p><strong>Second Address:</strong></p>
                    <p>2400 N 2nd St.,</p>
                    <p>Minneapolis, MN 55414</p>
                    <br/>
                    <p><strong>India Address:</strong></p>
                    <p>2nd Floor, H No 2-56/10/A, Chanda Naik Nagar,</p>
                    <p>Near Ayyappa society Madhapur, Hyderabad, 500081</p>

                </div>

            </div>
        </div>


        <!-- QUICK CONTACTS -->
        <div class="col-md-4">
            <div class="contact-box icon-sm clearfix">

                <!-- Icon -->
                <img class="img-50" src="./assets/images/icons/contacts.png" alt="clock-icon" />

                <!-- Text -->
                <div class="cbox-2-txt">

                    <!-- Title -->
                    <h5 class="h5-lg">Quick Contacts:</h5>

                    <!-- Text -->
                    <a href="tel:+914042027115" class="last-link last-link-number">
                        Phone: +91-4042027115
                    </a>

                </div>

            </div>
        </div>


        <!-- WORKING HOURS -->
        <div class="col-md-4">
            <div class="contact-box clearfix">

                <!-- Icon -->
                <img class="img-50" src="./assets/images/icons/clock-1.png" alt="clock-icon" />

                <!-- Text -->
                <div class="cbox-2-txt">

                    <!-- Title -->
                    <h5 class="h5-lg">Office Hours:</h5>

                    <!-- Text -->
                    <p>Mon-Fri: 8:30AM - 7:30PM</p>
                    <p>Saturday: 8:30AM - 3:30PM</p>
                    <p>Sunday: 12:00PM - 5:00PM</p>

                </div>

            </div>
        </div>


    </div> <!-- End row -->
</div> <!-- End container -->
</section>`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Contact extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Contact;
