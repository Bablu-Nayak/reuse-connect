import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";

const donateSchema = z.object({
  itemName: z.string()
    .trim()
    .min(3, "Item name must be at least 3 characters")
    .max(100, "Item name must be less than 100 characters"),
  category: z.enum(["clothes", "books", "furniture", "electronics", "toys", "other"], {
    errorMap: () => ({ message: "Please select a category" })
  }),
  description: z.string()
    .trim()
    .max(1000, "Description must be less than 1000 characters")
    .optional(),
  address: z.string()
    .trim()
    .min(10, "Please provide a complete address")
    .max(500, "Address is too long"),
  contact: z.string()
    .trim()
    .regex(/^([\w\.-]+@[\w\.-]+\.\w+|\+?[\d\s\-\(\)]{10,})$/, "Must be a valid email or phone number")
});

const Donate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    description: "",
    address: "",
    contact: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate with zod schema
    const result = donateSchema.safeParse(formData);
    
    if (!result.success) {
      // Extract errors from zod validation
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }

    // Clear errors on successful validation
    setErrors({});

    toast({
      title: "Donation Listed Successfully! 🎉",
      description: "Your item has been listed. Nearby NGOs will be notified shortly.",
    });

    // Reset form
    setFormData({
      itemName: "",
      category: "",
      description: "",
      address: "",
      contact: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Donate an Item</h1>
            <p className="text-xl text-muted-foreground">
              List your item and connect with NGOs who need it
            </p>
          </div>

          {/* Form */}
          <Card className="p-8 md:p-12 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Item Name */}
              <div>
                <Label htmlFor="itemName" className="text-base">Item Name *</Label>
                <Input
                  id="itemName"
                  placeholder="e.g., Winter Jacket, Children's Books"
                  value={formData.itemName}
                  onChange={(e) => {
                    setFormData({ ...formData, itemName: e.target.value });
                    if (errors.itemName) setErrors({ ...errors, itemName: "" });
                  }}
                  className="mt-2"
                />
                {errors.itemName && (
                  <p className="text-sm text-destructive mt-1">{errors.itemName}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <Label htmlFor="category" className="text-base">Category *</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => {
                    setFormData({ ...formData, category: value });
                    if (errors.category) setErrors({ ...errors, category: "" });
                  }}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clothes">Clothes</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="toys">Toys</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-sm text-destructive mt-1">{errors.category}</p>
                )}
              </div>

              {/* Photo Upload */}
              <div>
                <Label htmlFor="photo" className="text-base">Item Photo</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                  <Input id="photo" type="file" className="hidden" accept="image/*" />
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-base">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide details about the item's condition, size, etc."
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    if (errors.description) setErrors({ ...errors, description: "" });
                  }}
                  className="mt-2 min-h-32"
                />
                {errors.description && (
                  <p className="text-sm text-destructive mt-1">{errors.description}</p>
                )}
              </div>

              {/* Pickup Address */}
              <div>
                <Label htmlFor="address" className="text-base">Pickup Address *</Label>
                <Textarea
                  id="address"
                  placeholder="Enter your full address for item pickup"
                  value={formData.address}
                  onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                    if (errors.address) setErrors({ ...errors, address: "" });
                  }}
                  className="mt-2"
                />
                {errors.address && (
                  <p className="text-sm text-destructive mt-1">{errors.address}</p>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <Label htmlFor="contact" className="text-base">Contact Information *</Label>
                <Input
                  id="contact"
                  placeholder="Phone number or email"
                  value={formData.contact}
                  onChange={(e) => {
                    setFormData({ ...formData, contact: e.target.value });
                    if (errors.contact) setErrors({ ...errors, contact: "" });
                  }}
                  className="mt-2"
                />
                {errors.contact && (
                  <p className="text-sm text-destructive mt-1">{errors.contact}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full text-lg py-6">
                List Item for Donation
              </Button>
            </form>
          </Card>

          {/* Info Box */}
          <Card className="mt-8 p-6 bg-muted/50 border-none">
            <p className="text-sm text-muted-foreground text-center">
              After submission, nearby NGOs will be notified about your donation. 
              You'll receive confirmation and pickup details within 24 hours.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
