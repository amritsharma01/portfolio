import React from "react";
import { motion } from "framer-motion";
import { Code2, Braces, Cloud, Server } from "lucide-react";

interface Skill {
  title: string;
  image?: string;
  category: "language" | "framework" | "tool" | "cloud";
}

const skills: Skill[] = [
  // Programming Languages
  { title: "Go", image: "https://go.dev/images/go-logo-blue.svg", category: "language" },
  { title: "Python", image: "/src/images/python.png", category: "language" },
  { title: "Dart", image: "/src/images/dart.png", category: "language" },
  { title: "C/C++", image: "/src/images/cpp.png", category: "language" },
  { title: "PostgreSQL", image: "/src/images/sql.png", category: "language" },
  
  // Frameworks & Tools
  { title: "Django", image: "/src/images/django.png", category: "framework" },
  { title: "Echo", image: "/src/images/echo.png", category: "framework" },
  { title: "Flutter", image: "/src/images/flutter.png", category: "framework" },
  { title: "Numpy/Pandas", image: "/src/images/numpy.png", category: "framework" },
  { title: "Git/Github", image: "/src/images/git.png", category: "tool" },
  
  // Cloud & Backend
  { title: "AWS", image: "/src/images/aws.png", category: "cloud" },
  { title: "Docker", image: "/src/images/docker.png", category: "tool" },
  { title: "Linux", image: "/src/images/linux-logo.png", category: "tool" },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
        <div className="flex items-center gap-3">
          {skill.image ? (
            <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <img
                src={skill.image}
                alt={skill.title}
                className="w-7 h-7 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 flex items-center justify-center flex-shrink-0">
              {skill.category === "cloud" && <Cloud className="w-5 h-5 text-primary" />}
              {skill.category === "framework" && <Braces className="w-5 h-5 text-primary" />}
              {skill.category === "tool" && <Server className="w-5 h-5 text-primary" />}
              {skill.category === "language" && <Code2 className="w-5 h-5 text-primary" />}
            </div>
          )}
          <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors">
            {skill.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const languages = skills.filter(s => s.category === "language");
  const frameworks = skills.filter(s => s.category === "framework");
  const tools = skills.filter(s => s.category === "tool" || s.category === "cloud");

  return (
    <section className="pt-20 pb-16 bg-gray-200 dark:bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Skills & Expertise
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I've mastered along my journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Programming Languages */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-primary" />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground/90">
                Programming Languages
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {languages.map((skill, index) => (
                <SkillCard key={skill.title} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Braces className="w-5 h-5 text-primary" />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground/90">
                Frameworks & Tools
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {frameworks.map((skill, index) => (
                <SkillCard key={skill.title} skill={skill} index={index + languages.length} />
              ))}
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Cloud className="w-5 h-5 text-primary" />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground/90">
                Cloud & Infrastructure
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((skill, index) => (
                <SkillCard key={skill.title} skill={skill} index={index + languages.length + frameworks.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
