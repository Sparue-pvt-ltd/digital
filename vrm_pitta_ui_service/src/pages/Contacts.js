import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb from "../components/common/Breadcrumb";
import About1 from "../components/about/About";
import Services from "../components/about/Services";
import About2 from "../components/common/About";
import Statistic from "../components/about/Statistic";
import Tabs from "../components/about/Tabs";
import Testimonials from "../components/about/Testimonials";
import Brands from "../components/common/Brands";
import Calltoaction from "../components/about/Calltoaction";

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
          <Breadcrumb content="Contact Us" />
          <About1 />
          <Services />
          <About2 />
          <Statistic />
          <Tabs />
          <Testimonials />
          <Brands />
          <Calltoaction />
        </div>
      </CommonLayout>
    </>
  );
}

export default Contacts;
