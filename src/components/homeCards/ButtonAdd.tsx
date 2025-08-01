import React, { ReactNode } from "react";
import { Sticker } from "lucide-react";
import { Badge } from "@/components/ui/badge";
type ButtonAddProps = {
  children: ReactNode;
};
const ButtonAdd = ({ children }: ButtonAddProps) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/10 bg-white text-lg md:left-6"
    >
      <Sticker className="mr-2 fill-[#A3C0E0] stroke-1 text-neutral-800" />{" "}
      {children}
    </Badge>
  );
};

export default ButtonAdd;
