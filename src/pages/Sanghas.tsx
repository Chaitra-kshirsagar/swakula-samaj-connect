import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sanghas = () => {
  const sanghas = [
    { name: "Akila Karnataka Swakulasali Sangha", location: "BANGALORE" },
    { name: "Samyuktha Swakulasali Sangha", location: "BANGALORE" },
    { name: "Samyuktha Swakulasali Mahila Sangha", location: "BANGALORE" },
    { name: "Swakulasali Sangh Bangalore", location: "BANGALORE" },
    { name: "BE Swakula", location: "BANGALORE" },
    { name: "World Sali Foundation", location: "" },
    { name: "Sri Jihveshwara Vidyabhirudhi Trust", location: "BANGALORE" },
    { name: "Ankini Mahila Sangha", location: "BANGALORE" },
    { name: "Baghwan Sri Jihveshwara Sports and Cultural Assosication", location: "BANGALORE" },
    { name: "Swakulasali Samaja (Weaver)", location: "HYDERABAD" },
    { name: "Swakula Chetana", location: "BANGALORE" },
    { name: "Supersalis", location: "BANGALORE" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">
              Sanghas
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12"></div>
            
            <div className="text-center mb-12">
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                In Swakulasali community lots of Groups/Sanghas have been formed for development of the community on various parameters. Below is the list of Few Sanghas and their details.
              </p>
              <p className="text-sm text-text-secondary mt-4 italic">
                (Click to get Details to be updated)
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sanghas.map((sangha, index) => (
                <Card key={index} className="bg-white shadow-card border-border/50 hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-primary leading-tight">
                      {sangha.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {sangha.location && (
                      <p className="text-text-secondary font-medium">
                        📍 {sangha.location}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-text-secondary">
                For more information about joining or connecting with these sanghas, please contact us.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sanghas;