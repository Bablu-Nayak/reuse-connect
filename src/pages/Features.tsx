import { Card } from "@/components/ui/card";
import { Upload, MapPin, Calendar, Bell, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Easy Item Upload",
      description: "Upload photos and descriptions of items you want to donate in just a few clicks. Support for multiple categories including clothes, books, and furniture.",
    },
    {
      icon: MapPin,
      title: "Nearby NGO Finder",
      description: "Discover verified NGOs in your area using our integrated map. Filter by distance and category to find the perfect match for your donation.",
    },
    {
      icon: Calendar,
      title: "Flexible Pickup Scheduling",
      description: "Choose a convenient time for item collection. Coordinate directly with NGOs to arrange pickup that fits your schedule.",
    },
    {
      icon: Bell,
      title: "Real-Time Updates",
      description: "Stay informed with instant notifications about your donations. Track pickup status and receive confirmation when items are received.",
    },
    {
      icon: Shield,
      title: "Verified NGO Network",
      description: "All NGOs on our platform are thoroughly verified. Donate with confidence knowing your items reach legitimate organizations.",
    },
    {
      icon: Zap,
      title: "Quick & Seamless",
      description: "From listing to pickup, the entire process is streamlined. Make a difference without the hassle – it's that simple.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Platform Features</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to donate effortlessly and make a lasting impact.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-lg transition-all animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* How It Benefits Section */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <Card className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-none animate-slide-up">
              <h2 className="text-3xl font-bold mb-4">For Donors</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Declutter your space while helping others</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Reduce environmental impact through reuse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Get tax receipts for your donations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Track the impact of your generosity</span>
                </li>
              </ul>
            </Card>

            <Card className="p-10 bg-gradient-to-br from-accent/5 to-accent/10 border-none animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl font-bold mb-4">For NGOs</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2" />
                  <span>Access a steady stream of donations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2" />
                  <span>Connect with local donors easily</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2" />
                  <span>Manage donations efficiently</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2" />
                  <span>Expand your reach and impact</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
