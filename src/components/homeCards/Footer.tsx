import React from "react";
import AnimatedNumberCountdown from "../ui/animated-number-countdown";
import { SparklesIcon } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="relative w-[61.5%] mx-auto my-20 rounded-3xl bg-[#FF4017] text-white p-10 shadow-lg text-center overflow-hidden min-h-[400px]">
        <h4 className="text-2xl font-medium mt-6">
          Bringing simplicity to the future
        </h4>

        <button className="inline-flex items-center gap-2 px-6 py-2 border border-white rounded-full bg-[#FF4017] text-white cursor-pointer transition-all mt-15">
          <SparklesIcon className="w-5 h-5 fill-white stroke-white" />
          <span>| New component in - </span>
          <AnimatedNumberCountdown endDate={new Date("2025-12-31")} />
          <span className="ml-2">→</span>
        </button>

        <div className="absolute bottom-0 left-0 top-75 w-full">
          <h1 className="text-[11rem] font-bold text-white text-stroke text-stroke-white leading-none select-none">
            skiner/ui
          </h1>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
