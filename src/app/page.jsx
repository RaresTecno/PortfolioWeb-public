'use client';
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import FeaturedProject from "../components/FeaturedProject";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Technologies from "../components/Technologies";
import Languages from "../components/Languages";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <link rel="icon" href="/rares.png" sizes="any" />
      <NavBar />
      <Hero />
      <FeaturedProject />
      <Projects />
      <Experience />
      <Technologies />
      <Languages />
      <Education />
      <Skills />
      <Footer />
    </>
  );
}
