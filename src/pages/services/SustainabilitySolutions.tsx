import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Leaf, Recycle, BarChart, Shield, Target, Globe } from "lucide-react";

const services = [
  {
    icon: Recycle,
    title: "Zero-Waste Engineering Approaches",
    description: "Innovative engineering methodologies that minimize waste generation and maximize resource utilization throughout project lifecycles.",
    features: ["Circular Design Principles", "Waste Stream Analysis", "Resource Recovery Systems", "Closed-Loop Processes"]
  },
  {
    icon: Leaf,
    title: "Green & Sustainable Design Solutions",  
    description: "Environmentally conscious design approaches that integrate sustainability principles from concept to implementation.",
    features: ["Renewable Energy Integration", "Energy Efficiency Optimization", "Sustainable Materials Selection", "Green Building Standards"]
  },
  {
    icon: BarChart,
    title: "Lifecycle Assessment & Optimization",
    description: "Comprehensive analysis of environmental impacts throughout product and system lifecycles for continuous improvement.",
    features: ["LCA Methodology", "Impact Assessment", "Optimization Strategies", "Performance Monitoring"]
  },
  {
    icon: Shield,
    title: "Environmental Impact Analysis",
    description: "Detailed assessment of environmental implications to ensure compliance and minimize ecological footprint.",
    features: ["Environmental Risk Assessment", "Compliance Evaluation", "Mitigation Strategies", "Monitoring Programs"]
  },
  {
    icon: Target,
    title: "Sustainability Strategy Development",
    description: "Strategic planning and implementation of sustainability initiatives aligned with business objectives and environmental goals.",
    features: ["Sustainability Roadmaps", "Goal Setting & KPIs", "Implementation Planning", "Progress Tracking"]
  },
  {
    icon: Globe,
    title: "Climate Resilience Planning",
    description: "Forward-thinking approaches to build climate-resilient infrastructure and systems for long-term sustainability.",
    features: ["Climate Risk Assessment", "Adaptation Strategies", "Resilient Design", "Future-Proofing"]
  }
];

const sustainabilityAreas = [
  {
    title: "Eco-Conscious Engineering",
    description: "We commit to eco-conscious engineering by integrating sustainable practices and solutions that foster resilience & greener earth.",
    icon: Leaf
  },
  {
    title: "Sustainability Advocacy",
    description: "We train our teams, upskill our clients, and support community initiatives for climate awareness and environmental resilience.",
    icon: Target
  },
  {
    title: "Sustainability at Core",
    description: "We ensure clean, safe, and sustainable processes through standardized practices, and continual improvement.",
    icon: Shield
  }
];

const benefits = [
  {
    category: "Environmental Benefits",
    items: ["Reduced Carbon Footprint", "Resource Conservation", "Waste Minimization", "Ecosystem Protection"]
  },
  {
    category: "Economic Benefits", 
    items: ["Cost Savings", "Operational Efficiency", "Risk Mitigation", "Long-term Value Creation"]
  },
  {
    category: "Social Benefits",
    items: ["Community Impact", "Stakeholder Engagement", "Health & Safety", "Corporate Responsibility"]
  },
  {
    category: "Technical Benefits",
    items: ["Innovation Driver", "System Optimization", "Future-Ready Solutions", "Performance Enhancement"]
  }
];

const SustainabilitySolutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Sustainability Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building a Sustainable Future
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Environmental and sustainability consulting focused on zero-waste approaches, green engineering, 
              and lifecycle optimization. We deliver innovative, efficient, and responsible engineering solutions 
              that empower industries to build a sustainable tomorrow through eco-conscious practices and strategic sustainability planning.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
              Start Your Sustainability Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Sustainability Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive sustainability solutions for a greener and more resilient future
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

      {/* Sustainability Commitment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Sustainability Commitment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To deliver innovative, efficient, and responsible engineering solutions that empower industries to build a sustainable tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sustainabilityAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="group hover:shadow-green transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sustainability Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-dimensional benefits of implementing comprehensive sustainability solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-green transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-center">{benefit.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {benefit.items.map((item, idx) => (
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
      </section>

      {/* Methodology */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic approach to implementing sustainable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Current state analysis and sustainability baseline establishment"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Development of comprehensive sustainability strategy and roadmap"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execution of sustainability initiatives and best practices"
              },
              {
                step: "04",
                title: "Monitoring", 
                description: "Continuous monitoring and performance measurement"
              },
              {
                step: "05",
                title: "Optimization",
                description: "Continuous improvement and optimization of sustainability practices"
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
      </section>

      {/* Impact Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sustainability Impact Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key areas where our sustainability solutions create meaningful impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Carbon Footprint Reduction",
                description: "Systematic approaches to measure, manage, and minimize carbon emissions across operations"
              },
              {
                title: "Resource Efficiency",
                description: "Optimization of resource utilization for maximum efficiency and minimal waste generation"
              },
              {
                title: "Renewable Energy Adoption",
                description: "Strategic integration of renewable energy sources for sustainable power generation"
              },
              {
                title: "Circular Economy Implementation",
                description: "Development of circular economy principles to eliminate waste and maximize resource value"
              },
              {
                title: "Environmental Compliance",
                description: "Ensuring adherence to environmental regulations and industry sustainability standards"
              },
              {
                title: "Community Engagement",
                description: "Building stakeholder relationships and community awareness for sustainable development"
              }
            ].map((area, index) => (
              <Card key={index} className="group hover:shadow-green transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build a Sustainable Future?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in creating innovative, responsible, and sustainable solutions that make a positive 
              impact on the environment and society. Let's work together towards a greener tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
                Begin Your Sustainability Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More About Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SustainabilitySolutions;