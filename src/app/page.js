import Navbar from "@/component/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen">
        <p className="text-green-600 text-4xl text-center">
          Helloooo!!, welcome to my Portfolio.
        </p>
      </div>
    </>
  );
}
