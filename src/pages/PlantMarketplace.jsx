import React from "react";

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
  Leaf,
  ShoppingBag,
  Users,
  TrendingUp,
  Package,
  MapPin,
} from "lucide-react";
import plantIcon from "../assets/plant-icon.jpg";
import { Link } from "react-router-dom";

class PlantMarketplace extends React.Component {
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
        icon: ShoppingBag,
        title: "Buy & Sell Plants",
        description:
          "Wide variety of plants, herbs, vegetables, ornamentals, and plant-based products",
      },
      {
        icon: Users,
        title: "Home Business Support",
        description:
          "Perfect platform for part-time entrepreneurs and home-based sellers",
      },
      {
        icon: TrendingUp,
        title: "Free Platform Access",
        description:
          "Currently offering free access to build your plant business",
      },
      {
        icon: Package,
        title: "Order Management",
        description:
          "Track orders, manage inventory, and handle transactions seamlessly",
      },
      {
        icon: MapPin,
        title: "Local & Beyond",
        description: "Connect with buyers and sellers in your area and beyond",
      },
      {
        icon: Leaf,
        title: "Green Community",
        description:
          "Join a network of plant enthusiasts and eco-conscious entrepreneurs",
      },
    ];

    const categories = [
      "Indoor Plants",
      "Outdoor Plants",
      "Herbs & Vegetables",
      "Fruits & Berries",
      "Ornamental Plants",
      "Plant Care Products",
      "Seeds & Saplings",
      "Plant-Based By-products",
    ];

    return (
      <div className="min-h-screen">
        <main>
          <section className="relative overflow-hidden bg-plant-background py-20">
            <div className="container">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                  <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl text-plant-text">
                    Plant & Greenery Marketplace
                  </h1>
                  <p className="mb-8 text-lg text-plant-text">
                    Revolutionary platform empowering home-based entrepreneurs
                    to buy, sell, and grow their plant business legally and
                    sustainably
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      size="lg"
                      className="bg-plant-primary text-white hover:bg-plant-primary/90"
                    >
                      Join as Seller
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-plant-primary text-plant-primary hover:bg-plant-primary hover:text-white"
                      onClick={() => this.setConsultancyOpen(true)}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={plantIcon}
                    alt="Plant marketplace"
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
                  Platform Features
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Everything you need to start and grow your plant business
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={feature.title}
                      className="group transition-all hover:shadow-lg hover:scale-105 hover:border-plant-primary animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-plant-secondary group-hover:bg-plant-accent transition-colors">
                          <Icon className="h-6 w-6 text-plant-primary group-hover:text-plant-text transition-colors" />
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

          <section className="bg-muted/50 py-20">
            <div className="container">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Plant Categories
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Browse and sell across various plant categories
                </p>
              </div>
              <div className="mx-auto max-w-4xl">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  {categories.map((category) => (
                    <Card
                      key={category}
                      className="text-center transition-all hover:shadow-md hover:scale-105 hover:border-plant-primary cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <p className="font-medium text-plant-primary hover:text-plant-text transition-colors">
                          {category}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                  Platform Roadmap
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-2 border-plant-primary">
                    <CardHeader>
                      <CardTitle className="text-plant-primary">
                        Version 1 (Current)
                      </CardTitle>
                      <CardDescription>
                        Available now for home & midscale sellers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Free platform access",
                          "Buy & sell functionality",
                          "User profiles",
                          "Order tracking",
                          "Community features",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-plant-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Future Enhancements</CardTitle>
                      <CardDescription>
                        Coming soon to scale your business
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Premium seller features",
                          "Enterprise marketplace",
                          "Advanced analytics",
                          "Bulk order management",
                          "Automated notifications",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-plant-primary" />
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

          <section className="bg-plant-primary py-20 text-plant-background">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-4xl font-bold animate-fade-in">
                  Ready to Start Your Plant Business?
                </h2>
                <p className="mb-8 text-lg opacity-90 animate-slide-up">
                  Join our growing community of plant entrepreneurs and start
                  earning from home
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-scale-in">
                  <Button
                    size="lg"
                    className="bg-plant-background text-plant-primary hover:bg-plant-background/90"
                  >
                    Sign Up Free
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-plant-background text-plant-background text-green-600 hover:bg-plant-background/10"
                    onClick={() => {
                      window.location.href = "/book";
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }, 100);
                    }}
                  >
                    Book a Session
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

export default PlantMarketplace;
