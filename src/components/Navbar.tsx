import { Link, useLocation } from "react-router-dom";
import { Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/features", label: "Features" },
    { path: "/donate", label: "Donate" },
    { path: "/ngo-finder", label: "Find NGOs" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary rounded-xl group-hover:scale-110 transition-transform">
              <Recycle className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">ReUseIt</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button 
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className="transition-all"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <Link to="/donate" className="hidden md:block">
            <Button variant="default" className="font-semibold">
              Donate Now
            </Button>
          </Link>

          <Link to="/donate" className="md:hidden">
            <Button size="sm" variant="default">
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
