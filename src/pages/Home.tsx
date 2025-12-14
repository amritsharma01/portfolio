import { Hero } from "../components/herosection";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import Qualification from "../components/qualification";

export function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Qualification />
    </>
  );
}

