import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Zap, Shield, Settings, AlertTriangle, Activity, Power } from "lucide-react";

const studyTypes = [
  {
    icon: Activity,
    title: "Load Flow Study",
    description: "We provide detailed insights into power distribution and system performance, helping Industries to design, operate, and maintain efficient, reliable, and safe electrical systems.",
    features: ["System Performance Analysis", "Voltage Drop Assessment", "Power Loss Calculations", "Capacity Planning"]
  },
  {
    icon: Shield,
    title: "Short Circuit Study", 
    description: "We identify vulnerabilities, recommend solutions to safeguard your assets, and help you meet regulatory requirements. Enhance safety, minimize downtime, and protect your investment.",
    features: ["Fault Current Analysis", "Equipment Rating Verification", "Safety Assessment", "Regulatory Compliance"]
  },
  {
    icon: Settings,
    title: "Protection & Coordination Study",
    description: "We analyze and optimize your electrical protection devices to ensure faults are isolated quickly and efficiently, minimizing downtime, equipment damage, and safety risks.",
    features: ["Device Coordination", "Selectivity Analysis", "Time-Current Curves", "Relay Settings Optimization"]
  },
  {
    icon: AlertTriangle,
    title: "Arc Flash Study",
    description: "We identify arc flash risks, calculate hazard levels, and recommend safety measures to protect personnel and ensure compliance with safety standards.",
    features: ["Hazard Assessment", "PPE Requirements", "Safety Labels", "NFPA 70E Compliance"]
  },
  {
    icon: Power,
    title: "Motor Acceleration Study",
    description: "We analyze the starting and acceleration of motors to ensure smooth startup, minimize voltage drops, and prevent equipment tripping or damage and optimize protect system stability.",
    features: ["Starting Analysis", "Voltage Drop Studies", "Protection Coordination", "System Stability"]
  },
  {
    icon: Zap,
    title: "High-Voltage DC System Study",
    description: "We study High Voltage DC circuits and provide solutions to design, Fuse selection & Coordination, and DC Arc Flash study for safe and reliable integration of Electrical Vehicle (EV).",
    features: ["HVDC System Design", "Fuse Coordination", "DC Arc Flash Analysis", "EV Integration"]
  }
];

const additionalStudies = [
  {
    title: "Transient Stability Study",
    description: "We assess your power system's ability to remain stable and quickly recover after major disturbances, such as faults or sudden load changes, helping prevent outages and equipment damage while ensuring reliable operation."
  },
  {
    title: "Grid Compliance Study", 
    description: "We ensure your electrical system meets all utility and regulatory grid standards for safe, reliable, and efficient operation, helping you maintain compliance and grid integration, avoid penalties and disruption."
  },
  {
    title: "Harmonics Study",
    description: "We analyze electrical harmonics to identify distortions caused by non-linear loads and recommend solutions to improve power quality, protect equipment, and ensure compliance."
  },
  {
    title: "Power Quality Study",
    description: "We evaluate, detect and resolve power quality issues like voltage sags, swells, flicker, and interruptions, ensuring reliable, efficient, and stable operation of your equipment and processes."
  },
  {
    title: "Insulation Coordination Study", 
    description: "We analyze electrical system voltages and insulation levels to ensure proper coordination, preventing equipment insulation failure and enhancing system reliability and safety."
  }
];

const tools = [
  "SKM PTW", "ETAP", "Aspen", "Cyme", "Easy Power", "CDEGS", 
  "PSCAD", "PSS-E", "DIGISILENT Power Factory", "Open DSS", "AutoCAD"
];

const PowerSystemStudies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Power System Studies</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Power System Analysis
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our Power System Studies services deliver comprehensive and accurate analysis of electrical systems 
              to optimize performance, enhance safety, and ensure reliability. By leveraging cutting-edge modeling, 
              simulation, and advanced protection techniques, we provide detailed insights into power flow, fault analysis, and system stability.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ensuring a reliable, efficient, and resilient power system through expert analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {studyTypes.map((study, index) => {
              const Icon = study.icon;
              return (
                <Card key={index} className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{study.title}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">{study.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {study.features.map((feature, idx) => (
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

      {/* Additional Studies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Additional Specialized Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive analysis solutions for complex power system challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {additionalStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-green transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{study.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Standards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Tools & Standards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage industry-leading software and comply with international standards for accurate analysis
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Software Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="justify-center p-3 text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Compliance Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {["NEC", "IEEE", "IEC", "IS", "CSA", "International"].map((standard, index) => (
                    <Badge key={index} variant="outline" className="justify-center p-3 text-sm">
                      {standard}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Any Project in Mind?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our services span across the globe with dynamic simulations and compliance with major international standards. 
              Let's discuss how we can help optimize your power system.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
              Let's Connect
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PowerSystemStudies;