import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb2 from "../components/common/Breadcrumb2";
import Calltoaction from "../components/common/Calltoaction";
import Content from "../components/singleblog/Content";

function SingleBlog() {
  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero cssId="project-details-page" heroTitle="About Vrm Pitta" heroDescription="We provide professional PPC, Web and SEO services to
                    increase online visibility and qualified leads to your
                    business"/>
          <Breadcrumb2 content="Blogs" content1="/blogs" />
          <Content/>
          <Calltoaction/>
        </div>
      </CommonLayout>
    </>
  );
}

export default SingleBlog;
