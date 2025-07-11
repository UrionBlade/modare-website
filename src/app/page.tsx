import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full h-full p-10 overflow-x-hidden">
        <Navbar />
        <main className="w-full overflow-x-hidden max-w-[1920px] mx-auto">
          <Hero />

          <About />

          <Services />

          <Contacts />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
