import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookConsultancyModal from "../components/BookConsultancyModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Camera,
  Shield,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Zap,
} from "lucide-react";
import safetyIcon from "../assets/safety-icon.jpg";
import { Link } from "react-router-dom";

class SafetyApp extends React.Component {
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
    const features = [
      {
        icon: Camera,
        title: "Image Recognition",
        description:
          "Take a picture and instantly identify potential hazards using AI",
      },
      {
        icon: AlertTriangle,
        title: "HIRA Analysis",
        description:
          "Hazard Identification and Risk Assessment based on industry standards",
      },
      {
        icon: CheckCircle2,
        title: "Safety Recommendations",
        description:
          "Receive actionable suggestions to eliminate unsafe conditions",
      },
      {
        icon: FileText,
        title: "Safety Reports",
        description:
          "Generate detailed reports and documentation for compliance",
      },
      {
        icon: Shield,
        title: "Free for Home & Midscale",
        description:
          "Currently available at no cost for home and small business use",
      },
      {
        icon: Zap,
        title: "Real-time Analysis",
        description: "Instant hazard detection and recommendations on the spot",
      },
    ];

    const useCases = [
      {
        title: "Home Safety",
        items: [
          "Kitchen hazards",
          "Electrical risks",
          "Fire safety",
          "Slip & fall prevention",
        ],
      },
      {
        title: "Workplace Safety",
        items: [
          "Equipment safety",
          "PPE compliance",
          "Workspace organization",
          "Emergency exits",
        ],
      },
      {
        title: "Construction Sites",
        items: [
          "Site hazards",
          "Material storage",
          "Equipment operation",
          "Worker safety",
        ],
      },
      {
        title: "Warehouses",
        items: [
          "Storage safety",
          "Loading docks",
          "Material handling",
          "Forklift operations",
        ],
      },
    ];

    return (
      <div className="min-h-screen">
        <main>
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
            <div className="container">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                  <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                    Safety & Hazard Recognition App
                  </h1>
                  <p className="mb-8 text-lg text-muted-foreground">
                    AI-powered safety application using image recognition and
                    HIRA analysis to identify and eliminate workplace hazards
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg">Download App</Button>
                    <Button size="lg" variant="outline">
                      Enterprise Inquiry
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={safetyIcon}
                    alt="Safety application"
                    className="h-64 w-64 rounded-3xl object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  How It Works
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Three simple steps to a safer environment
                </p>
              </div>

              <div className="mx-auto max-w-4xl">
                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    {
                      step: "01",
                      title: "Take Picture",
                      desc: "Capture an image of your workspace or environment",
                    },
                    {
                      step: "02",
                      title: "AI Analysis",
                      desc: "Our AI identifies potential hazards using HIRA methodology",
                    },
                    {
                      step: "03",
                      title: "Get Solutions",
                      desc: "Receive safety recommendations and actionable steps",
                    },
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="mb-4 text-4xl font-bold text-primary">
                        {item.step}
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-muted/50 py-20">
            <div className="container">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Key Features
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={feature.title}
                      className="group transition-all hover:shadow-lg animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">
                          {feature.title}
                        </CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Use Cases
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Applicable across various environments and industries
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {useCases.map((useCase) => (
                  <Card key={useCase.title}>
                    <CardHeader>
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {useCase.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-muted/50 py-20">
            <div className="container">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                  Version Roadmap
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-2 border-primary">
                    <CardHeader>
                      <CardTitle className="text-primary">
                        Version 1 (Current)
                      </CardTitle>
                      <CardDescription>
                        Free for home & midscale businesses
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Image-based hazard recognition",
                          "Basic HIRA analysis",
                          "Safety recommendations",
                          "Simple reporting",
                          "Mobile & web access",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise Version (Coming Soon)</CardTitle>
                      <CardDescription>
                        Advanced features for large-scale operations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Industry-scale deployment",
                          "Automated mail triggers & alerts",
                          "Advanced dashboards & analytics",
                          "ERP integration",
                          "Predictive safety analytics",
                          "Custom compliance reports",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-4xl font-bold">
                  Start Improving Safety Today
                </h2>
                <p className="mb-8 text-lg opacity-90">
                  Free for home and midscale businesses. Enterprise solutions
                  available.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Try Free Version
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-primary hover:bg-white/50"
                  >
                    Enterprise Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default SafetyApp;
