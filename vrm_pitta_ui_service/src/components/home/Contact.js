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
                    <p>Merteex Processing, Inc</p>
                    <p>121 King Street, Melbourne,</p>
                    <p>Victoria 3000 Australia</p>

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
                    <p>Phone: +12 3 3456 7890</p>
                    <p>Fax: +12 9 8765 4321</p>
                    <p><a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>

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
