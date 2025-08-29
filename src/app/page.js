import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import RecentWork from "@/component/RecentWork";
import OtherWork from "@/component/OtherWork";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RecentWork />
      <OtherWork />
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-green-600 text-4xl text-center">
          Helloooo!!, welcome to my Portfolio.
        </p>
      </div>
    </>
  );
}
