import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sun, Battery, Car, Factory, Zap, Grid3x3 } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solar Plant Design & Engineering",
    description: "We provide solar design, component selection, and commissioning support, ensuring efficiency & compliance for residential, commercial, and industrial projects.",
    features: ["Site Assessment & Analysis", "System Design & Optimization", "Grid Integration Studies", "Performance Monitoring Systems"]
  },
  {
    icon: Factory,
    title: "Industrial Electrification Solutions",
    description: "Comprehensive electrification services for industrial facilities to improve efficiency and sustainability.",
    features: ["Process Electrification", "Energy Efficiency Optimization", "Industrial Automation", "Smart Manufacturing Integration"]
  },
  {
    icon: Battery,
    title: "Battery Energy Storage Systems (BESS)",
    description: "Advanced energy storage solutions for grid stabilization, peak shaving, and renewable energy integration.",
    features: ["BESS Design & Engineering", "Grid-Scale Storage", "Microgrid Integration", "Energy Management Systems"]
  },
  {
    icon: Car,
    title: "EV Charging Infrastructure",
    description: "Complete electric vehicle charging solutions from residential to high-power commercial installations.",
    features: ["Charging Station Design", "Grid Integration Planning", "Load Management Systems", "Future Expansion Planning"]
  },
  {
    icon: Zap,
    title: "Backup Power & UPS Systems",
    description: "Reliable backup power solutions to ensure continuous operation during grid outages.",
    features: ["UPS System Design", "Generator Integration", "Critical Load Analysis", "Redundancy Planning"]
  },
  {
    icon: Grid3x3,
    title: "Smart Grid & Energy Management",
    description: "Advanced smart grid technologies and energy management systems for optimized power distribution.",
    features: ["Smart Grid Architecture", "Real-time Monitoring", "Demand Response Systems", "Grid Modernization"]
  }
];

const technologies = [
  {
    category: "Solar Technologies",
    items: ["Crystalline Silicon PV", "Thin-Film Technologies", "Concentrated Solar Power", "Floating Solar Systems"]
  },
  {
    category: "Energy Storage",
    items: ["Lithium-ion Battery Systems", "Flow Batteries", "Compressed Air Storage", "Hybrid Storage Solutions"]
  },
  {
    category: "EV Infrastructure", 
    items: ["AC Charging Systems", "DC Fast Charging", "Wireless Charging", "Vehicle-to-Grid (V2G)"]
  },
  {
    category: "Smart Technologies",
    items: ["IoT Integration", "AI-based Optimization", "Predictive Analytics", "Remote Monitoring"]
  }
];

const Electrifications = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Electrifications</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Driving Sustainable Energy Adoption
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We specialize in integrating advanced technologies to optimize energy use, improve
safety, and support the seamless transition to renewable energy sources, ensuring
reliable and future-ready infrastructures.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
              Electrify Your Future
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Electrification Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive electrification solutions for a sustainable and efficient energy future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leveraging cutting-edge technologies for optimal electrification solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-green transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {tech.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Project Lifecycle */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Lifecycle</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end project delivery from initial concept to long-term maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {[
              {
                step: "01",
                title: "Feasibility Study",
                description: "Site assessment, resource analysis, and economic evaluation"
              },
              {
                step: "02",
                title: "System Design", 
                description: "Detailed engineering design and optimization"
              },
              {
                step: "03",
                title: "Procurement & Installation",
                description: "Equipment procurement and professional installation"
              },
              {
                step: "04", 
                title: "Commissioning",
                description: "System testing, optimization, and grid connection"
              },
              {
                step: "05",
                title: "O&M Support",
                description: "Ongoing maintenance and performance monitoring"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Electrification Matters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your energy infrastructure with sustainable and efficient electrification solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Cost Reduction",
                description: "Significant reduction in energy costs through efficient electrification and renewable integration"
              },
              {
                title: "Environmental Impact",
                description: "Reduced carbon footprint and environmental impact through clean energy adoption"
              },
              {
                title: "Energy Independence",
                description: "Enhanced energy security and reduced dependence on fossil fuels"
              },
              {
                title: "Grid Stability",
                description: "Improved grid stability and reliability through advanced storage and management systems"
              },
              {
                title: "Future-Ready", 
                description: "Scalable solutions that adapt to future energy needs and technological advances"
              },
              {
                title: "Operational Efficiency",
                description: "Enhanced operational efficiency through smart grid technologies and automation"
              }
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-green transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Electrify Your Operations?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your energy infrastructure with our comprehensive electrification solutions. 
              Let's build a sustainable and efficient energy future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
                Start Your Electrification Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Electrifications;