import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Footer from "../components/layout/Footer";

import About from "../components/sections/About";
import Education from "../components/sections/Education";
import TechStack from "../components/sections/TechStack";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <Navbar />

      <main>
        <Projects />
        <About />
        <Education />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
