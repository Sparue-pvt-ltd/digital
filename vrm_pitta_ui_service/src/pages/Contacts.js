import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb from "../components/common/Breadcrumb";
import Calltoaction from "../components/common/Calltoaction";
import Form from "../components/contacts/Form";

function Contacts() {
  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero
            cssId="contacts-page"
            heroTitle="Let’s Keep In Touch"
            heroDescription="Question? Comment? Let us know how can we help you. Fill in the contact form below to get in touch with us"
          />
          <Breadcrumb content="Contact Us"/>
          <Form/>
          
          <Calltoaction />
        </div>
      </CommonLayout>
    </>
  );
}

export default Contacts;
