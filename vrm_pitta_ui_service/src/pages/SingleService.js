import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb2 from "../components/common/Breadcrumb2";
import Calltoaction from "../components/common/Calltoaction";
import Content from "../components/singleservice/Content";
import { useParams } from "react-router-dom";


function SingleService() {
  let { id } = useParams();
  const data = {
    "search-engine-optimisation":{
      serviceTitle: "Search Engine Optimisation",
      servicedescription:
        "We offer unique SEO services to your organization. We believe that SEO is at the forefront of digital marketing strategy and provides greater focus when it comes to digital marketing for our customers. With years of expertise in digital marketing and search engine optimization (SEO) techniques, we know how search engines have evolved into standard websites over time. We follow a realistic, transparent and analytical approach to SEO. Our successful SEO framework shows why we are the easiest SEO company / agency in India.",
      serviceImageURL: "./assets/images/image-04.png",
    },
    "content-writing-services":{
      serviceTitle: "Content Writing Services",
      servicedescription:
        "Well-written, spoken content involves viewers and is also an image that you present in the world of the web. Integrated content is not only important for branding, and the growth of your business, but also in today's digital world, many of the more important things like advertising and marketing, customer retention, media tracking are highly dependent on them.",
      serviceImageURL: "./assets/images/Professional-Content-Writing-Services.png",
    },
    "app-search-optimisation":{
      serviceTitle: "App Search Optimisation",
      servicedescription:
        "Increase your user discovery; Tell your audience that you are here! With thousands of apps in the app store, it's easy to get lost. Mobile app marketing not only helps you recognize and advertise your presence, but it also helps increase app downloads, build a better app road map, and improved apps revenue. As with all other aspects of digital marketing, mobile app marketing is about staying connected to the user throughout life, from the idea of launching the app, to being a user and transforming into a loyal customer.",
      serviceImageURL: "./assets/images/ASO.png",
    },
    "digital-strategy-consulting":{
      serviceTitle: "Digital Strategy & Consulting",
      servicedescription:
        "Now, more than ever, one can confidently say that this is a great time for business. With one click and the comfort of your office / home office, you can understand, analyze and predict your client's actions. It is a time when great opportunity is involved everywhere, but also with tough competition. Planning, managing, and optimizing digital channels with clear KPIs to achieve goals can be extremely difficult.",
      serviceImageURL: "./assets/images/digital-strategy-banner.png",
    },
    "creative-design-services":{
      serviceTitle: "Creative Design Services",
      servicedescription:
        "We are a creative digital branding agency for building the identity of the lucid concept and ideas that connect across borders. Our multidisciplinary team of creative professionals have successfully developed new product ownership and translated existing products to promote and communicate freely across all platforms. We believe that a systematic and simple approach is the key to a product-specific agency, which is why we try to solve problems with a systematic yet living system. Our approach has played a role in building ownership of successful brands that form an integral part of the product for years.",
      serviceImageURL: "./assets/images/creative.png",
    }
  };

  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero
            cssId="service-details-page"
            heroTitle={data[id].serviceTitle}
            heroDescription="Are you looking to build a sustainable future for your website? We have a proven record of
										achieving your ultimate goal"
          />
          <Breadcrumb2 content="Services" content1="/services" />
          <Content
            serviceTitle={data[id].serviceTitle}
            servicedescription={data[id].servicedescription}
            serviceImageURL={data[id].serviceImageURL}
          />
          <Calltoaction />
        </div>
      </CommonLayout>
    </>
  );
}

export default SingleService;
