import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-green-600 text-4xl text-center">
          Helloooo!!, welcome to my Portfolio.
        </p>
      </div>
    </>
  );
}
