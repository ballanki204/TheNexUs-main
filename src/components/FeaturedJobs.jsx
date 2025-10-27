import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

class FeaturedJobs extends React.Component {
  render() {
    const featuredJobs = [
      {
        id: 1,
        title: "Senior Software Engineer",
        department: "Engineering",
        location: "Visakhapatnam, Andhra Pradesh",
        type: "Full-time",
      },
      {
        id: 2,
        title: "Product Manager",
        department: "Product",
        location: "Visakhapatnam, Andhra Pradesh",
        type: "Full-time",
      },
      {
        id: 3,
        title: "UX Designer",
        department: "Design",
        location: "Visakhapatnam, Andhra Pradesh",
        type: "Full-time",
      },
    ];

    return (
      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 animate-slide-up">
            Featured Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredJobs.map((job, index) => (
              <Card
                key={job.id}
                className={`animate-hover-lift animate-stagger-${index + 1}`}
              >
                <CardHeader>
                  <CardTitle className="animate-fade-in">{job.title}</CardTitle>
                  <div className="flex gap-2 animate-fade-in animate-stagger-1">
                    <Badge variant="secondary">{job.department}</Badge>
                    <Badge variant="outline">{job.location}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 animate-fade-in animate-stagger-2">
                    {job.type}
                  </p>
                  <Link to={`/careers/job/${job.id}`}>
                    <Button className="w-full animate-button-hover">
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 animate-fade-in animate-stagger-4">
            <Link to="/careers/jobs">
              <Button
                variant="outline"
                size="lg"
                className="animate-hover-lift"
              >
                View All Openings
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedJobs;
