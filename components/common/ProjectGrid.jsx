import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = ({ projects, numOfCard }) => {
  let newProjects;
  if (numOfCard) {
    newProjects = projects.slice(0, numOfCard);
  } else {
    newProjects = projects;
  }
  return (
    <div className="grid gap-4 md:grid-cols-3 ">
      {newProjects.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </div>
  );
};
