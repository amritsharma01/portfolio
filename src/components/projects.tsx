import { ExternalLinkIcon } from "lucide-react";
import { Button } from "./widgets/button";
import { Card } from "./widgets/card";
import { Badge } from "./widgets/badge";

function Projects() {
  const projects = [
    {
      title: "Exam Invigilator Management System",
      description:
        "Developed an invigilator management system using Django, with a responsive UI (HTML, CSS, Bootstrap), secure role-based login, and robust CRUD operations for managing invigilators and schedules.",
      tech: ["Django", "Bootstrap"],
      image: "/src/images/exam.jpg",
      link: "https://github.com/amritsharma01/IMS",
    },
    {
      title: "Facial Recognition Based Security System",
      description:
        "Developed a face recognition system using a Siamese network AI model, integrated with a Flutter app for user verification. Built a Django REST API for seamless app-server communication and implemented an ESP module to control a servo motor for door unlocking upon successful recognition.",
      tech: ["Python", "Django-REST", "Flutter", "C++"],
      image: "/src/images/face.jpg",
      link: "https://github.com/amritsharma01/homesecurity",
    },
    {
      title: "JhattaSamachaar",
      description:
        "Developed a server-side news scraping solution with user-selected categories and machine learning-powered summaries. Built a Flutter app for viewing summarized news, setting preferences, and listening to audio news bulletins, featuring a user-friendly interface and seamless navigation.",
      tech: ["Django", "Django-REST", "Flutter"],
      image: "/src/images/jhatta.jpg",
      link: "https://github.com/amritsharma01/jhattasamachaar",
    },
    {
      title: "EasyHire",
      description:
        "Developed a recruitment platform with a mobile-first approach using Flutter, featuring secure authentication, robust Django REST APIs, and responsive design. Integrated advanced search and filtering to streamline hiring and enhance user engagement.",
      tech: ["Django", "Django-REST", "Flutter"],
      image: "/src/images/job.jpg",
      link: "#",
    },
    {
      title: "Seismic Image SuperResolution and Denoising",
      description:
        "Developed a solution to denoise and enhance seismic image resolution using advanced image processing techniques. Leveraged a U-Net model with subpixel and ResNet layers for improved accuracy and applied OpenCV for noise removal and upscaling, ensuring precise geological insights.",
      tech: ["Python", "Jupyter Notebook"],
      image: "/src/images/seismic.png",
      link: "https://github.com/amritsharma01/seisres",
    },
  ];

  return (
    <section className="pt-20 pb-10 bg-gray-300 dark:bg-black" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in software
            development and problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card
                className="h-full overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm 
                             transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 
                             hover:border-primary/20 dark:hover:border-primary/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 
                             group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3
                    className="text-xl font-semibold tracking-tight line-clamp-2 
                               group-hover:text-primary transition-colors duration-300"
                  >
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full group hover:bg-primary/5 hover:text-primary 
                             transition-all duration-300 mt-4"
                  >
                    <span className="mr-2">View Project</span>
                    <ExternalLinkIcon
                      className="w-4 h-4 transition-transform duration-300 
                                group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Projects };
