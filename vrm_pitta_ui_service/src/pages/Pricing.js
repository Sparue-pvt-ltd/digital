import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb from "../components/common/Breadcrumb";
import Calltoaction from "../components/common/Calltoaction";

function Pricing() {
  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero cssId="pricing-page" heroTitle="Pricing Packages" heroDescription="Our SEO services have been designed as a long term method to get quality traffic to your website. Choose you SEO package"/>
          <Breadcrumb content="Pricing"/>
          <Calltoaction/>
        </div>
      </CommonLayout>
    </>
  );
}

export default Pricing;
