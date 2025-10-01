import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Building, Grid3x3, Settings, Zap, TrendingUp, Shield } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Substation Design & Engineering",
    description: "Our designs ensure safe, reliable, and efficient power distribution compliant with industry standards.",
    features: ["Primary & Secondary Design", "Protection Schemes", "Feasibility Layouts", "System Upgrades"]
  },
   {
    icon: Shield,
    title: "Relay Coordination & Protection",
    description: "Optimized protection schemes to ensure system reliability and minimize equipment damage during faults.",
    features: ["Protection Philosophy", "Relay Settings", "Coordination Studies", "Testing & Commissioning"]
  },
  
 
  {
    icon: TrendingUp,
    title: "T&D Planning & System Optimization",
    description: "Strategic transmission and distribution planning to optimize system capacity and performance.",
    features: ["Load Forecasting", "System Expansion Planning", "Asset Optimization", "Reliability Analysis"]
  },
  {
    icon: Grid3x3,
    title: "Grid Integration & Smart Grid Solutions", 
    description: "Advanced grid integration services for renewable energy sources and smart grid modernization projects.",
    features: ["Renewable Integration", "Smart Grid Architecture", "Grid Modernization", "Energy Management Systems"]
  },
  {
    icon: Settings,
    title: "Utilities Upgrades & Modernization",
    description: "Upgrading legacy power systems with modern technologies for improved efficiency and reliability.",
    features: ["System Upgrades", "Technology Integration", "Performance Enhancement", "Future-Proofing"]
  },
  // {
  //   icon: Zap,
  //   title: "Electrical Infrastructure Design",
  //   description: "Complete electrical infrastructure design for industrial, commercial, and utility applications.",
  //   features: ["System Architecture", "Equipment Selection", "Installation Planning", "Testing Procedures"]
  // },
   {
    icon: Zap,
    title: "Project Management Support",
    description: "Providing seamless project management for timely, efficient,and safe power engineering delivery.",
    features: ["Planning & Scheduling", "Engineering Coordination and Monitoring", "Installation & Commissioning Support", "As-builts Documentation Support"]
  }
];

const capabilities = [
  {
    title: "Transmission Systems",
    description: "High voltage transmission line design, analysis, and optimization for reliable power delivery across long distances."
  },
  {
    title: "Distribution Networks",
    description: "Medium and low voltage distribution system design with focus on efficiency, reliability, and smart grid capabilities."
  },
  {
    title: "Substation Engineering",
    description: "Complete substation engineering services from preliminary design to detailed engineering and commissioning support."
  },
  {
    title: "Protection Systems",
    description: "Advanced protection system design using modern numerical relays and communication technologies."
  }
];

const PowerEngineering = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Power Engineering</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Engineering the Future of Power
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We are dedicated to shape a future where energy is accessible, resilient, and sustainable as well as focused on future-ready
            grid systems, we integrate renewable energy sources, optimize distribution networks, and support sustainable energy
            solutions, ultimately empowering businesses and industries to maintain efficient, safe, and resilient electrical systems.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Power Engineering Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive engineering solutions for reliable and sustainable power infrastructure
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

      {/* Core Capabilities */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise across all aspects of power system engineering and design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="group hover:shadow-green transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{capability.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process & Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Engineering Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to delivering reliable and innovative power engineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Analysis & Planning",
                description: "Comprehensive system analysis and strategic planning phase"
              },
              {
                step: "02", 
                title: "Design & Engineering",
                description: "Detailed engineering design with advanced modeling and simulation"
              },
              {
                step: "03",
                title: "Implementation",
                description: "A rigorous review and approval process to ensure flawless implementation"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Onsite Installation and commissioning Support to eliminate execution issues"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our Power Engineering</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference of working with power engineering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Innovative Solutions",
                description: "Cutting-edge engineering approaches that deliver reliable and efficient power systems"
              },
              // {
              //   title: "Industry Expertise", 
              //   description: "Deep domain knowledge with 15+ years of experience in power system engineering"
              // },
              {
                title: "Sustainable Design",
                description: "Environmentally conscious engineering that supports long-term sustainability goals"
              },
              // {
              //   title: "Proven Track Record",
              //   description: "Successful delivery of complex power engineering projects across diverse industries"
              // },
              // {
              //   title: "Advanced Technology",
              //   description: "Utilizing the latest software tools and methodologies for accurate analysis and design"
              // },
              {
                title: "Comprehensive Support",
                description: "End-to-end engineering support from concept development to system commissioning"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-green transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Power Your Future?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our power engineering expertise can drive your project's success 
              with innovative, reliable, and sustainable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PowerEngineering;