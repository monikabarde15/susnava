import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Building, FileText, Search, Settings, PenTool, Wrench } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Electrical Design & Engineering",
    description: "Complete electrical system design for industrial plants with focus on safety, efficiency, and compliance.",
    features: ["Power Distribution Design", "Lighting System Design", "Grounding & Bonding", "Electrical Load Analysis"]
  },
  {
    icon: PenTool,
    title: "2D/3D Drafting & Documentation",
    description: "Professional drafting services using latest CAD technologies for accurate and detailed technical drawings.",
    features: ["AutoCAD 2D Drawings", "3D Modeling & Visualization", "As-Built Documentation", "Technical Specifications"]
  },
  {
    icon: Search,
    title: "Feasibility Studies & Analysis",
    description: "Comprehensive feasibility studies to evaluate project viability and optimize design approaches.",
    features: ["Technical Feasibility", "Economic Analysis", "Risk Assessment", "Alternative Evaluation"]
  },
  {
    icon: Settings,
    title: "Instrumentation & Control Design",
    description: "Advanced instrumentation and control system design for process optimization and automation.",
    features: ["Control System Architecture", "SCADA Design", "PLC Programming", "HMI Development"]
  },
  {
    icon: Wrench,
    title: "Detailed Engineering Support",
    description: "Comprehensive engineering support throughout project lifecycle from concept to commissioning.",
    features: ["Engineering Calculations", "Vendor Coordination", "Construction Support", "Commissioning Assistance"]
  },
  {
    icon: FileText,
    title: "Documentation & Compliance",
    description: "Complete documentation packages ensuring regulatory compliance and industry standards adherence.",
    features: ["Regulatory Compliance", "Safety Documentation", "Quality Assurance", "Standard Compliance"]
  }
];

const industries = [
  {
    title: "Oil & Gas",
    description: "Specialized electrical design for upstream, midstream, and downstream operations including hazardous area classifications."
  },
  {
    title: "Manufacturing",
    description: "Industrial electrical systems for manufacturing facilities focusing on automation, efficiency, and productivity."
  },
  {
    title: "Mining & Metals",
    description: "Robust electrical solutions for mining operations and metal processing facilities in challenging environments."
  },
  {
    title: "Chemical & Petrochemical",
    description: "Safe and reliable electrical designs for chemical processing plants with strict safety and environmental requirements."
  },
  {
    title: "Power Generation",
    description: "Electrical infrastructure design for conventional and renewable power generation facilities."
  },
  {
    title: "Water Treatment",
    description: "Specialized electrical systems for water treatment plants and wastewater processing facilities."
  }
];

const capabilities = [
  "Hazardous Area Classification & Design",
  "Motor Control Center (MCC) Design", 
  "Cable Tray & Conduit Routing",
  "Switchgear & Protection Design",
  "Emergency Power Systems",
  "Lightning Protection Systems",
  "Fire Detection & Alarm Systems",
  "Industrial Communication Networks",
  "Energy Management Systems",
  "Power Quality Analysis"
];

const IndustrialPlantDesign = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Industrial Plant Design</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Industrial Electrical Design
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our Industrial Plant Design services provide efficient, safe, and sustainable solutions, 
              driven by innovative designs, and compliance with industry standards for optimal performance 
              and cost reduction. Comprehensive industrial electrical design services including 2D/3D drafting, 
              feasibility studies, and detailed engineering support.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Design Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end industrial plant design services from concept to commissioning
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

      {/* Industry Expertise */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized knowledge across diverse industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-green transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technical expertise for complex industrial electrical systems
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{capability}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Design Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic approach ensuring quality, efficiency, and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 max-w-7xl mx-auto">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "Understanding project scope and technical requirements"
              },
              {
                step: "02",
                title: "Conceptual Design",
                description: "Initial design concepts and system architecture"
              },
              {
                step: "03",
                title: "Detailed Engineering",
                description: "Comprehensive design development and calculations"
              },
              {
                step: "04",
                title: "Documentation",
                description: "Complete technical documentation and drawings"
              },
              {
                step: "05",
                title: "Review & Approval", 
                description: "Design review and regulatory approval process"
              },
              {
                step: "06",
                title: "Implementation Support",
                description: "Construction support and commissioning assistance"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-sm">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-xs">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our Industrial Design</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the advantage of working with industrial design experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Industry Experience",
                description: "Extensive experience across diverse industrial sectors"
              },
              {
                title: "Regulatory Compliance",
                description: "Deep knowledge of industry standards and regulations"
              },
              {
                title: "Cost Optimization",
                description: "Efficient designs that optimize both performance and cost"
              },
              {
                title: "Safety Focus",
                description: "Safety-first approach in all design considerations"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Design Your Industrial Plant?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our experienced team help you create efficient, safe, and sustainable 
              industrial electrical systems tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
                Start Your Design Project
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

export default IndustrialPlantDesign;