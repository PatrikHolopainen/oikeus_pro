import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "KARI UOTI",
  subtitle = "Asennetta ja asiantuntemusta vuodesta 1986. Oikeustieteen tohtori, MBA.",
  ctaText = "Ota yhteyttä",
  backgroundImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section className="relative h-[700px] w-full bg-background overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wider mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-100 max-w-2xl mb-10 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 px-8 py-6 text-base"
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
