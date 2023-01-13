import Image from "next/image";
import React from "react";
import useTrans from "../hooks/useTrans";
export const StepsToStart = ({ texts }) => {
  const trans = useTrans();
  return (
    <div className="relative flex min-h-[824px] w-full flex-col items-center">
      <div className="absolute inset-y-0 z-0 w-full">
        <Image
          src="/bg_steps.svg"
          alt="background steps"
          width={1440}
          height={724}
          className="h-full w-full object-cover"
        ></Image>
      </div>
      <div className="z-10 w-full py-60 md:py-36">
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
        <div className="relative mx-auto hidden w-[90%] max-w-[78.75rem] md:block">
          {/* semibackground */}
          <div className="absolute top-4 -left-4 -z-10 h-[246px] w-full rounded-[48px] bg-gradient-to-r from-primary to-secondary"></div>

          {/* illustration Image */}
          <div className="absolute top-0 -z-10  h-[246px] max-w-[78.75rem] rounded-[48px] bg-white ">
            <Image
              src="/illustration_group.png"
              width={1260}
              height={246}
              className="h-full w-auto"
              alt="steps to start"
            ></Image>
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
  );
};
