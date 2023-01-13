import React from "react";
import useTrans from "../hooks/useTrans";
import { FourShape } from "../common/FourShape";
export const OurMission = () => {
  const trans = useTrans();
  return (
    <div className="">
      <div className="mx-auto block h-full md:flex">
        <div className="grid place-content-center md:w-2/3 md:pr-16">
          <p className="mb-8 text-3xl font-bold md:mb-8 md:text-[3.25rem] md:leading-[4rem] md:tracking-[-0.01em]">
            {trans.aboutpage.mission.bigtext}
          </p>
          <p className="text-sm font-normal md:text-base">
            {trans.aboutpage.mission.smalltext}
          </p>
        </div>
        <div className="py-10 md:w-1/3">
          <FourShape />
        </div>
      </div>
    </div>
  );
};
