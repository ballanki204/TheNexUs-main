import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />

        <div className="container relative z-10 py-20">
          <div className="mx-auto max-w-3xl text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Innovating for a
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Future
              </span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl">
              "Nexus Support" can refer to several different companies and
              services, including a professional back-office and security
              solutions provider for retail businesses, an IT support company
              offering consulting and cybersecurity services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/book"}>
                {" "}
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
