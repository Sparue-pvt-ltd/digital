import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb from "../components/common/Breadcrumb";
import AllServices from "../components/services/AllServices";
import Calltoaction from "../components/common/Calltoaction";
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
          <Breadcrumb content="Services" />
          <AllServices />
          <Calltoaction/>
        </div>
      </CommonLayout>
    </>
  );
}

export default Services;
