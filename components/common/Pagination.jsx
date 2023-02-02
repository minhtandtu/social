import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Pagination = (props) => {
  const { currentPage, itemsInPage, totalPages, totalItems, changePage } =
    props;
  const pagin = [];
  for (let i = 0; i < totalPages; i++) {
    pagin.push(i);
  }
  return (
    <div className="mt-20 flex space-x-2 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 px-4 py-[2px] shadow-lg shadow-purple-200">
      <button
        disabled={currentPage === 0}
        onClick={() => changePage(currentPage - 1)}
        className="disabled:opacity-50"
      >
        <ChevronLeftIcon className="h-5 w-5 text-gray-800"></ChevronLeftIcon>
      </button>
      {/* listofbuttons */}
      {pagin.map((item, index) => (
        <button
          key={index}
          onClick={() => changePage(index)}
          className={classNames(
            " py-2 px-4 font-bold hover:rounded-full hover:bg-red-100 ",
            index === currentPage
              ? "rounded-full border border-white/50 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary shadow-md shadow-purple-200"
              : ""
          )}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages - 1}
        onClick={() => changePage(currentPage + 1)}
        className="disabled:opacity-50"
      >
        <ChevronLeftIcon className="h-5 w-5 rotate-180 text-gray-800"></ChevronLeftIcon>
      </button>
    </div>
  );
};
