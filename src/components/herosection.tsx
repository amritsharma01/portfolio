import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  ExternalLinkIcon,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./widgets/button";
import { GridPattern } from "./widgets/grid_pattern";
import { cn } from "@/lib/utils";
import { HyperText } from "./widgets/hypertext";
import { AnimHero } from "./widgets/animated_hero";

function Hero() {
  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/amritsharma01/",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/amrit-sharma999/",
      label: "LinkedIn",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/amrit_sharma03/",
      label: "Instagram",
    },
    {
      icon: FacebookIcon,
      href: "https://www.facebook.com/profile.php?id=100007365211859",
      label: "Facebook",
    },
  ];

  return (
    <AppLayout>
      <section
        id="home"
        className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        </div>
        <div className="container mx-auto px-4 py-5 z-10">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Image */}
            <div className="order-1 md:order-3 md:col-span-3 flex justify-center md:justify-center ">
              <div className="relative">
                {/* Outer ring effect */}
                <div className="relative w-40 h-48 md:w-80 md:h-96 rounded-full overflow-hidden ring-0 ring-primary/70 transition duration-300">
                  <img
                    src="/images/amrit.png"
                    alt="Amrit Sharma - Backend Engineer and Software Developer from Nepal, currently working at Rara Labs in Lalitpur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="order-2 md:order-2 md:col-span-4 flex flex-col items-center justify-center text-center space-y-6">
              <div className="space-y-2">
                <HyperText
                  text="Amrit Sharma"
                  duration={800} // Adjust the animation duration in milliseconds
                  className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
                />

                <AnimHero />

                {/* Download CV & About */}
                <div className="order-4 flex justify-center gap-4 py-5 flex-wrap">
                  <a download href={"/CV.pdf"}>
                    <Button size="lg" className="font-semibold group">
                      {" "}
                      Download CV
                      <ExternalLinkIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="font-semibold group">
                      <User className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                      About Me
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="order-3 md:order-1 md:col-span-1 flex flex-wrap md:flex-col gap-4 justify-center md:justify-center mx-auto">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-full  "
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export { Hero };

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Grid Pattern covering the entire scaffold */}
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "pointer-events-none",

          "inset-x-0 inset-y-[-20%] h-[140%] skew-y-12"
        )}
      />

      {/* App Content */}
      <main className="relative z-10 flex-grow">{children}</main>
    </div>
  );
}

export default AppLayout;
