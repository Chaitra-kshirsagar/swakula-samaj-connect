import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/circular-logo.png";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/sri-jihveshwara", label: "Sri Jihveshwara" },
    { path: "/sri-ananthaswamy", label: "Sri Ananthaswamy" },
    { path: "/community", label: "Swakulasali Community" },
    { path: "/sanghas", label: "Sanghas" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Swakulasali Samaj Logo" 
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-primary">Swakulasali Samaj</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <Link to="/" className="text-primary">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;