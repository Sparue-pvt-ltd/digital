import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb from "../components/common/Breadcrumb";
import Calltoaction from "../components/common/Calltoaction";

function SingleService() {
  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero cssId="service-details-page" heroTitle="About Vrm Pitta" heroDescription="We provide professional PPC, Web and SEO services to
                    increase online visibility and qualified leads to your
                    business"/>
          <Breadcrumb content="About"/>
          <Calltoaction/>
        </div>
      </CommonLayout>
    </>
  );
}

export default SingleService;
