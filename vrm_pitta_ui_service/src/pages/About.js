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

function About() {
  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero cssId="about-page" heroTitle="About Vrm Pitta" heroDescription="We provide professional PPC, Web and SEO services to
                    increase online visibility and qualified leads to your
                    business"/>
          <Breadcrumb content="About"/>
          <About1/>
          <Services/>
          <About2/>
          <Statistic/>
          <Tabs/>
          <Testimonials/>
          <Brands/>
          <Calltoaction/>
        </div>
      </CommonLayout>
    </>
  );
}

export default About;
