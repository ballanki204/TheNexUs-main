import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

class Footer extends React.Component {
  render() {
    const navigation = {
      services: [
        { name: "Software Development", path: "/software" },
        { name: "Digital Marketing", path: "/digital-marketing" },
      ],
      products: [
        { name: "Plant Marketplace", path: "/plant-marketplace" },
        { name: "Safety App", path: "/safety-app" },
      ],
      company: [
        { name: "About", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/#contact" },
      ],
      social: [
        { name: "Facebook", icon: Facebook, href: "#" },
        { name: "Twitter", icon: Twitter, href: "#" },
        { name: "LinkedIn", icon: Linkedin, href: "#" },
        { name: "Instagram", icon: Instagram, href: "#" },
      ],
    };

    return (
      <footer className="bg-muted/50 border-t">
        <div className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 animate-gradient-text text-transparent">
                TheNexUS
              </h3>
              <p className="text-sm text-muted-foreground text-left">
                "Nexus Support" can refer to several different companies and
                services, including a professional back-office and security
                solutions provider for retail businesses, an IT support company
                offering consulting and cybersecurity services.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Services</h4>
              <ul className="space-y-2 ">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors "
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 ">Follow Us</h4>
              <div className="flex gap-4 items-center justify-center ">
                {navigation.social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors  "
                      aria-label={item.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              &copy;{new Date().getFullYear()}TheNexUS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
