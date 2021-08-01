import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb2 from "../components/common/Breadcrumb2";
import Calltoaction from "../components/common/Calltoaction";
import Content from "../components/singleservice/Content";
import { useParams } from "react-router-dom";

function SingleService() {
  const { id } = useParams();

  const data = [
    {
      serviceTitle: "Search Engine Optimisation",
      servicedescription: "We offer unique SEO services to your organization. We believe that SEO is at the forefront of digital marketing strategy and provides greater focus when it comes to digital marketing for our customers. With years of expertise in digital marketing and search engine optimization (SEO) techniques, we know how search engines have evolved into standard websites over time. We follow a realistic, transparent and analytical approach to SEO. Our successful SEO framework shows why we are the easiest SEO company / agency in India.",
      serviceImageURL: "./assets/images/image-04.png",
    },
    {
      serviceTitle: "Content Writing Services",
      servicedescription: "Well-written, spoken content involves viewers and is also an image that you present in the world of the web. Integrated content is not only important for branding, and the growth of your business, but also in today's digital world, many of the more important things like advertising and marketing, customer retention, media tracking are highly dependent on them.",
      serviceImageURL: "./assets/images/image-04.png",
    },
    {
      serviceTitle: "App Search Optimisation",
      servicedescription: "Increase your user discovery; Tell your audience that you are here! With thousands of apps in the app store, it's easy to get lost. Mobile app marketing not only helps you recognize and advertise your presence, but it also helps increase app downloads, build a better app road map, and improved apps revenue. As with all other aspects of digital marketing, mobile app marketing is about staying connected to the user throughout life, from the idea of launching the app, to being a user and transforming into a loyal customer.",
      serviceImageURL: "./assets/images/image-04.png",
    },
    {
      serviceTitle: "Digital Strategy & Consulting",
      servicedescription: "Now, more than ever, one can confidently say that this is a great time for business. With one click and the comfort of your office / home office, you can understand, analyze and predict your client's actions. It is a time when great opportunity is involved everywhere, but also with tough competition. Planning, managing, and optimizing digital channels with clear KPIs to achieve goals can be extremely difficult.",
      serviceImageURL: "./assets/images/image-04.png",
    },
    {
      serviceTitle: "Creative Design Services",
      servicedescription: "We are a creative digital branding agency for building the identity of the lucid concept and ideas that connect across borders. Our multidisciplinary team of creative professionals have successfully developed new product ownership and translated existing products to promote and communicate freely across all platforms. We believe that a systematic and simple approach is the key to a product-specific agency, which is why we try to solve problems with a systematic yet living system. Our approach has played a role in building ownership of successful brands that form an integral part of the product for years.",
      serviceImageURL: "./assets/images/image-04.png",
    },
    {
      serviceTitle: "React.js Development",
      servicedescription: "Creating a simple, flexible and integrated UI with ReactJS. ReactJS is a User Interface library used to create easy, easy-to-use connections in both single-page applications and on a large scale when combined with other libraries. Use ReactJS helps your business build powerful, advanced and web-based applications, and offers the benefits of speed and comparability, compared to building other UI libraries",
      serviceImageURL: "./assets/images/image-04.png",
    },
    {
      serviceTitle: "Node.js Development",
      servicedescription: "Excel at building light, scalable, real-time event drive models. NodeJS is an open-source platform that has been gaining steady popularity, owing to its ease in building scalable applications and server tools, that are predominantly data-intense, input/output based and yet lightweight. Node.js works like a charm on event-driven servers, which are based on real-time, and can use multiple frameworks like Express.js, Mojito, Hapi.js etc. This makes it a perfect choice for applications involving live streaming, or non-blocking paradigms like drone programming, online gaming and robotics.",
      serviceImageURL: "./assets/images/image-04.png",
    },
    {
      serviceTitle: "Responsive Web Design",
      servicedescription:
        "The share of global traffic for mobile devices will be 82% complete by the end of 2020. Businesses, regardless of product type and size, lose their appeal and fall behind because their website does not respond to mobile phones. Google ranks websites based on responses, and it's no surprise that more than 7 out of 10 visitors stop participating, go back and try another website",
      serviceImageURL: "./assets/images/image-04.png",
    },
    {
      serviceTitle: "Intuitive UI / UX designs",
      servicedescription:
        "Accurate design is the sacred grail of any UI / UX. In the blue syntax, we naturally understand that the concept of intuition is not only about good features but also about good design, improved availability and leading the user to what he or she wants.",
      serviceImageURL: "./assets/images/image-04.png",
    }
  ];
  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero
            cssId="service-details-page"
            heroTitle="Our Services"
            heroDescription="Are you looking to build a sustainable future for your website? We have a proven record of 
										achieving your ultimate goal"
          />
          <Breadcrumb2 content="Services" content1="/services" />
          <Content
            serviceTitle={data[id - 1].serviceTitle}
            servicedescription={data[id - 1].servicedescription}
            serviceImageURL={data[id - 1].serviceImageURL}
          />
          <Calltoaction />
        </div>
      </CommonLayout>
    </>
  );
}

export default SingleService;
