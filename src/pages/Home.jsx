import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import Navigation from "../components/Navigation";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
