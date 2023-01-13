import Image from "next/image";
import React from "react";

export const MemberImage = ({ member }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={member.image.url}
        height={290}
        width={300}
        className="h-full w-full object-cover"
        alt="Social members"
      ></Image>
      <p className="text-xl font-semibold md:text-2xl">{member.name}</p>
      <p className="text-base font-normal md:text-lg">{member.position}</p>
    </div>
  );
};
