import Image from "next/image";
import React from "react";
export const ProjectCard = ({ project }) => {
  return (
    <div className="flex w-full flex-col">
      <img
        src={project.image.url}
        alt="image"
        width={300}
        height={300}
        className="aspect-square w-full rounded-lg object-cover"
      ></img>
      <p className="mt-5 text-xl font-semibold md:text-2xl">{project.name}</p>
      <p className="mt-auto pt-2 text-sm font-medium text-gray-900 md:text-base  ">
        {project.excerpt}
      </p>
    </div>
  );
};
