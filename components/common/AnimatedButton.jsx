import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
export const AnimatedButton = ({ text }) => {
  return (
    <div className="group relative inline-block h-10">
      <div className="absolute top-0 h-full w-10 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 shadow-xl transition-all duration-200 group-hover:w-full"></div>
      <div className="inline-flex px-4 py-2 ">
        <p className="text-sm font-semibold text-primary md:text-base">
          {text} &nbsp;
        </p>
        <ArrowUpRightIcon className="h-6 w-6 text-primary"></ArrowUpRightIcon>
      </div>
    </div>
  );
};
