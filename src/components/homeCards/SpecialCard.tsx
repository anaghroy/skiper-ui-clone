import React from "react";
import { SkiperCard } from "../ui/skiper-card";
import BadgeButton from "../ui/badge-button";
import feature1 from "/public/Images/feature1.webp";
import feature2 from "/public/Images/feature2.png";
import feature3 from "/public/Images/feature3.webp";
import feature4 from "/public/Images/feature4.webp";
import feature5 from "/public/Images/feature5.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
const SpecialCard = () => {
  return (
    <>
      <div className="my-20">
        <div className="w-[61.5%] mx-auto border-2 border-gray-500/10 dark:border-stone-700/50 rounded-3xl p-8 relative">
          <BadgeButton>Component Preview</BadgeButton>
          <h2 className="text-black/80 text-center text-6xl font-bold mt-8">
            Tailwind + Framer + React
          </h2>
          <h5 className="text-black/80 text-center text-4xl font-bold mb-8">
            Everything you need to ship
          </h5>
          <SkiperCard
            title="Component that pop"
            description="Make your app 🤌"
            step1img1Class={cn(
              "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
              "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
              "md:group-hover:translate-y-2"
            )}
            step1img2Class={cn(
              "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
              "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
              "md:group-hover:-translate-y-6 "
            )}
            step2img1Class={cn(
              "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
              "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
              "md:group-hover:translate-y-2"
            )}
            step2img2Class={cn(
              "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
              "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
              "md:group-hover:-translate-y-6"
            )}
            step3imgClass={cn(
              "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
              "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
            )}
            step4imgClass={cn(
              "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
              "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
            )}
            image={{
              step1light1: feature1,
              step1light2: feature2,
              step2light1: feature3,
              step2light2: feature4,
              step3light: feature5,
              step4light: feature1,
              alt: "Something",
            }}
          />
        </div>
      </div>
      <Image
        className="absolute left-24 top-[150rem] h-[700px]"
        src="https://skiper-ui.com/bg/bg_3.svg"
        alt="Decorative background"
        width={100} // or your image's width
        height={100} // or your image's height
      />
      <Image
        className="absolute right-24 top-[150rem] h-[70rem]"
        src="https://skiper-ui.com/bg/bg_4.svg"
        alt="Decorative background"
        width={100} // or your image's width
        height={100} // or your image's height
      />
    </>
  );
};

export default SpecialCard;
