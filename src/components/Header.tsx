import { Button } from "@/components/ui/button";
import { Sun, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/public/logo-removebg-preview.png" alt="" className="w-30 h-11 object-cover group-hover:scale-105 transition-transform duration-300"/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
             <a href="/" className="text-foreground/80 hover:text-primary transition-smooth">
             Home
            </a>
            <a href="/about" className="text-foreground/80 hover:text-primary transition-smooth">
              About Us
            </a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-smooth">
              Services
            </a>
            <a href="/blog" className="text-foreground/80 hover:text-primary transition-smooth">
              Blog
            </a>
            <a href="/career" className="text-foreground/80 hover:text-primary transition-smooth">
              Career
            </a>
            <a href="/contact" className="text-foreground/80 hover:text-primary transition-smooth">
              Contact
            </a>
            <Button variant="default" className="bg-gradient-primary hover:shadow-green transition-smooth">
              LET'S EXPLORE
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;