import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Users, Target, Heart } from "lucide-react";

class CareersHero extends React.Component {
  render() {
    return (
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-10 py-5 lg:py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-scale-in">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Join 200+ Innovators
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                Shape the Future of
                <span className="animate-gradient-text"> Technology</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in animate-stagger-1">
                We're not just building software—we're crafting experiences that
                transform industries and empower millions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animate-stagger-2">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg group animate-hover-lift"
                >
                  Explore Opportunities
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className=" text-white bg-white/10 backdrop-blur-sm px-8 py-4 text-lg animate-hover-lift"
                >
                  Our Culture
                </Button>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in animate-stagger-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 animate-hover-lift">
                <Target className="w-8 h-8 mx-auto mb-3 text-blue-400 animate-icon-rotate" />
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm text-gray-300">Active Projects</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 animate-hover-lift">
                <Heart className="w-8 h-8 mx-auto mb-3 text-purple-400 animate-pulse-soft" />
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm text-gray-300">
                  Employee Satisfaction
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 col-span-2 animate-hover-lift">
                <Users className="w-8 h-8 mx-auto mb-3 text-green-400 animate-icon-rotate" />
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm text-gray-300">
                  Countries Represented
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in animate-stagger-4">
            <p className="text-gray-400 mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="text-white/50 font-semibold">TechCorp</div>
              <div className="text-white/50 font-semibold">InnovateLab</div>
              <div className="text-white/50 font-semibold">FutureWorks</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CareersHero;
