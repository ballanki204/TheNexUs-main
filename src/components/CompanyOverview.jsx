import React from "react";
import { Card, CardContent } from "./ui/card";

class CompanyOverview extends React.Component {
  render() {
    return (
      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <Card className="animate-hover-lift">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-6 animate-slide-up">
                About TheNexUs
              </h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto animate-fade-in animate-stagger-1">
                At TheNexUs, we believe in the power of technology to transform
                businesses and improve lives. Our mission is to create
                innovative solutions that bridge the gap between cutting-edge
                technology and real-world applications. We foster a culture of
                collaboration, creativity, and continuous learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
}

export default CompanyOverview;
