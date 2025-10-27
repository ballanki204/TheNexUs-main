import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookConsultancyModal from "../components/BookConsultancyModal";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Code2,
  Building2,
  UtensilsCrossed,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Cloud,
  Shield,
  Bot,
} from "lucide-react";
import { Link } from "react-router-dom";

class Software extends React.Component {
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
    const categories = [
      {
        icon: Code2,
        title: "Healthcare / Medical Applications",
        slug: "healthcare",
        applications: [
          "Hospital Management System (HMS)",
          "Patient Management System",
          "Pharmacy & Inventory Management",
          "Laboratory Information System (LIS)",
          "Telemedicine / Online Consultations",
          "Appointment Scheduling Systems",
          "Billing & Insurance Management",
        ],
      },
      {
        icon: Building2,
        title: "Real Estate Applications",
        slug: "real-estate",
        applications: [
          "Property / Building Management Systems",
          "Renovation & Maintenance Tracking",
          "Rental / Lease Management Systems",
          "Real Estate CRM",
          "Property Valuation & Analytics",
          "Construction Project Management",
        ],
      },
      {
        icon: UtensilsCrossed,
        title: "Food & Restaurant Applications",
        slug: "food-restaurant",
        applications: [
          "POS Integration Systems",
          "Online Ordering / Delivery Apps",
          "Inventory & Stock Management",
          "Kitchen / Order Management",
          "Customer Loyalty & Rewards",
          "Recipe & Menu Management",
        ],
      },
      {
        icon: TrendingUp,
        title: "Trading & Financial Applications",
        slug: "trading-financial",
        applications: [
          "Algorithmic / Automated Trading Platforms",
          "Portfolio Management Systems",
          "Stock / Futures / Options Tracking",
          "Risk & Compliance Management",
          "Accounting & Reporting Tools",
        ],
      },
      {
        icon: GraduationCap,
        title: "Education & E-Learning",
        slug: "education-elearning",
        applications: [
          "Learning Management Systems (LMS)",
          "Online Exam & Assessment Platforms",
          "Student / Faculty Information Systems",
          "Course Management & Certification",
          "Virtual Classrooms & Collaboration",
        ],
      },
      {
        icon: Briefcase,
        title: "Enterprise Applications",
        slug: "enterprise",
        applications: [
          "ERP Systems (Inventory, Accounting, Sales, HR)",
          "HRMS (Attendance, Payroll, Recruitment)",
          "CRM Systems",
          "Project Management & Collaboration",
          "Document & Workflow Automation",
        ],
      },
      {
        icon: Cloud,
        title: "IT & Cloud Applications",
        slug: "it-cloud",
        applications: [
          "Cloud Infrastructure Management",
          "Server & Database Management",
          "Backup & Disaster Recovery",
          "DevOps & CI/CD Tools",
          "Virtualization & Remote Access",
        ],
      },
      {
        icon: Shield,
        title: "Cybersecurity Applications",
        slug: "cybersecurity",
        applications: [
          "Vulnerability Assessment & Pen-testing",
          "Security Audit & Compliance",
          "Network Monitoring & Intrusion Detection",
          "Identity & Access Management",
          "Data Protection & Encryption",
        ],
      },
      {
        icon: Bot,
        title: "AI / ML Applications",
        slug: "ai-ml",
        applications: [
          "Chatbots & Virtual Assistants",
          "Predictive Analytics & Recommendation Engines",
          "Image / Video Recognition Systems",
          "NLP Applications (Text Analytics, Sentiment Analysis)",
          "Automation & Decision Support Systems",
        ],
      },
    ];

    return (
      <div className="min-h-screen">
        <main>
          <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                  Software Development Solutions
                </h1>
                <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                  End-to-end custom software applications for mid-to-large scale
                  industries, tailored for business efficiency and automation
                </p>
                <Link to={"/book"}>
                  <Button size="lg">Book Consultancy</Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Industry-Specific Solutions
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Comprehensive software applications across multiple domains
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Card
                      key={category.title}
                      className="group transition-all hover:shadow-lg animate-fade-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CardHeader>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <Link to={`/software/${category.slug}`}>
                          <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                            {category.title}
                          </CardTitle>
                        </Link>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.applications.map((app) => (
                            <li
                              key={app}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <div className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-12 text-center">
                <Link to={"/book"}>
                  <Button size="lg">Discuss Your Project</Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-muted/50 py-20">
            <div className="container">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                  Our Development Process
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    {
                      step: "01",
                      title: "Discovery",
                      desc: "Understanding your requirements and existing projects",
                    },
                    {
                      step: "02",
                      title: "Development",
                      desc: "Building custom solutions with modern technologies",
                    },
                    {
                      step: "03",
                      title: "Delivery",
                      desc: "Deployment and ongoing support for your application",
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
        </main>
      </div>
    );
  }
}

export default Software;
