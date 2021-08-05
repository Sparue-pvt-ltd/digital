import DefaultLayout from "../layouts/DefaultLayout";
import Hero from "../components/home/Hero";
import About2 from "../components/common/About";
import Services from "../components/home/Services";
import Content1 from "../components/home/Content1";
import Content2 from "../components/home/Content2";
import Content3 from "../components/home/Content3";
import Testimonials1 from "../components/home/Testimonials1";
import Content5 from "../components/home/Content5";
import Pricing from "../components/home/Pricing";

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
        <Testimonials1/>
        <Content5/>
        <Pricing/>
        <Contact/>
      </DefaultLayout>
    </>
  );
}

export default Home;