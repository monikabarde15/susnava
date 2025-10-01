import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, TrendingUp, Headphones, Target, Award } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Customer Centric Approach",
    description: "Tailored, cost-effective services with continuous support and collaboration to meet your unique engineering needs."
  },
  {
    icon: Star,
    title: "Committed to Quality", 
    description: "High standards and continuous improvement drive our engineering excellence and innovative solution delivery."
  },
  {
    icon: TrendingUp,
    title: "Experience Matters",
    description: "Skilled engineers with 15+ years of deep domain expertise and Fortune 500 collaboration experience."
  },
  {
    icon: Target,
    title: "Value Focused Delivery",
    description: "Flexible onshore/offshore models with optimized cost and quality to maximize your project value."
  },
  // {
  //   icon: Headphones,
  //   title: "Integration & Innovation",
  //   description: "Collaboration of diverse skills and perspectives combined with cutting-edge solutions for transformative results."
  // },
  // {
  //   icon: Award,
  //   title: "Sustainable Impact",
  //   description: "Purpose-driven excellence creating long-term positive change for clients, industry, and environment."
  // }
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">OUR CORE VALUES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why choose SUSNAVA Tech?</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Through Integration, Innovation, and Impact, we build transformative engineering solutions that deliver enduring value. Our commitment to excellence drives sustainable innovation across all engineering disciplines.
          </p>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {benefits.map((benefit, index) => {
    const Icon = benefit.icon;
    return (
      <Card
        key={index}
        className="group hover:shadow-green transition-all duration-300 hover:-translate-y-1 border-border/50 flex flex-col h-full"
      >
        <CardContent className="p-8 text-center flex flex-col h-full justify-between">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-green transition-all duration-300">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
              {benefit.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
          </div>
        </CardContent>
      </Card>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default WhyUs;