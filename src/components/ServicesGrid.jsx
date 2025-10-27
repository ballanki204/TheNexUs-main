import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Code2, TrendingUp, Leaf, Shield } from 'lucide-react';

class ServicesGrid extends React.Component {
  render() {
    const services = [
      {
        icon: Code2,
        title: 'Software Development',
        description: 'Custom enterprise solutions for healthcare, real estate, trading, and more',
        link: '/software'
      },
      {
        icon: TrendingUp,
        title: 'Digital Marketing',
        description: 'Data-driven strategies to grow your online presence and reach',
        link: '/digital-marketing'
      },
      {
        icon: Leaf,
        title: 'Plant Marketplace',
        description: 'Revolutionary platform for buying and selling plants and greenery',
        link: '/plant-marketplace'
      },
      {
        icon: Shield,
        title: 'Safety & HIRA App',
        description: 'AI-powered hazard recognition and workplace safety solutions',
        link: '/safety-app'
      }
    ];

    return (
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-lg transition-all animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={service.link}>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesGrid;
