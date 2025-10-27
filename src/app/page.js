import Navbar from "@/component/layout/Navbar";
import Hero from "@/component/home/Hero";
import DetailedCaseStudies from "@/component/home/BriefCaseStudies";
import BriefCaseStudies from "@/component/home/DetailedCaseStudies";
import About from "@/component/home/About";
import Pitch from "@/component/home/Pitch";
// import GettingStarted from "@/component/home/GettingStarted";
import Services from "@/component/home/Services";
// import Footer from "@/component/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar showLinks={true} />
      <Hero />
      <BriefCaseStudies />
      <DetailedCaseStudies />
      <About />
      <Pitch />
      {/* <GettingStarted /> */}
      <Services />
      {/* <Footer /> */}
    </>
  );
}
