import Image from "next/image";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Store from "./sections/Store";
import Partners from "./sections/Partners";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="scroll-smooth relative">
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Store/>
      <Partners/>
      <Contact/>
      <Footer/>
    </main>
  );
}
