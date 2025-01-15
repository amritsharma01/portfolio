import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";

function Footer() {
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
    <section id="contact">
      <footer className="flex justify-center py-5 border-t">
        <div className=" text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amrit Sharma. All rights reserved.
          <div className="flex gap-4 justify-center ">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label={social.label}
                target="_blank"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}

export { Footer };
