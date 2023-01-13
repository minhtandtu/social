import React from "react";
import { MemberImage } from "./MemberImage";

export const MemberImages = ({ members }) => {
  return (
    <div className="w-full flex-col items-center justify-center space-y-4 md:flex md:space-y-8">
      <div className="space-y-10 space-x-4 md:flex md:space-y-0 md:space-x-8">
        <MemberImage member={members[0]}></MemberImage>
        <MemberImage member={members[1]}></MemberImage>
      </div>
      <div className="space-y-10 space-x-4 md:flex md:space-y-0 md:space-x-8">
        <MemberImage member={members[2]}></MemberImage>
        <MemberImage member={members[3]}></MemberImage>
        <MemberImage member={members[4]}></MemberImage>
      </div>
      <div className="space-y-10 space-x-4 md:flex md:space-y-0 md:space-x-8">
        <MemberImage member={members[5]}></MemberImage>
        <MemberImage member={members[6]}></MemberImage>
      </div>
    </div>
  );
};
