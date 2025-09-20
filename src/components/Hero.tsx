import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import heroImage from "@/assets/hero-solar-field.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Driving <span className="green-highlight">Sustainable</span>
            Innovations
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Driven by engineering excellence, we pioneer dynamic and viable solutions through cutting-edge innovation and strategic collaboration. Your trusted partner for a sustainable future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-primary hover:shadow-green transition-smooth group">
              LET'S EXPLORE
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-smooth">
              CONTACT US
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/80 border-2 border-white/30" />
              <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30" />
            </div>
            <span className="text-lg">Fortune 500 collaborations & industry expertise</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;