import React from "react";
import { IceCreamCone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
type ButtonAddProps = {
  children: ReactNode;
};

const BadgeButton = ({ children }: ButtonAddProps) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/10 bg-white text-lg md:left-6"
    >
      <IceCreamCone
        size={38}
        className="fill-[#A3C0E0] stroke-2 text-neutral-800"
      />
      {children}
    </Badge>
  );
};

export default BadgeButton;
