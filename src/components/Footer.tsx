import { Link } from "react-router-dom";
import { Recycle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/features", label: "Features" },
    { path: "/donate", label: "Donate" },
    { path: "/ngo-finder", label: "Find NGOs" },
    { path: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary rounded-xl">
                <Recycle className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ReUseIt</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Making the world better, one donation at a time. Join us in promoting reuse, sustainability, and social good.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 ReUseIt – Made with 💚 for a better world.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
