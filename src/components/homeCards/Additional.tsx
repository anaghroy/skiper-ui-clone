import React from "react";
import MinimalCard, {
  MinimalCardDescription,
  MinimalCardTitle,
} from "../ui/minimal-card";
import ButtonAdd from "./ButtonAdd";
const Additional = () => {
  const cards = [
    {
      title: "Free AI Marketing",
      description:
        "An AI Cofounder that knows your brand. Start creating marketing copy that converts.",
      src: "/images/video1.gif",
    },
    {
      title: "Free SEO Improvement Tool",
      description:
        "Quickly evaluate your website's SEO performance for free. AI improvements + Open graph preview.",
      src: "/images/video2.gif",
    },
    {
      title: "Full Stack Shadcn Templates",
      description:
        "Comprehensive Next.js + Supabase templates built with Tailwind CSS, Skiper components, and shadcn.",
      src: "/images/video3.gif",
    },
  ];
  return (
    <>
      <div className="w-[61.5%] p-2 my-20 rounded-3xl shadow bg-white mx-auto">
        <div className="h-full p-6 bg-[#f4f4f4] shadow rounded-3xl mx-auto ">
          <ButtonAdd>Additional goods</ButtonAdd>
          <div className="flex justify-between items-center ">
            {cards.map((card, index) => (
              <MinimalCard
                className="m-2 w-[460px] bg-white hover:bg-[#dddada] shadow"
                key={index}
              >
                <MinimalCardTitle className="text-gray-800 mb-1">
                  {card.title}
                </MinimalCardTitle>
                <MinimalCardDescription className="text-sm text-[#858585]">
                  {card.description}
                </MinimalCardDescription>
              </MinimalCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Additional;
