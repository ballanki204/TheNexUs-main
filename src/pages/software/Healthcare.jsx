import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Breadcrumb from "../../components/Breadcrumb";


const Healthcare = () => {
  const applications = [
    "Hospital Management System (HMS)",
    "Patient Management System",
    "Pharmacy & Inventory Management",
    "Laboratory Information System (LIS)",
    "Telemedicine / Online Consultations",
    "Appointment Scheduling Systems",
    "Billing & Insurance Management",
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb />
      <div className="container py-4">
      </div>
      <main className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Healthcare / Medical Applications
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive software solutions for healthcare and medical facilities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => (
              <Card
                key={app}
                className="group transition-all hover:shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{app}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Specialized software solution for {app.toLowerCase()}.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Healthcare;
