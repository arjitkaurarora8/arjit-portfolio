import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import RecentWork from "@/component/RecentWork";
import OtherWork from "@/component/OtherWork";
import About from "@/component/About";
import Pitch from "@/component/Pitch";
import GettingStarted from "@/component/GettingStarted";
import Services from "@/component/Services";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
      <Navbar showLinks={true} />
      <Hero />
      <RecentWork />
      <OtherWork />
      <About />
      <Pitch />
      <GettingStarted />
      <Services />
      {/* <Footer /> */}
    </>
  );
}
