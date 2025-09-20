import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";

const coreValues = [
  {
    title: "Integration",
    icon: Users,
    description: "We foster a culture of Integration by uniting diverse perspectives, skills, and resources, creating an environment where collaboration fuels success and synergy drives progress.",
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Innovation", 
    icon: Lightbulb,
    description: "We drive innovation by nurturing a culture of creativity, exploring new ideas, and pursuing cutting-edge solutions that address the dynamic challenges of our clients, Industries and our environs.",
    color: "bg-secondary/10 text-secondary"
  },
  {
    title: "Impact",
    icon: TrendingUp, 
    description: "We are committed to making a meaningful Impact by aligning our actions with purpose, pursuing excellence, and driving positive change for our stakeholders and society in long term.",
    color: "bg-accent/10 text-accent"
  }
];

const whyUs = [
  {
    title: "Customer Centric Approach",
    description: "We deliver tailored, cost-effective services with continuous support and collaboration to meet your unique needs."
  },
  {
    title: "Committed to Quality", 
    description: "High standards and continuous improvement drive everything we do, ensuring excellence in every project."
  },
  {
    title: "Experience Matters",
    description: "Our skilled engineers bring 15+ years of deep domain expertise and Fortune 500 collaboration experience."
  },
  {
    title: "Value Focused Delivery",
    description: "Flexible onshore/offshore models with optimized cost and quality for maximum value delivery."
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">About SUSNAVA Tech LLP</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Driving Sustainable Innovations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Susnava Tech is an engineering services company founded by technocrats with 15+ years of experience 
              in Fortune 500 collaborations. We specialize in Power System Studies, Power Engineering, 
              Grid Integration, Industrial Design, and Sustainable Energy Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-green transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deliver innovative, efficient, and sustainable engineering solutions that empower 
                  industries to build resilient infrastructure for the future.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-green transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Empower industries worldwide to build a resilient, sustainable future through 
                  cutting-edge engineering excellence and strategic innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values - 3 I's */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values: 3 I's</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              "We believe in collaboration, think creatively, and commit to meaningful solutions"
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Through Integration, Innovation, and Impact, we build a collaborative ecosystem that leverages 
              collective talent, create transformative solutions, and delivers enduring value to our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2 text-center">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full ${value.color} mx-auto mb-4 flex items-center justify-center`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference of working with engineering excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyUs.map((item, index) => (
              <Card key={index} className="group hover:shadow-green transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;