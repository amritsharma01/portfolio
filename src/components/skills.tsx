import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { Code2, Braces } from "lucide-react";

interface Skill {
  title: string;
  image: string;
  proficiency: number;
}

const languages: Skill[] = [
  { title: "HTML/CSS", image: "src/images/html.png", proficiency: 80 },
  { title: "JavaScript", image: "src/images/js.png", proficiency: 60 },
  { title: "C/C++", image: "src/images/cpp.png", proficiency: 70 },
  { title: "Dart", image: "src/images/dart.png", proficiency: 80 },
  { title: "Python", image: "src/images/python.png", proficiency: 80 },
  { title: "SQL", image: "src/images/sql.png", proficiency: 70 },
];

const frameworks: Skill[] = [
  { title: "Flutter", image: "src/images/flutter.png", proficiency: 85 },
  { title: "Django", image: "src/images/django.png", proficiency: 80 },
  { title: "React", image: "src/images/react.png", proficiency: 60 },
  { title: "Numpy/Pandas", image: "src/images/numpy.png", proficiency: 75 },
  { title: "Git/Github", image: "src/images/git.png", proficiency: 80 },
];

const SkillsCarousel: React.FC<{ items: Skill[]; direction: number }> = ({
  items,
  direction,
}) => {
  const baseX = useMotionValue(0);
  const speed = 30 * direction;
  const itemWidth = 320;
  const totalWidth = items.length * itemWidth;

  useAnimationFrame((_, delta) => {
    const moveBy = (delta / 1000) * speed;
    let newBaseX = baseX.get() + moveBy;

    if (newBaseX > 0) {
      newBaseX = (newBaseX % totalWidth) - totalWidth;
    } else if (newBaseX < -totalWidth) {
      newBaseX = (newBaseX % totalWidth) + totalWidth;
    }

    baseX.set(newBaseX);
  });

  const x = useTransform(baseX, (v) => `${v}px`);

  return (
    <div className="relative overflow-hidden w-full py-4">
      <motion.div
        className="flex gap-6"
        style={{ x, width: `${totalWidth * 2}px` }}
      >
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex-shrink-0 w-80 group">
            <div
              className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                          shadow-lg transition-all duration-300 hover:shadow-xl
                          hover:border-primary/20 dark:hover:border-primary/30
                          hover:bg-white/10"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-lg font-medium text-foreground/90">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                  <span>Proficiency</span>
                  <span>{item.proficiency}%</span>
                </div>
                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="pt-20 pb-10 bg-gray-200 dark:bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I've mastered along my journey
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground/90">
                Programming Languages
              </h3>
            </div>
            <SkillsCarousel items={languages} direction={-1} />
          </div>
          <div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Braces className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground/90">
                Frameworks & Tools
              </h3>
            </div>
            <SkillsCarousel items={frameworks} direction={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
