import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb from "../components/common/Breadcrumb";
import Calltoaction from "../components/common/Calltoaction";

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
          <Calltoaction />
        </div>
      </CommonLayout>
    </>
  );
}

export default CaseStudies;
