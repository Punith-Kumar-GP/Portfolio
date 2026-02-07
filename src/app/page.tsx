import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Hobbies } from "@/components/sections/Hobbies";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="site">
      <Header />

      <main className="page">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Highlights />
        <Experience />
        <Education />
        <Hobbies />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
