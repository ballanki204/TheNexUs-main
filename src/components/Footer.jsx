import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/NexUsLogo.svg";

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
              <div className="flex items-center space-x-2 mb-4 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="500"
                  height="719"
                  viewBox="0 0 476 719"
                  preserveAspectRatio="xMidYMid meet"
                  className="h-8 w-auto"
                >
                  <defs>
                    <linearGradient
                      id="logoGradientFooter"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#eab308" />
                      <stop offset="25%" stopColor="#16a34a" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="75%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#eab308" />
                      <animate
                        attributeName="x1"
                        values="0%;100%;0%"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </linearGradient>
                  </defs>
                  <g
                    fill="black"
                    stroke="none"
                    fillRule="evenodd"
                    className="group-hover:fill-[url(#logoGradientFooter)] transition-all duration-300"
                  >
                    <path d="M 38,22 L 219,336 L 100,58 L 413,58 L 44,698 L 475,698 L 298,388 L 415,663 L 108,662 L 475,22 Z" />
                  </g>
                </svg>
                <h3 className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  TheNexUS
                </h3>
              </div>
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
