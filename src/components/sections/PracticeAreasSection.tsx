import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Scale,
  FileText,
  Briefcase,
  Gavel,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface PracticeAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PracticeArea = ({ icon, title, description }: PracticeAreaProps) => {
  return (
    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="text-neutral-700 mb-3">{icon}</div>
        <CardTitle className="text-xl font-medium text-neutral-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-neutral-600 mb-4">
          {description}
        </CardDescription>
        <Button
          variant="ghost"
          className="p-0 h-auto text-neutral-700 hover:text-neutral-900 font-medium group"
        >
          Lue lisää
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      icon: <Gavel className="h-8 w-8" />,
      title: "Riidanratkaisu",
      description:
        "Asiantuntevaa edustusta monimutkaisten oikeudellisten riitojen ratkaisemisessa neuvottelun, sovittelun ja oikeudenkäynnin avulla.",
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Oikeudenkäynnit",
      description:
        "Strategista edustusta siviili- ja rikosasioissa yleisissä tuomioistuimissa ja välimiesmenettelyssä.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Sopimusoikeus",
      description:
        "Kattavaa sopimusten laatimista, tarkistusta ja neuvottelua yrityksille ja yksityishenkilöille.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Yhtiöoikeus",
      description:
        "Oikeudellista neuvontaa yrityksille hallintoon, säännösten noudattamiseen ja yritysjärjestelyihin liittyen.",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Perheoikeus",
      description:
        "Myötätuntoista ja strategista edustusta perheoikeudellisissa asioissa.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Kansainväliset tapaukset",
      description:
        "Oikeudellisten asioiden hoitaminen rajojen yli sekä suomalaisille että kansainvälisille asiakkaille.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-neutral-50" id="practice-areas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-800 mb-4">
            Toimeksiantomme
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Emme tee kaikkea - hoidamme vain tapauksia, joissa olemme
            erinomaisia. Palvelemme sekä yksityishenkilöitä että yrityksiä,
            mukaan lukien kuntia ja poliittisia puolueita. Alla on esimerkkejä
            osaamisalueistamme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <PracticeArea
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
