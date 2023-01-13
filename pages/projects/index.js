import React, { useState, useEffect } from "react";
import { MiniHero } from "../../components/common/MiniHero";
import { getNewProjects, getCategories } from "../../services";
import { MainLayout } from "../../components/layout/MainLayout";
import { ProjectGallery } from "../../components/projects/projectGallery";
import useTrans from "../../components/hooks/useTrans";

const Projects = ({ projects, categories }) => {
  const trans = useTrans();
  const [defaultNumCard, setDefaultNumCard] = useState(6);
  return (
    <div className="w-full">
      <MiniHero pageTitle={trans.projectpage.pagetitle} />

      <div className=" mx-auto w-[90%] max-w-[78.75rem] ">
        <ProjectGallery
          projects={projects}
          categories={categories}
          defaultNumCard={defaultNumCard}
        ></ProjectGallery>
      </div>
    </div>
  );
};
Projects.Layout = MainLayout;
export default Projects;
export async function getStaticProps({ locale }) {
  const projects = await getNewProjects({ locale });
  const categories = await getCategories({ locale });
  return {
    props: { projects, categories },
  };
}
