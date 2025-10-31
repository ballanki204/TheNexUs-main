import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Leaf, Shield, ArrowRight } from "lucide-react";

class ProductsGrid extends React.Component {
  render() {
    const products = [
      {
        icon: Leaf,
        title: "Plant Marketplace",
        description:
          "Revolutionary platform for buying and selling plants and greenery",
        link: "/plant-marketplace",
        gradient: "from-green-300 to-green-700",
      },
      {
        icon: Shield,
        title: "Safety & HIRA App",
        description:
          "AI-powered hazard recognition and workplace safety solutions",
        link: "/safety-app",
        gradient: "from-red-400 to-orange-500",
      },
    ];

    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border animate-fade-in">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative solutions designed to enhance your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm animate-hover-lift animate-stagger-${
                    index + 1
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 animate-scale-in`}
                    >
                      <IconComponent className="w-8 h-8 animate-icon-rotate" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <Link
                      to={product.link}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white border-0 group/btn animate-button-hover`}
                        size="lg"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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

export default ProductsGrid;
