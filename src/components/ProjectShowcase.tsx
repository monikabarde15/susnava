import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Sun, Battery, Zap } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const ProjectShowcase = () => {
  const projectMetrics = [
    { label: "POWER RATING", value: "10", unit: "KVA" },
    { label: "BATTERIES", value: "12.5", unit: "KW" },
    { label: "SOLAR PANELS", value: "20", unit: "Panels" },
    { label: "ANNUAL SAVINGS", value: "$1,500", unit: "" },
    { label: "ROI", value: "6", unit: "Years" },
    { label: "CO₂ SAVED/YR", value: "6", unit: "tons of CO₂" },
  ];

  const projectImages = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
  ];
 const [formData, setFormData] = useState({ firstName: "", email: "",phone:"", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      // Replace with your actual API endpoint
      await axios.post("https://susnavabackend.onrender.com/api/contact", formData);
      setSuccess("Thank you for contacting us! We will get back to you shortly.");
      alert("Thank you for contacting us! We will get back to you shortly.");
      setFormData({ firstName: "", email: "",phone:"", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We bring renewable energy to every space
          </h2>
          {/* <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth group">
            VIEW ALL PROJECTS
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button> */}
        </div>

       <div className="w-full max-w-3xl mx-auto">
        <Card className="shadow-large hover:shadow-green transition-all duration-300 w-full">
          <CardContent>
            <h3 className="text-xl font-semibold mb-4"></h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input className="border p-2 rounded w-full" type="text" value={formData.firstName}
                onChange={handleChange} placeholder="Your Name" name="firstName" required />
              <input className="border p-2 rounded w-full" type="email" value={formData.email}
                onChange={handleChange} placeholder="Your Email" name="email" required />
              <input className="border p-2 rounded w-full" type="number"
                value={formData.phone}
                onChange={handleChange} placeholder="Your Phone Number" name="phone" required />
              <textarea className="border p-2 rounded w-full" placeholder="Your Message" name="message" rows={4}
                value={formData.message}
                onChange={handleChange} required />
              <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full">
                Contact Us
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>


      </div>
    </section>
  );
};

export default ProjectShowcase;