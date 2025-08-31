import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const NavigationCards = () => {
  const cards = [
    {
      title: "Sri Jihveshwara",
      path: "/sri-jihveshwara",
      description: "Learn about the divine origin and teachings of Bhagwan Sri Jihveshwara"
    },
    {
      title: "Sri Ananthaswamy",
      path: "/sri-ananthaswamy",
      description: "Discover the life and spiritual journey of the great saint Sri Ananth Maharaj"
    },
    {
      title: "Swakulasali Community",
      path: "/community",
      description: "Explore the history, traditions, and lineage of the Swakulasali community"
    },
    {
      title: "Sanghas",
      path: "/sanghas",
      description: "Connect with various Swakulasali organizations and community groups"
    },
    {
      title: "Contact Us",
      path: "/contact",
      description: "Get in touch with the community and find our location"
    }
  ];

  return (
    <section className="py-16 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Explore Our Community
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card) => (
            <Link key={card.path} to={card.path} className="group">
              <Card className="h-full bg-white shadow-card border-border/50 hover:shadow-card-hover transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-dark transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationCards;