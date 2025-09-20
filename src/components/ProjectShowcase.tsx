import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Sun, Battery, Zap } from "lucide-react";

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

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We bring renewable energy to every space
          </h2>
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth group">
            VIEW ALL PROJECTS
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Details */}
          <div>
            <Card className="shadow-large hover:shadow-green transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold mb-4">
                  Amazing Textiles Manufacturing Plant
                </CardTitle>
                <p className="text-muted-foreground mb-6">
                  To reduce operational costs and commit to green manufacturing, Vaibhav Textiles integrated a high-efficiency 500 kW solar array into their production facility.
                </p>
                
                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Sun className="w-3 h-3" />
                    Solar panels
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Battery className="w-3 h-3" />
                    Battery storage
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    EV Charger
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3 uppercase tracking-wide">RESULT</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {projectMetrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {metric.label}
                        </div>
                        {metric.unit && (
                          <div className="text-sm text-muted-foreground">
                            {metric.unit}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-medium transition-smooth group">
                  VIEW PROJECT
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Project Images */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {projectImages.map((image, index) => (
                <div key={index} className={`relative overflow-hidden rounded-lg group ${index === 0 ? 'col-span-2' : ''}`}>
                  <img 
                    src={image} 
                    alt={`Project image ${index + 1}`}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${index === 0 ? 'h-64' : 'h-32'}`}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;