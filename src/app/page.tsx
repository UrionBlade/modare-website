"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <main className="w-full p-10 overflow-x-hidden">
        <Navbar />

        <Hero />

        <About />

        <Services />

        <Contacts />
      </main>

      <Footer />
    </>
  );
}
