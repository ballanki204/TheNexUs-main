import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Target, Users, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    const values = [
      {
        icon: Target,
        title: "Innovation First",
        description:
          "Constantly pushing boundaries with cutting-edge technology solutions",
      },
      {
        icon: Users,
        title: "Client-Centric",
        description:
          "Your success is our success. We build lasting partnerships",
      },
      {
        icon: Zap,
        title: "Sustainable Growth",
        description:
          "Balancing business growth with environmental responsibility",
      },
      {
        icon: Award,
        title: "Excellence",
        description:
          "Committed to delivering exceptional quality in everything we do",
      },
    ];

    const platforms = [
      {
        title: "Plant & Greenery Marketplace",
        description:
          "Revolutionary platform empowering home-based entrepreneurs to build sustainable plant businesses",
      },
      {
        title: "Safety & HIRA Application",
        description:
          "AI-powered workplace safety solution using image recognition and hazard analysis",
      },
    ];

    return (
      <div className="min-h-screen">
        <main>
          <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                  About Us
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  We are a technology-driven company passionate about building
                  intelligent, scalable, and real-world solutions that empower
                  individuals, startups, and enterprises. Our expertise spans
                  Software Development, AI & Cloud Solutions, Digital Marketing,
                  Green Initiatives, and Safety Innovation.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
                  Our Story
                </h2>
                <div className="prose prose-lg mx-auto">
                  <p className="text-muted-foreground">
                    Our story began with a vision to blend technology with
                    purpose — creating solutions that drive growth, safety, and
                    sustainability. We started by developing software
                    applications for diverse industries and expanded into
                    real-world innovations.
                  </p>
                  <p className="text-muted-foreground">
                    Through our Plant Marketplace, we empower home-based
                    entrepreneurs to grow and earn legally. Our Safety App
                    ensures safer environments using AI-driven hazard
                    recognition. Today, our Green Initiative Network connects
                    people and technology to build a healthier, greener future.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-muted/50 py-20">
            <div className="container">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Our Values
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card
                      key={value.title}
                      className="text-center animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="mb-4 flex justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                        <CardDescription>{value.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                  Our Innovative Platforms
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  {platforms.map((platform) => (
                    <Card key={platform.title}>
                      <CardHeader>
                        <CardTitle>{platform.title}</CardTitle>
                        <CardDescription className="text-base">
                          {platform.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default About;
