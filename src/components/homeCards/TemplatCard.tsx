import React from "react";
import MinimalCard, {
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "../ui/minimal-card";
import BadgeButton from "../ui/badge-button";
import "@number-flow/react";
import Counter1 from "./Counter1";
import Image from "next/image";

const TemplatCard = () => {
  const cards = [
    {
      title: "Landing Page",
      description:
        "Modern landing page template featuring Framer Motion animations, custom navigation components, and responsive design optimized for conversions.",
      src: "/images/video1.gif",
    },
    {
      title: "Manifest",
      description:
        "Vector embedding solution for building Perplexity-style AI applications with RAG retrieval, real-time source citations, and pgvector search functionality.",
      src: "/images/video2.gif",
    },
    {
      title: "Dev Portfolio",
      description:
        "Comprehensive SEO analysis tool with web crawling, performance testing, and AI-powered optimization recommendations for website improvement.",
      src: "/images/video3.gif",
    },
  ];
  return (
    <>
      <div className="w-[61.5%] p-2 my-20 rounded-3xl shadow bg-white mx-auto">
        <div className="h-full p-6 bg-[#f4f4f4] shadow rounded-3xl mx-auto ">
          <BadgeButton>Templates</BadgeButton>
          <div className="flex justify-between items-center ">
            {cards.map((card, index) => (
              <MinimalCard
                className="m-2 w-[460px] bg-[#4E4E4E] hover:bg-[#585656] shadow"
                key={index}
              >
                <MinimalCardImage
                  className="h-[250px]"
                  src={card.src}
                  alt={card.title}
                />
                <MinimalCardTitle className="text-white">
                  {card.title}
                </MinimalCardTitle>
                <MinimalCardDescription className="text-sm text-[#979090]">
                  {card.description}
                </MinimalCardDescription>
              </MinimalCard>
            ))}
          </div>
        </div>
      </div>
      <Counter1 />
      <Image
        src="https://skiper-ui.com/bg/bg_3.svg"
        alt="Decorative background"
        width={100} // or your image's width
        height={100} // or your image's height
        className="absolute left-24 top-[100rem] h-[45rem]"
      />
      <Image
        src="https://skiper-ui.com/bg/bg_4.svg"
        alt="Decorative background"
        width={100} // or your image's width
        height={100} // or your image's height
        className="absolute right-24 top-[80rem] h-[70rem]"
      />
    </>
  );
};

export default TemplatCard;
