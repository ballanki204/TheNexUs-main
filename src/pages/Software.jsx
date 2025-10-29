import React, { useEffect, useRef, useState } from "react";
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
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";

const Software = () => {
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0]);
  const processRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetNumbers = [100, 32, 29]; // Different targets for each step
            targetNumbers.forEach((target, index) => {
              let current = 0;
              const increment = target / 50; // Divide animation into 50 steps
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setAnimatedNumbers((prev) => {
                  const newNumbers = [...prev];
                  newNumbers[index] = Math.floor(current);
                  return newNumbers;
                });
              }, 30); // Update every 30ms
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadBrochure = (category) => {
    // Create a simple PDF-like content for the brochure
    const brochureContent = `
${category.title} Brochure

Overview:
${
  category.title
} solutions provide comprehensive software applications tailored for your business needs.

Key Applications:
${category.applications.map((app) => `- ${app}`).join("\n")}

Contact us for more information about our ${category.title.toLowerCase()} solutions.
`;

    // Create a blob with the brochure content
    const blob = new Blob([brochureContent], { type: "text/plain" });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${category.slug}-brochure.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
              <Link to="/book">
                <Button size="lg"> Book a Session</Button>
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
                    className="group transition-all hover:shadow-lg hover:scale-105 hover:border-primary/30 animate-fade-up bg-gradient-to-br from-primary/5 via-background to-primary/5"
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
                      <ul className="space-y-2 mb-4">
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
                      <div className="flex justify-end">
                        <Download
                          className="h-5 w-5 text-primary cursor-pointer hover:text-primary/80 transition-colors"
                          onClick={() => handleDownloadBrochure(category)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link to="/book">
                <Button size="lg">Discuss Your Project</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-20" ref={processRef}>
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                Our Development Process
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    step: "100",
                    title: "Discovery",
                    desc: "Understanding your requirements and existing projects",
                  },
                  {
                    step: "32",
                    title: "Development",
                    desc: "Building custom solutions with modern technologies",
                  },
                  {
                    step: "29",
                    title: "Delivery",
                    desc: "Deployment and ongoing support for your application",
                  },
                ].map((item, index) => (
                  <div key={item.step} className="text-center">
                    <div className="mb-4 text-4xl font-bold text-primary">
                      {animatedNumbers[index] || 0}+
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
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
};

export default Software;
