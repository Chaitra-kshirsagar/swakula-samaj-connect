import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">
              Get in Touch
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12"></div>
            
            <ContactSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;