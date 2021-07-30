import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb from "../components/common/Breadcrumb";
import Calltoaction from "../components/common/Calltoaction";
import Content from "../components/blogs/Content";
import Pagination from "../components/blogs/Pagination";

function Blogs() {
  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero
            cssId="blog-listing-page"
            heroTitle="From The Blog"
            heroDescription="The latest news from Metreex and also latest Internet marketing and web design strategies and techniques"
          />
          <Breadcrumb content="Our Blogs" />
          <Content/>
          <Pagination/>
          <Calltoaction />
        </div>
      </CommonLayout>
    </>
  );
}

export default Blogs;
