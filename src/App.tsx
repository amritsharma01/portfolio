import { Hero } from "./components/herosection";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import Qualification from "./components/qualification";
import About from "./components/about";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Qualification />
      <Footer />
    </div>
  );
}

export { App };
