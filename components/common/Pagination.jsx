import React from "react";
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
    <div className="flex space-x-2 px-4">
      <button
        disabled={currentPage === 0}
        onClick={() => changePage(currentPage - 1)}
        className="disabled:opacity-50"
      >
        Back
      </button>
      {/* listofbuttons */}
      {pagin.map((item, index) => (
        <button
          key={index}
          onClick={() => changePage(index)}
          className={classNames(
            "p-2 hover:bg-red-100",
            index === currentPage ? "font-bold" : ""
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
        Next
      </button>
    </div>
  );
};
