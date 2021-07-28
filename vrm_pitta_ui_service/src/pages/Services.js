import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb from "../components/common/Breadcrumb";
import About1 from "../components/about/About";
import Services1 from "../components/about/Services";
import About2 from "../components/common/About";
import Statistic from "../components/about/Statistic";
import Tabs from "../components/about/Tabs";
import Testimonials from "../components/about/Testimonials";
import Brands from "../components/common/Brands";
import Calltoaction from "../components/about/Calltoaction";

function Services() {
  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero
            cssId="services-page"
            heroTitle="Our Services"
            heroDescription="Are you looking to build a sustainable future for your website? We have a proven record of 
										achieving your ultimate goal"
          />
          <Breadcrumb content="Our Services" />
          <About1 />
          <Services1 />
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

export default Services;
