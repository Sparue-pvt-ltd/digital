import DefaultLayout from "../layouts/DefaultLayout";
import Hero from "../components/home/Hero";
import About2 from "../components/common/About";
import Services from "../components/home/Services";
import Content1 from "../components/home/Content1";
import Content2 from "../components/home/Content2";
import Content3 from "../components/home/Content3";
// import Content4 from "../components/home/Content4";
import Testimonials1 from "../components/home/Testimonials1";
import Content5 from "../components/home/Content5";
// import Video from "../components/home/Video";
import Pricing from "../components/home/Pricing";
// import Brands from "../components/common/Brands";
// import Faq from "../components/home/Faq";
import Contact from "../components/home/Contact";
function Home() {
  return (
    <>
      <DefaultLayout>
        <Hero/>
        <About2/>
        <Services/>
        <Content1/>
        <Content2/>
        <Content3/>
        {/* <Content4/> */}
        <Testimonials1/>
        <Content5/>
        {/* <Video/> */}
        <Pricing/>
        {/* <Brands/> */}
        {/* <Faq/> */}
        <Contact/>
      </DefaultLayout>
    </>
  );
}

export default Home;