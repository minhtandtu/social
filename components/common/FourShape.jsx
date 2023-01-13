import React from "react";
import Image from "next/image";
export const FourShape = () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        {/* Rectangle */}
        <div className="relative">
          <div className="aspect-[1/1.618] w-full max-w-[11.063rem] rounded-[3rem] bg-gradient-to-r from-primary to-secondary"></div>
          <div className="absolute top-1 -left-1 aspect-[1/1.618] w-full max-w-[11.063rem] overflow-hidden rounded-[3rem] border  border-gray-100">
            <Image
              src="/image/image.png"
              height={268}
              width={177}
              className="h-full w-full object-cover"
              alt="Our Missions are to boots your business"
            ></Image>
          </div>
        </div>
        {/* Circle */}
        <div className="relative mt-[3.75rem]">
          <div className="aspect-square max-w-[11.063rem] rounded-full bg-gradient-to-br from-primary  to-secondary "></div>
          <div className="absolute top-1 left-1 aspect-square w-full max-w-[11.063rem] rounded-full border border-purple-500"></div>
        </div>
      </div>
      <div className="w-1/2 pl-2">
        {/* Circle */}
        <div className="relative ">
          <div className="aspect-square max-w-[11.063rem] rounded-full bg-gradient-to-br from-primary  to-secondary "></div>
          <div className="absolute top-1 left-1 aspect-square w-full max-w-[11.063rem] rounded-full border border-purple-500"></div>
        </div>
        {/* Rectangle */}
        <div className="relative mt-[3.75rem]">
          <div className="bd aspect-[1/1.618] w-full max-w-[11.063rem] rounded-[3rem] bg-gradient-to-r from-primary to-secondary"></div>
          <div className="bd absolute top-1 -left-1 aspect-[1/1.618] w-full max-w-[11.063rem] overflow-hidden rounded-[3rem] border  border-gray-100">
            <Image
              src="/image/image2.png"
              height={268}
              width={177}
              className="h-full w-full object-cover"
              alt="Our Missions are to boots your business"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
