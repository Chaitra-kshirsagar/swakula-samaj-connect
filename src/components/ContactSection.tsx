import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Capture form data
    const formSubmission = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toLocaleString(),
    };
    
    try {
      // Send to Google Sheets via Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbzh65FTX2GO52FHN6MVXxXhwIT7uFpZlYYPtH_g0YCEKyMqjQEw8Gk-l3yZBbUVNwMN0g/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formSubmission)
      });
      
      // Check if response is ok
      if (response.ok) {
        const result = await response.json();
        console.log("Response from server:", result);
        
        // Show success message
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. We have received your inquiry and will get back to you soon.",
        });
        
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Log for debugging
      console.log("Form submitted successfully:", formSubmission);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Show error message
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 section-bg">
      <div className="container mx-auto px-6">


        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-white shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-1"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-6">
            <Card className="bg-white shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>raghavendrark18@yahoo.co.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>9880438856</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <span>Visit us on the map below</span>
                </div>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="bg-white shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="bg-gray-100 rounded-lg p-8">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">Sri Sadhguru Anantha Swamy Ashrama</h3>
                    <p className="text-text-secondary mb-4">
                      Find us on Google Maps for directions and location details
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/SGkzQr3y92vNmGwF7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;