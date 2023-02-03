import React from "react";
import useTrans from "../hooks/useTrans";
import { FourShape } from "../common/FourShape";
import { AnimatedButton } from "../common/AnimatedButton";
export const OurMission = () => {
  const trans = useTrans();
  return (
    <div className="">
      <div className="relative mx-auto block h-full md:flex">
        <div className="grid place-content-center md:w-2/3 md:pr-16">
          <p className="mb-8 text-3xl font-bold md:mb-8 md:text-[3.25rem] md:leading-[4rem] md:tracking-[-0.01em]">
            {trans.aboutpage.mission.bigtext}
          </p>
          <p className="text-sm font-normal md:text-base">
            {trans.aboutpage.mission.smalltext}
          </p>
          <div className="mt-8 w-auto">
            <AnimatedButton text="CHO CHÚNG TÔI BIẾT DỰ ÁN CỦA BẠN"></AnimatedButton>
          </div>
        </div>
        <div className="py-10 md:w-1/3">
          <FourShape />
        </div>
        <div className="float-right mt-56">
          <img src="/icon/Ellipse31.png" className="h-14"></img>
        </div>
        <div className="absolute top-20 -left-12 -z-10 ">
          <img src="/icon/Ellipse31.png" className="h-[89px]"></img>
        </div>
        <div className="absolute top-20 left-[600px] -z-10 ">
          <img src="/icon/Ellipse30.png" className="h-[58px] "></img>
        </div>
        <div className="absolute top-96 left-[760px]  ">
          <img src="/icon/Ellipse30.png" className="h-[33px] "></img>
        </div>
        <div className="absolute top-[530px] left-32 -z-10 ">
          <img src="/icon/Ellipse31.png" className="h-[89px]"></img>
        </div>
      </div>
    </div>
  );
};
