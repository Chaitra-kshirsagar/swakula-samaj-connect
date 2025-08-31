const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed opacity-90">
              This article and the writings on Sri Jihveshwara are offered to the people of the Swakula Sali community. 
              We pray to Sri Jihveshwara to bless us with good education, peace, and prosperity.
            </p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm opacity-75">
              © 2025 Swakulasali Samaj. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;