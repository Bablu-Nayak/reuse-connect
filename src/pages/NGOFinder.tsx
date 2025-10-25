import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NGOFinder = () => {
  const [searchRadius, setSearchRadius] = useState("5");

  // Mock NGO data - in a real app, this would come from an API
  const ngos = [
    {
      name: "Hope Foundation",
      category: "General Donations",
      distance: "2.3 km",
      address: "123 Charity Lane, Downtown",
      phone: "+1 234-567-8900",
      email: "contact@hopefoundation.org",
    },
    {
      name: "Books for All",
      category: "Books & Education",
      distance: "3.7 km",
      address: "456 Reading Road, East Side",
      phone: "+1 234-567-8901",
      email: "info@booksforall.org",
    },
    {
      name: "Clothing Circle",
      category: "Clothes & Textiles",
      distance: "4.1 km",
      address: "789 Fashion Ave, West End",
      phone: "+1 234-567-8902",
      email: "hello@clothingcircle.org",
    },
    {
      name: "Furniture Helpers",
      category: "Furniture & Household",
      distance: "5.8 km",
      address: "321 Home Street, North District",
      phone: "+1 234-567-8903",
      email: "support@furniturehelpers.org",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Find Nearby NGOs</h1>
            <p className="text-xl text-muted-foreground">
              Discover verified organizations ready to receive your donations
            </p>
          </div>

          {/* Map Placeholder */}
          <Card className="p-4 mb-8 animate-scale-in">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="text-center z-10">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold mb-2">Interactive Map Coming Soon</p>
                <p className="text-muted-foreground">
                  Google Maps integration will show NGO locations in real-time
                </p>
              </div>
            </div>
          </Card>

          {/* Search Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                type="number"
                placeholder="Search radius (km)"
                value={searchRadius}
                onChange={(e) => setSearchRadius(e.target.value)}
              />
            </div>
            <Button className="sm:w-auto">
              <Navigation className="h-4 w-4 mr-2" />
              Update Search Area
            </Button>
          </div>

          {/* NGO List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">NGOs in Your Area</h2>
            <div className="grid gap-6">
              {ngos.map((ngo, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-lg transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{ngo.name}</h3>
                          <Badge variant="secondary" className="mb-2">
                            {ngo.category}
                          </Badge>
                          <p className="text-sm text-muted-foreground">{ngo.distance} away</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground ml-11">
                        <p className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {ngo.address}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {ngo.phone}
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {ngo.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 md:w-48">
                      <Button className="w-full">
                        Request Pickup
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NGOFinder;
