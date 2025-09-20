import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Users,
  Briefcase,
  CheckCircle,
  Heart,
  TrendingUp,
  Award,
  ArrowRight
} from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Power Systems Engineer",
    department: "Power Engineering",
    location: "Bihar, India / Remote",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Lead power system studies including load flow analysis, short circuit studies, and protection coordination for industrial and utility projects.",
    requirements: [
      "Bachelor's/Master's in Electrical Engineering",
      "5+ years in power system analysis",
      "Experience with ETAP, PSS/E, or similar software",
      "Knowledge of IEEE standards and grid codes"
    ]
  },
  {
    id: 2,
    title: "Renewable Energy Project Engineer",
    department: "Electrifications",
    location: "Bihar, India",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Design and develop solar PV systems, battery energy storage solutions, and grid integration projects for sustainable energy initiatives.",
    requirements: [
      "Electrical/Renewable Energy Engineering degree",
      "Experience in solar PV design and BESS",
      "Knowledge of renewable energy standards",
      "AutoCAD and PVsyst proficiency"
    ]
  },
  {
    id: 3,
    title: "Industrial Design Engineer",
    department: "Industrial Plant Design",
    location: "Remote",
    type: "Full-time",
    experience: "4-6 years",
    description:
      "Develop electrical designs for industrial plants including instrumentation, control systems, and detailed engineering documentation.",
    requirements: [
      "Bachelor's in Electrical/Instrumentation Engineering",
      "Industrial plant design experience",
      "Proficiency in AutoCAD, E3D, or similar tools",
      "Knowledge of instrumentation and control systems"
    ]
  },
  {
    id: 4,
    title: "Sustainability Consultant",
    department: "Sustainability Solutions",
    location: "Bihar, India / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Drive sustainability initiatives, conduct lifecycle assessments, and develop green engineering solutions for environmental impact reduction.",
    requirements: [
      "Environmental/Chemical/Civil Engineering degree",
      "Experience in sustainability consulting",
      "Knowledge of LCA tools and methodologies",
      "Understanding of environmental regulations"
    ]
  },
  {
    id: 5,
    title: "Graduate Engineering Trainee",
    department: "Multiple Departments",
    location: "Bihar, India",
    type: "Full-time",
    experience: "0-1 years",
    description:
      "Comprehensive training program for fresh graduates across power systems, renewable energy, and industrial design domains.",
    requirements: [
      "Bachelor's in Electrical/Mechanical/Civil Engineering",
      "Strong academic performance",
      "Passion for sustainable engineering",
      "Willingness to learn and grow"
    ]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Structured career progression with mentoring and skill development programs"
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and comprehensive leave policies"
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Performance-based incentives and recognition programs"
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with diverse, talented teams on cutting-edge projects"
  }
];

const Career = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Career with SUSNAVA
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join a passionate team dedicated to creating sustainable
              solutions for tomorrow's challenges. Grow your career and make a
              meaningful impact.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth">
              View Open Positions <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Work With Us</h2>
            <p className="text-muted max-w-3xl mx-auto">
              Experience innovation, growth, and impact in a collaborative environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map(({ icon: Icon, title, description }, idx) => (
              <Card key={idx} className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted">{description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Current Openings</h2>
          <p className="text-center text-muted max-w-3xl mx-auto mb-12">
            Discover exciting opportunities to grow your career in engineering and sustainability
          </p>
          <div className="space-y-6 max-w-5xl mx-auto">
            {jobOpenings.map(job => (
              <Card key={job.id} className="group hover:shadow-green transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-3">
                        <Badge>{job.department}</Badge>
                        <Badge className="flex items-center gap-1" variant="outline">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </Badge>
                        <Badge className="flex items-center gap-1" variant="outline">
                          <Clock className="w-3 h-3" /> {job.type}
                        </Badge>
                        <Badge className="flex items-center gap-1" variant="outline">
                          <Briefcase className="w-3 h-3" /> {job.experience}
                        </Badge>
                      </div>
                    </div>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=hr@example.com&su=${encodeURIComponent('Application for Role')}&body=${encodeURIComponent('I would like to apply...')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Apply Now</Button>
                    </a>

                  </div>
                </CardHeader>
                <CardContent>
                  <p>{job.description}</p>
                  <div>
                    <h4 className="font-semibold my-3">Key Requirements:</h4>
                    <ul>
                      {job.requirements.map((r, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">Application Process</h2>
          <p className="text-center text-muted max-w-3xl mx-auto mb-12">
            Our streamlined hiring process ensures a smooth experience for all candidates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            {[
              { step: "01", title: "Apply Online", description: "Submit your application through the portal" },
              { step: "02", title: "Initial Screening", description: "HR reviews your profile" },
              { step: "03", title: "Technical Interview", description: "Technical discussion with engineering" },
              { step: "04", title: "Final Interview", description: "Meet leadership to discuss goals" }
            ].map(({step, title, description}) => (
              <div key={step} className="p-4">
                <div className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg">
                  {step}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-bl from-primary to-secondary py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Career with Us?
          </h2>
          <p className="text-white max-w-3xl mx-auto mb-8">
            Don’t see a perfect role? Send your resume directly to our HR team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button as="a" href="mailto:hr@example.com" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Send Resume
            </Button>
            <Button size="lg" variant="outline">
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
