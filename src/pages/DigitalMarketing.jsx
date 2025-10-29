import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Search,
  Share2,
  TrendingUp,
  Mail,
  BarChart3,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

class DigitalMarketing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consultancyOpen: false,
    };
  }

  setConsultancyOpen = (open) => {
    this.setState({ consultancyOpen: open });
  };

  render() {
    const services = [
      {
        icon: Search,
        title: "SEO Optimization",
        description:
          "Improve your search engine rankings and organic visibility",
        features: [
          "On-page SEO",
          "Off-page SEO",
          "Content Strategy",
          "Technical SEO",
          "Keyword Research",
        ],
      },
      {
        icon: Share2,
        title: "Social Media Management",
        description: "Build and engage your audience across social platforms",
        features: [
          "Profile Optimization",
          "Content Creation",
          "Post Scheduling",
          "Community Management",
          "Brand Monitoring",
        ],
      },
      {
        icon: Target,
        title: "Lead Generation",
        description: "Convert visitors into qualified leads for your business",
        features: [
          "Landing Page Design",
          "A/B Testing",
          "Conversion Optimization",
          "Lead Nurturing",
          "Marketing Automation",
        ],
      },
      {
        icon: Mail,
        title: "Email Marketing",
        description: "Reach your audience with targeted email campaigns",
        features: [
          "Campaign Design",
          "List Segmentation",
          "Automation Workflows",
          "Performance Tracking",
          "Template Design",
        ],
      },
      {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Data-driven insights to optimize your marketing efforts",
        features: [
          "Campaign Analytics",
          "ROI Tracking",
          "Custom Reports",
          "Performance Metrics",
          "Competitor Analysis",
        ],
      },
      {
        icon: TrendingUp,
        title: "Content Marketing",
        description: "Create compelling content that drives engagement",
        features: [
          "Content Strategy",
          "Blog Writing",
          "Visual Content",
          "Video Marketing",
          "Infographics",
        ],
      },
    ];

    return (
      <div className="min-h-screen">
        <main>
          <section className="bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50 py-20">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                  Digital Marketing Services
                </h1>
                <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                  Comprehensive digital marketing solutions to grow your online
                  presence, reach your target audience, and drive measurable
                  results
                </p>
                <Link to="/book">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Book a Session
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Our Marketing Solutions
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Full-service digital marketing to elevate your brand
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={service.title}
                      className="group transition-all hover:shadow-lg hover:scale-105 hover:border-orange-300 animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-colors">
                          <Icon className="h-6 w-6 text-orange-600 group-hover:text-orange-700 transition-colors" />
                        </div>
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <div className="mt-1.5 h-1 w-1 rounded-full bg-orange-600" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-12 text-center">
                <Link to="/book">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Book Consultancy
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 py-20">
            <div className="container">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                  Why Choose Our Digital Marketing?
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Data-Driven Strategy",
                      desc: "Every decision backed by analytics and insights",
                    },
                    {
                      title: "ROI Focused",
                      desc: "Measurable results that impact your bottom line",
                    },
                    {
                      title: "Multi-Channel Approach",
                      desc: "Integrated campaigns across all digital platforms",
                    },
                    {
                      title: "Expert Team",
                      desc: "Experienced marketers dedicated to your success",
                    },
                  ].map((benefit) => (
                    <Card
                      key={benefit.title}
                      className="group transition-all hover:shadow-lg hover:scale-105 hover:border-orange-300"
                    >
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-semibold group-hover:text-orange-700 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-orange-600 transition-colors">
                          {benefit.desc}
                        </p>
                      </CardContent>
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

export default DigitalMarketing;
