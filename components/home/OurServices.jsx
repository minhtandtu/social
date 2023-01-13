import Link from "next/link";
import React from "react";
import { AnimatedButton } from "../common/AnimatedButton";
import { LSServices } from "../common/LSServices";
import { RSServices } from "../common/RSServices";

import useTrans from "../hooks/useTrans";
export const OurServices = () => {
  const trans = useTrans();
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto w-[90%] max-w-[78.75rem] md:flex ">
        <div className="min-h-screen md:w-1/2">
          {/* Left Side Services */}
          <LSServices services={trans.services} />
        </div>
        <div className="md:mt-4 md:w-1/2 md:px-8">
          {/* Right Side Services */}
          <p
            className="mb-4 text-3xl font-bold md:mb-8 md:text-[3.25rem] md:leading-[4rem] md:tracking-[-0.01em]
          "
          >
            {trans.home.rightservice.bigtext}
          </p>
          <p className="text-sm font-normal md:text-base">
            {trans.home.rightservice.smalltext}
          </p>
          <div className="mt-8">
            <Link href="#">
              <AnimatedButton
                text={trans.button.letusseeyourproject}
              ></AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
