import React from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import PracticeAreasSection from "./sections/PracticeAreasSection";
import ContactSection from "./sections/ContactSection";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";

const testimonials = [
  {
    id: 1,
    name: "Asiakkaan kokemus",
    role: "Yritysasiakas",
    content:
      "Tietoa löytyy kirjoista, kokemus tulee elämästä, mutta asennetta ei voi ostaa hyllyltä. Jos olisin valitsemassa asianajajaa, haluaisin nähdä, kokea ja tuntea, että he eivät vain tee työtään.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Client1",
  },
  {
    id: 2,
    name: "Asiakkaan näkökulma",
    role: "Yksityisasiakas",
    content:
      "Vihaan häviämistä. Se ei tarkoita, että etsisin helppoja tapauksia. Etsin haastavimpia tapauksia, jotka sytyttävät ammatillisen kunnianhimoni. Ne voivat olla isoja tai pieniä - pääasia on, että niissä on jotain, minkä puolesta taistella.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Client2",
  },
  {
    id: 3,
    name: "Asiakkaan kokemus",
    role: "Kunta-asiakas",
    content:
      "Jos sinulla on tällainen tapaus, ota yhteyttä ja katsotaan, onko meillä yhteinen haaste edessä, jotain, minkä puolesta taistella - ja minulle henkilökohtaisesti yksi syy lisää herätä motivoituneena uuteen työpäivään.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Client3",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Kari Uoti",
    role: "Osakas",
    specialty: "Oikeustieteen tohtori, MBA",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=KariUoti",
  },
  {
    id: 2,
    name: "Petter Kavonius",
    role: "Osakas",
    specialty: "Oikeustieteen tohtori",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PetterKavonius",
  },
  {
    id: 3,
    name: "Henrik Pirhonen",
    role: "Osakas",
    specialty: "Oikeustieteen maisteri",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HenrikPirhonen",
  },
  {
    id: 4,
    name: "Janita Jauhiainen",
    role: "Lakimies",
    specialty: "Oikeustieteen maisteri",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JanitaJauhiainen",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />

        <section
          id="about"
          className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
                Asennetta ja asiantuntemusta vuodesta 1986
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tietoa löytyy kirjoista, kokemus tulee elämästä, mutta asennetta
                ei voi ostaa hyllyltä. Ei edes maailman parhaiden yliopistojen
                isoilla rahoilla. Joko sitä on tai ei ole. Jos olisin
                valitsemassa asianajajaa, haluaisin nähdä, kokea ja tuntea, että
                he eivät vain tee työtään.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Hoidamme tapauksia sekä yksityishenkilöille että yrityksille.
                Asiakkaisiimme kuuluu kuntia ja poliittisia puolueita. Hoidamme
                myös tapauksia ulkomailla, ja meillä on sekä suomalaisia että
                kansainvälisiä asiakkaita.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ydinosaamisemme on riidanratkaisussa, oikeudenkäynneissä
                siviili- ja rikosasioissa, sekä yleisissä tuomioistuimissa että
                välimiesmenettelyssä. Lisäksi hoidamme liiketoiminta- ja
                yksityisasioita sopimuksista perheoikeudellisiin kysymyksiin.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-ratio-1/1 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80"
                  alt="Law office interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gray-50 rounded-lg z-[-1]"></div>
            </div>
          </div>
        </section>

        <PracticeAreasSection />

        <section id="team" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-2 text-center text-gray-900">
              Tiimimme
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Tapaa kokeneet lakimiehemme, jotka ovat omistautuneet tarjoamaan
              poikkeuksellisia oikeudellisia palveluja.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-medium text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mb-1">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-2 text-center text-gray-900">
            Filosofiamme
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Hyvän lakimiehen ominaisuudet - ja juuri tässä järjestyksessä.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-light mb-4 text-white">
                Lakiasiaintoimisto Kari Uoti Oy
              </h3>
              <p className="text-sm">
                Asennetta ja asiantuntemusta vuodesta 1986.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4 text-white">
                Yhteystiedot
              </h4>
              <p className="text-sm mb-2">Itälahdenkatu 15-17, 4. kerros</p>
              <p className="text-sm mb-2">00210 Helsinki, Suomi</p>
              <p className="text-sm mb-2">+358 40 545 6697</p>
              <p className="text-sm">info@oikeus.pro</p>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4 text-white">Pikalinkit</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Tietoa meistä
                  </a>
                </li>
                <li>
                  <a
                    href="#practice-areas"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Toimeksiannot
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Tiimimme
                  </a>
                </li>
                <li>
                  <a
                    href="#philosophy"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Filosofia
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Yhteystiedot
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-6" />
          <div className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Nordic Law Firm. Kaikki oikeudet
            pidätetään.
          </div>
        </div>
      </footer>
    </div>
  );
}
