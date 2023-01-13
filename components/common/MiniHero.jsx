import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
export const MiniHero = (prop) => {
  const { pageTitle } = prop;
  const { pathname } = useRouter();
  const pathParts = pathname.split("/").filter((part) => part);
  return (
    <div className="relative">
      <div className="hidden sm:block">
        <img
          src="/image/bg_mini.png"
          className="h-96 w-full object-cover"
        ></img>
      </div>
      <div className="block sm:hidden">
        <img src="/image/bg_mini_mobi.png" className="w-full"></img>
      </div>
      <div className="absolute top-0  flex h-full w-full flex-col items-center justify-center">
        <p className="mb-3 text-4xl font-bold text-white sm:mb-5 md:text-5xl">
          {pageTitle}
        </p>
        <Breadcrumbs />
      </div>
    </div>
  );
};
