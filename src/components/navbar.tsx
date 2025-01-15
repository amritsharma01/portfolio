import { CodeIcon, HomeIcon, SunIcon, PersonIcon } from "@radix-ui/react-icons";
import { BriefcaseIcon, MenuIcon, Moon, School } from "lucide-react";
import { Button } from "./widgets/button";
import { Sheet, SheetContent, SheetTrigger } from "./widgets/sheet";
import { useTheme } from "./theme-provider";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Navbar() {
  const navItems = [
    { label: "Home", icon: HomeIcon, href: "#home" },
    { label: "Skills", icon: CodeIcon, href: "#skills" },
    { label: "Projects", icon: BriefcaseIcon, href: "#projects" },
    { label: "Qualification", icon: School, href: "#qualification" },
  ];

  const [activeTab, setActiveTab] = useState(navItems?.[0]?.label || "");
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      let currentActive = activeTab;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight / 2
        ) {
          currentActive = navItems[i].label;
          break;
        }
      }

      if (currentActive !== activeTab) {
        setActiveTab(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, navItems]);

  // Function for smooth scrolling
  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveTab(href.replace("#", ""));
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/1">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <PersonIcon className="h-[1.2rem] w-[1.2rem] "></PersonIcon>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 bg-background/100 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.label;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                    "text-muted-foreground hover:text-primary",
                    isActive && "bg-muted text-primary"
                  )}
                >
                  <span className="hidden md:inline">{item.label}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                        <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </a>
              );
            })}
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 text-lg font-medium p-2 rounded-lg hover:bg-accent"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                        setIsOpen(false);
                      }}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
