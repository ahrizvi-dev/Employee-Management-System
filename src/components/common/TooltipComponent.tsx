import React from "react";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip
} from "@/components/ui/tooltip";

const TooltipComponent = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;
