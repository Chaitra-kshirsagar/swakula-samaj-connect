import { Card } from "@/components/ui/card";
import heroImage from "@/assets/sri-jihveshwara-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center gradient-hero">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sri Jihveshwara - Divine Creator of Textiles" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-soft border-0 p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Swakulasali Samaj
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-medium">
            Bhagwan Sri Jihveshwara
          </p>
          <div className="mt-8 w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;