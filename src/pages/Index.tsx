import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ProjectShowcase from "@/components/ProjectShowcase";
import BrandLogos from "@/components/BrandLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* <BrandLogos /> */}
      <Services />
      <WhyUs />
      <ProjectShowcase />
      <Footer />
    </div>
  );
};

export default Index;
