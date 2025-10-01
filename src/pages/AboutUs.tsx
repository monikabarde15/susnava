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
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Impact",
    icon: TrendingUp, 
    description: "We are committed to making a meaningful Impact by aligning our actions with purpose, pursuing excellence, and driving positive change for our stakeholders and society in long term.",
    color: "bg-primary/10 text-primary"
  }
];

const whyUs = [
  {
    title: "Customer Centric Approach",
    description: "We prioritize client satisfaction by delivering timely, cost-effective, and customized services, along with continuous support and transparent communication throughout the project lifecycle.",
//"We deliver tailored, cost-effective services with continuous support and collaboration to meet your unique needs."
  },
  {
    title: "Committed to Quality", 
    description:"We are dedicated to deliver excellence with high-quality standards at each stage of project cycle via attention to details and continuous improvement.", 
    //"High standards and continuous improvement drive everything we do, ensuring excellence in every project."
  },
  {
    title: "Experience Matters",
    description:" Our team consists of highly qualified engineers with extensive experience in engineering and design innovations ensuring reliable and efficient solutions tailored to your specific needs.", 
    //"Our skilled engineers bring 15+ years of deep domain expertise and Fortune 500 collaboration experience."
  },
  {
    title: "Value Focused Delivery",
    description: "We offer flexible onshore and offshore service models that optimize cost and speed while maintaining the quality standards, empowering our clients to focus on core priorities.",
//"Flexible onshore/offshore models with optimized cost and quality for maximum value delivery."
  }
];

const whyUs1 = [
  {
    title: "Sustainability at Core",
    description: "We ensure clean, safe, and sustainable design through standardized practices, and continual improvement."
    
  },
  {
    title: "Eco-Conscious Engineering", 
    description:"We commit to eco-conscious engineering by integrating sustainable practices and solutions that foster resilience & greener earth."
    
  },
  {
    title: "Sustainability Advocacy",
    description:"We train our teams, support community initiatives for climate awareness and environmental resilience.",
    //"Our team consists of highly qualified engineers with extensive experience in engineering and design innovations ensuring reliable and efficient solutions tailored to your specific needs.", 
    //"Our skilled engineers bring 15+ years of deep domain expertise and Fortune 500 collaboration experience."
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
            <Badge variant="outline" className="text-1xl md:text-2xl mb-4">About SUSNAVA Tech LLP</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Driving Sustainable Innovations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Susnava Tech is an engineering services company founded by Technocrats with 15+ experience in working with Fortune 500 and specializing 
in delivering innovative and sustainable solutions across the Power System Study, Power, Grid Integration, utilities, Industrial and energy 
sectors. We are driven by a team of visionary engineers and innovators with a deep commitment to engineering excellence and 
sustainability, we are dedicated to advancing innovation through strategic collaboration. 
Our focus is on delivering cutting-edge, sustainable solutions that address global challenges, drive progress, and create enduring value for 
smarter future cohorts.
 With a commitment to excellence and a deep understanding of industry dynamics, we partner with clients to optimize processes, enhance 
operational efficiency, and drive sustainable growth.
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
                   Collaborate to deliver innovative sustainable services and 
solutions to our client.
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
                   Become a sustainable technology partner to our client by choice.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Way of Collaboration</h2>
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

       <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4"> Our Sustainability Commitment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
               To deliver innovative, efficient, and responsible engineering solutions that empower industries to build a sustainable tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyUs1.map((item, index) => (
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