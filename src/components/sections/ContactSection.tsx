import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
}

const ContactSection = ({
  title = "Ota yhteyttä",
  subtitle = "Olemme täällä auttamassa oikeudellisissa tarpeissasi. Täytä alla oleva lomake, ja otamme sinuun yhteyttä pikaisesti.",
  address = "Itälahdenkatu 15-17, 4th floor, 00210 Helsinki, Finland",
  phone = "+358 40 545 6697",
  email = "info@oikeus.pro",
}: ContactSectionProps) => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-light tracking-tight mb-2">{title}</h2>
          <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-1 lg:col-span-2 border-0 shadow-sm bg-gray-50">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nimi</Label>
                    <Input
                      id="name"
                      placeholder="Nimesi"
                      className="bg-white border-gray-200 focus:border-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Sähköposti</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Sähköpostiosoitteesi"
                      className="bg-white border-gray-200 focus:border-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Puhelin</Label>
                  <Input
                    id="phone"
                    placeholder="Puhelinnumerosi"
                    className="bg-white border-gray-200 focus:border-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Viesti</Label>
                  <Textarea
                    id="message"
                    placeholder="Kuinka voimme auttaa sinua?"
                    className="min-h-[120px] bg-white border-gray-200 focus:border-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 transition-colors"
                >
                  Lähetä viesti
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-light">Yhteystiedot</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Osoite</p>
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Puhelin</p>
                    <p className="text-muted-foreground">{phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Sähköposti</p>
                    <p className="text-muted-foreground">{email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-ratio-1/1 h-48 bg-gray-100 rounded-md overflow-hidden">
              {/* Placeholder for map */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                <span className="text-sm">Karttanäkymä</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
