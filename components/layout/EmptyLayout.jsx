import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
export const EmptyLayout = ({ children }) => {
  return (
    <div className="bg-gray-300">
      <div className="bg-red-300">{children}</div>
    </div>
  );
};
