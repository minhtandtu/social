import React, { useState, useEffect } from "react";
import { Pagination } from "./Pagination";
import { ProjectCard } from "./ProjectCard";

export const ItemGridWithPagin = ({ projects, defaultNumCard }) => {
  const [currentPage, setcurrentPage] = useState(0);

  const newprojects = [...projects];
  const start = currentPage * defaultNumCard;
  const totalItems = projects.length;
  const totalPages = Math.ceil(totalItems / defaultNumCard);

  const [currentProjects, setcurrentProjects] = useState(() => {
    return newprojects.splice(start, defaultNumCard);
  });

  function handleChangePage(newPage) {
    setcurrentPage(newPage);
  }
  let newPJ = [...projects];
  newPJ = newPJ.splice(start, defaultNumCard);
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {newPJ.map((item, index) => (
          <div key={index} className="w-full  ">
            <ProjectCard project={item} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        defaultNumCard={defaultNumCard}
        totalPages={totalPages}
        totalItems={totalItems}
        changePage={handleChangePage}
      />
    </div>
  );
};
