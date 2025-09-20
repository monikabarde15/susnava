const brandLogos = [
  { name: "Blossom", logo: "🌸" },
  { name: "Leafe", logo: "🍃" },  
  { name: "Orbitc", logo: "⭕" },
  { name: "Hitech", logo: "🔧" },
  { name: "Invert", logo: "🔄" },
  { name: "Homey", logo: "🏠" },
];

const BrandLogos = () => {
  return (
    <section className="py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {brandLogos.map((brand, index) => (
            <div key={index} className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300">
              <span className="text-2xl">{brand.logo}</span>
              <span className="font-medium text-lg">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;