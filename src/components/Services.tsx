import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Zap, Settings, Factory, Lightbulb, Leaf } from "lucide-react";
import solarHome from "@/assets/solar-home.jpg";
import batteryStorage from "@/assets/battery-storage.jpg";
import evCharger from "@/assets/ev-charger.jpg";

const services = [
  {
    id: "power-system-studies",
    icon: Zap,
    title: "Power System Studies",
    description: "Comprehensive power system analysis and studies...",
    image: solarHome,
    features: [
      "Load Flow & Motor Acceleration Studies",
      "Harmonics & Power Quality Analysis",
      "Short Circuit & Protection Studies",
      "Transient Stability & Compliance",
      "Arc Flash & HVDC Studies"
    ]
  },
  {
    id: "power-engineering",
    icon: Settings,
    title: "Power Engineering",
    description: "Advanced power engineering solutions...",
    image: batteryStorage,
    features: [
      "Substation Design & Engineering",
      "Grid Integration & Smart Grid Solutions",
      "Relay Coordination & Protection",
      "T&D Planning & Optimization",
      "Power System Modernization"
    ]
  },
  {
    id: "electrifications",
    icon: Lightbulb,
    title: "Electrifications",
    description: "Complete electrification solutions...",
    image: evCharger,
    features: [
      "Solar Plant Design & Engineering",
      "Industrial Electrification",
      "Battery Energy Storage Systems",
      "EV Charging Infrastructure",
      "Backup Power & UPS"
    ]
  },
  {
    id: "industrial-plant-design",
    icon: Factory,
    title: "Industrial Design",
    description: "Comprehensive industrial electrical design...",
    image: solarHome,
    features: [
      "Electrical Design & Engineering",
      "2D/3D Drafting & Documentation",
      "Feasibility Studies",
      "Instrumentation & Control Design",
      "Detailed Engineering Support"
    ]
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/services/${id}`);
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Engineering Services</h2>
          <p className="text-muted max-w-3xl mx-auto">
            Comprehensive engineering solutions spanning power systems, industrial design, and sustainable innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full cursor-pointer"
                onClick={() => handleCardClick(service.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 p-3 bg-primary rounded-full">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 justify-between">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-medium transition-smooth group mt-auto"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click when button is clicked
                      handleCardClick(service.id);
                    }}
                  >
                    GET STARTED
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
