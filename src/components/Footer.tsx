import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "@/assets/logo-removebg-preview.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
<img 
              src={Logo} 
              alt="Logo" 
              className="w-30 h-11 object-cover group-hover:scale-105 transition-transform duration-300"
            />            </div>
            <p className="text-muted-foreground">
              An Engineering Services and Solutions company, 
founded by technocrats with 20+ years of 
expertise and guided by 50 years of collective 
insight. specialize in Power System Studies, Power 
Engineering, Industrial Design, and Project 
Management, delivering innovative  solutions for a 
sustainable future.            </p>
            
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/services/power-system-studies" className="hover:text-primary transition-colors">Power System Studies</a></li>
              <li><a href="/services/power-engineering" className="hover:text-primary transition-colors">Power Engineering</a></li>
              <li><a href="/services/electrifications" className="hover:text-primary transition-colors">Electrifications</a></li>
              <li><a href="/services/industrial-plant-design" className="hover:text-primary transition-colors">Industrial Plant Design</a></li>
              {/* <li><a href="#services" className="hover:text-primary transition-colors">Sustainability Solutions</a></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blogs</a></li>
              <li><a href="/career" className="hover:text-primary transition-colors">Career</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
             
              {/* <li><a href="#sustainability" className="hover:text-primary transition-colors">Sustainability</a></li> */}
                            
            </ul>
          </div>
          

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 72950 25895</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>connect@susnava.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Village Dadhpa, Post Amba<br />Thana Kutumba, District Aurangabad<br />Bihar, India - 824111</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-border/50" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <p className="text-muted-foreground text-sm">
            © {currentYear} SUSNAVA Tech LLP. All rights reserved.
          </p>
          <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;