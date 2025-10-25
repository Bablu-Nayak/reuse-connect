import { Card } from "@/components/ui/card";
import { Recycle, Users, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Recycle,
      title: "Reuse",
      description: "We believe every item deserves a second chance. Reduce waste by giving items new homes.",
    },
    {
      icon: Users,
      title: "Help",
      description: "Connect donors with those in need through our trusted NGO network.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promote environmental consciousness through responsible consumption and donation.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">About ReUseIt</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging the gap between excess and need through technology and compassion.
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-4 text-destructive">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every year, millions of usable items end up in landfills while countless people struggle 
                to access basic necessities. Clothes, books, furniture, and other goods that could make 
                a real difference sit unused in homes and storage units.
              </p>
            </Card>

            <Card className="p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                ReUseIt creates a seamless connection between generous donors and verified NGOs. 
                Our platform makes it easy to list items, find nearby organizations, and arrange 
                pickups – transforming potential waste into meaningful help.
              </p>
            </Card>
          </div>

          {/* Mission Statement */}
          <div className="bg-muted rounded-2xl p-12 mb-16 text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Promoting reuse, sustainability, and social good through technology. 
              We empower communities to reduce waste, help those in need, and build 
              a more sustainable future – one donation at a time.
            </p>
          </div>

          {/* Our Vision - Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Our Vision</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="p-8 text-center hover:shadow-lg transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact */}
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-none animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-6">Making Real Impact</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Through ReUseIt, we're not just moving items – we're building connections, 
              reducing environmental impact, and creating positive change. Every donation 
              tells a story of generosity and hope, contributing to a more sustainable 
              and equitable world.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
