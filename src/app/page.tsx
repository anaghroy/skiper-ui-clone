"use client";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import HeroContent from "@/components/landingPage/HeroContent";
import CardCarouselParent from "@/components/homeCards/CardCarouselParent";
import TemplatCard from "@/components/homeCards/TemplatCard";
import SpecialCard from "@/components/homeCards/SpecialCard";
import AiinputCard from "@/components/homeCards/AiinputCard";
import ThemeChange from "@/components/homeCards/ThemeChange";
import Additional from "@/components/homeCards/Additional";
import Footer from "@/components/homeCards/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <CardCarouselParent />
      <TemplatCard />
      <Additional />
      <SpecialCard />
      <AiinputCard />
      <ThemeChange />
      <Footer />
    </div>
  );
};

export default page;
