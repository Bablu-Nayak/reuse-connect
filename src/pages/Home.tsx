import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Recycle, Heart, MapPin, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const stats = [
    { icon: Heart, value: "500+", label: "Items Donated" },
    { icon: MapPin, value: "50+", label: "NGO Partners" },
    { icon: Recycle, value: "1000+", label: "Happy Donors" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Give a Second Life to Things
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Donate your old items easily and make someone's day brighter. 
              Join our community of mindful givers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/donate">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  Donate Now
                </Button>
              </Link>
              <Link to="/ngo-finder">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Find NGOs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all animate-slide-up border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to make a difference</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "List Your Item", desc: "Upload photos and details of items you want to donate" },
              { step: "2", title: "Connect with NGOs", desc: "We match you with nearby NGOs that need your items" },
              { step: "3", title: "Schedule Pickup", desc: "Arrange a convenient time for item collection" },
            ].map((item, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-lg transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto max-w-4xl text-center text-primary-foreground">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of donors who are making the world a better place through sustainable giving.
          </p>
          <Link to="/donate">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl">
              Start Donating Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
