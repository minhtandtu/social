import React from "react";
import { MemberImages } from "../common/MemberImages";
import useTrans from "../hooks/useTrans";
export const OurTeam = ({ members }) => {
  const trans = useTrans();
  return (
    <div className="mt-8 bg-[url('/decoration_about.svg')] py-24 px-4">
      <div className="flex h-full flex-col items-center ">
        <p className="mb-8 max-w-[230px] text-[32px] font-bold md:mb-10 md:max-w-none md:text-[52px]">
          {trans.aboutpage.members.title}
        </p>
        <MemberImages members={members} />
      </div>
    </div>
  );
};
