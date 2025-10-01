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
  ArrowRight,
  Mail,
  Copy
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
  // {
  //   id: 3,
  //   title: "Industrial Design Engineer",
  //   department: "Industrial Plant Design",
  //   location: "Remote",
  //   type: "Full-time",
  //   experience: "4-6 years",
  //   description:
  //     "Develop electrical designs for industrial plants including instrumentation, control systems, and detailed engineering documentation.",
  //   requirements: [
  //     "Bachelor's in Electrical/Instrumentation Engineering",
  //     "Industrial plant design experience",
  //     "Proficiency in AutoCAD, E3D, or similar tools",
  //     "Knowledge of instrumentation and control systems"
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Sustainability Consultant",
  //   department: "Sustainability Solutions",
  //   location: "Bihar, India / Remote",
  //   type: "Full-time",
  //   experience: "2-4 years",
  //   description:
  //     "Drive sustainability initiatives, conduct lifecycle assessments, and develop green engineering solutions for environmental impact reduction.",
  //   requirements: [
  //     "Environmental/Chemical/Civil Engineering degree",
  //     "Experience in sustainability consulting",
  //     "Knowledge of LCA tools and methodologies",
  //     "Understanding of environmental regulations"
  //   ]
  // },
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
  const scrollToOpenings = () => {
    document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to open Gmail compose directly
  const openGmailCompose = (subject, body) => {
    const email = 'connect@susnava.com';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open Gmail compose in new tab
    window.open(gmailUrl, '_blank');
  };

  const copyEmailToClipboard = () => {
    const email = 'connect@susnava.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Email address copied to clipboard!');
    }).catch(() => {
      alert(`Please copy this email manually: ${email}`);
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Join Our Team
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Build Your Career with SUSNAVA
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join a passionate team dedicated to creating sustainable
              solutions for tomorrow's challenges. Grow your career and make a
              meaningful impact.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToOpenings}
            >
              View Open Positions <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Why Work With Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Experience innovation, growth, and impact in a collaborative environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map(({ icon: Icon, title, description }, idx) => (
              <Card key={idx} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 font-semibold">{title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="current-openings" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">Current Openings</h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Discover exciting opportunities to grow your career in engineering and sustainability
          </p>
          <div className="space-y-6 max-w-5xl mx-auto">
            {jobOpenings.map(job => (
              <Card key={job.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold mb-3 text-gray-900">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{job.department}</Badge>
                        <Badge className="flex items-center gap-1 bg-gray-100 text-gray-700" variant="outline">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </Badge>
                        <Badge className="flex items-center gap-1 bg-blue-100 text-blue-800" variant="outline">
                          <Clock className="w-3 h-3" /> {job.type}
                        </Badge>
                        <Badge className="flex items-center gap-1 bg-purple-100 text-purple-800" variant="outline">
                          <Briefcase className="w-3 h-3" /> {job.experience}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 shrink-0"
                        onClick={() => openGmailCompose(
                          `Application for ${job.title}`,
                          `Dear HR Team,

I would like to apply for the position of ${job.title}.

Please find my resume attached.

Thank you for your consideration.

Best regards`
                        )}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{requirement}</span>
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
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 text-gray-900">Application Process</h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Our streamlined hiring process ensures a smooth experience for all candidates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            {[
              { step: "01", title: "Apply Online", description: "Submit your application through Gmail" },
              { step: "02", title: "Initial Screening", description: "HR reviews your profile" },
              { step: "03", title: "Technical Interview", description: "Technical discussion with engineering" },
              { step: "04", title: "Final Interview", description: "Meet leadership to discuss goals" }
            ].map(({step, title, description}) => (
              <div key={step} className="p-4">
                <div className="w-16 h-16 bg-gradient-to-tr from-green-600 to-green-500 rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Career with Us?
          </h2>
          <p className="text-green-50 text-lg max-w-3xl mx-auto mb-8">
            Don't see a perfect role? Send your resume directly to our HR team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 shadow-lg"
              onClick={() => openGmailCompose(
                'General Application - Resume Submission',
                `Dear HR Team,

I am interested in exploring career opportunities with SUSNAVA.

Please find my resume attached for your consideration.

Thank you for your time.

Best regards`
              )}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Resume
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3"
              onClick={copyEmailToClipboard}
            >
              <Copy className="w-5 h-5 mr-2" />
              Copy Email
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
