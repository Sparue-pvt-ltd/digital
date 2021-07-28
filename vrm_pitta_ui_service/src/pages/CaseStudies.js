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

function CaseStudies() {
  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero
            cssId="case-studies-page"
            heroTitle="Real Results Delivered"
            heroDescription="We bring innovative thinking, adaptive methodology, strong ethics and years of expertise to 
            the SEO and web design industry"
          />
          <Breadcrumb content="Case Studies" />
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

export default CaseStudies;
