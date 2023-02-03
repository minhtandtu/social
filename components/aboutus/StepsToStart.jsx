import Image from "next/image";
import React from "react";
import useTrans from "../hooks/useTrans";
export const StepsToStart = ({ texts }) => {
  const trans = useTrans();
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="z-0 w-full  ">
        <img
          src="/bg_steps.svg"
          alt="background steps"
          className="h-full min-h-[944px] w-full object-cover"
        ></img>
      </div>
      <div className="absolute inset-y-0 z-10 flex w-full items-center justify-center">
        <div className="-mt-16">
          {/* Texts BIG and small */}
          <div className="w-full px-4 ">
            <div className="mx-auto mb-10 max-w-[58.75rem] text-center">
              <p className="mb-4 text-3xl text-white md:text-4xl">
                {texts.aboutpage.stepstostart.bigtext}
              </p>
              <p className="text-sm text-white md:text-base">
                {texts.aboutpage.stepstostart.smalltext}
              </p>
            </div>
          </div>
          <div className=" relative mx-auto hidden w-[90%] max-w-[78.75rem] md:block">
            {/* semibackground */}
            <div className="absolute top-4 -left-4 -z-10 h-[246px] w-full rounded-[48px] bg-gradient-to-r from-primary to-secondary"></div>

            {/* illustration Image */}
            <div className="absolute top-0 -z-10  h-[246px] max-w-[78.75rem] rounded-[48px] bg-white ">
              <img
                src="/illustration_group.png"
                className="h-full w-auto object-cover"
                alt="steps to start"
              ></img>
            </div>
            {/* O --->O---->O */}
            <div className="z-20 items-center justify-center pt-20 md:flex">
              <div className=" flex flex-col items-center justify-center">
                <div className="grid aspect-square h-16 place-content-center rounded-full border border-[#EF9DAF] bg-[#FFEAE4] md:h-24">
                  <p className="text-base font-bold text-[#E55C79]">01</p>
                </div>
                <p className="whitespace-nowrap text-xl font-bold  md:text-[32px]">
                  {trans.aboutpage.stepstostart.sendemail}
                </p>
              </div>
              <div className="h-full">
                <Image
                  src="/muiten1.svg"
                  alt="Steps to start"
                  width={70}
                  height={12}
                  className="mx-auto mb-4 h-10 rotate-90 md:w-full md:rotate-0"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="grid aspect-square h-16 place-content-center rounded-full border border-[#EF9DAF] bg-[#FFEAE4] md:h-24">
                  <p className="text-base font-bold text-[#E55C79]">02</p>
                </div>
                <p className="whitespace-nowrap text-xl font-bold md:text-[32px]">
                  {trans.aboutpage.stepstostart.getconfirmation}
                </p>
              </div>
              <div className="h-full">
                <Image
                  src="/muiten2.svg"
                  alt="Steps to start"
                  width={70}
                  height={12}
                  className="mx-auto mb-4 h-10 rotate-90 md:w-full md:rotate-0"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="grid aspect-square h-16 place-content-center rounded-full border border-[#EF9DAF] bg-[#FFEAE4] md:h-24">
                  <p className="text-base font-bold text-[#E55C79]">03</p>
                </div>
                <p className="whitespace-nowrap text-xl font-bold md:text-[32px]">
                  {trans.aboutpage.stepstostart.begin}
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center md:hidden">
            <div className="absolute inset-y-0 -z-10 mt-4 -ml-4 h-[416px] w-[328px] rounded-3xl bg-gradient-to-r from-primary to-secondary "></div>
            <div className="absolute inset-y-0 -z-10 h-[416px] w-[328px] rounded-3xl bg-[#FFF4F2] "></div>

            <Image
              src="/illulation.png"
              alt="steps to start a project "
              width={328}
              height={416}
              className=""
            ></Image>
            <div className="absolute top-0 z-20 flex h-full flex-col justify-between py-8 md:flex">
              <div className=" flex flex-col items-center justify-center">
                <div className="grid aspect-square h-16 place-content-center rounded-full border border-[#EF9DAF] bg-[#FFEAE4] md:h-24">
                  <p className="text-base font-bold text-[#E55C79]">01</p>
                </div>
                <p className="whitespace-nowrap text-xl font-bold  md:text-[32px]">
                  {trans.aboutpage.stepstostart.sendemail}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center ">
                <div className="grid aspect-square h-16 place-content-center rounded-full border border-[#EF9DAF] bg-[#FFEAE4] md:h-24">
                  <p className="text-base font-bold text-[#E55C79]">02</p>
                </div>
                <p className="whitespace-nowrap text-xl font-bold md:text-[32px]">
                  {trans.aboutpage.stepstostart.getconfirmation}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="grid aspect-square h-16 place-content-center rounded-full border border-[#EF9DAF] bg-[#FFEAE4] md:h-24">
                  <p className="text-base font-bold text-[#E55C79]">03</p>
                </div>
                <p className="whitespace-nowrap text-xl font-bold md:text-[32px]">
                  {trans.aboutpage.stepstostart.begin}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
