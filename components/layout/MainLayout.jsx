import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const MainLayout = ({ children }) => {
  return (
    <div
      className={` ${inter.variable} flex w-full flex-col items-center font-sans text-gray-700 `}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
