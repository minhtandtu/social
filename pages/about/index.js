import React from "react";
import { MiniHero } from "../../components/common/MiniHero";
import { OurMission } from "../../components/aboutus/OurMission";
import { OurTeam } from "../../components/aboutus/OurTeam";
import { StepsToStart } from "../../components/aboutus/StepsToStart";
import useTrans from "../../components/hooks/useTrans";
import { MainLayout } from "../../components/layout/MainLayout";
import { getMember } from "../../services";
const AboutSocialMedia = ({ members }) => {
  const trans = useTrans();
  return (
    <div className="bg-white ">
      <div className="">
        <MiniHero pageTitle={trans.aboutpage.pagetitle} />
      </div>
      {/* Our mission */}
      <div className="mx-auto w-[90%] max-w-[78.75rem]">
        <OurMission />
      </div>
      <StepsToStart texts={trans} />
      <OurTeam members={members} />
    </div>
  );
};
AboutSocialMedia.Layout = MainLayout;

export default AboutSocialMedia;

export async function getStaticProps({ locale }) {
  const members = await getMember({ locale });

  return {
    props: { members },
  };
}
