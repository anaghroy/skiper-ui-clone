import React from "react";
import AiInput from "../ui/ai-input";
import ButtonAdd from "./ButtonAdd";
import Image from "next/image";

const AiinputCard = () => {
  return (
    <>
      <div className="w-[61.5%] p-2 my-20 rounded-3xl shadow bg-white mx-auto">
        <div className="h-full p-6 bg-[#f4f4f4] shadow rounded-3xl mx-auto ">
          <ButtonAdd>Latest component</ButtonAdd>
          <h2 className="text-black/80 text-5xl font-bold mt-8">AI Input</h2>
          <h5 className="text-black/80 text-xl mb-8 mt-1.5">
            Seamless AI Chat Input box
          </h5>
          <AiInput />
        </div>
      </div>
      <Image
        src="https://skiper-ui.com/bg/bg_4.svg"
        alt="Decorative background"
        width={100} // or your image's width
        height={100} // or your image's height
        className="absolute right-24 top-[250rem] h-[70rem]"
      />
    </>
  );
};

export default AiinputCard;
