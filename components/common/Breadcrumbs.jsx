import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import useTrans from "../hooks/useTrans";
import Image from "next/image";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function Breadcrumbs() {
  const { pathname } = useRouter();
  const pathParts = pathname.split("/").filter((part) => part);
  const trans = useTrans();
  return (
    <div className="text-purple-800 flex">
      <Link href="/" className="hover:text-purple-400 font-semibold flex">
        {trans.breadcrumbs}
      </Link>
      {pathParts.map((part, index) => {
        const to = `/${pathParts.slice(0, index + 1).join("/")}`;
        return (
          <React.Fragment key={to}>
            <span className="text-gray-500">
              {index < pathParts.length && (
                <Image
                  src="/image/chevronright.svg"
                  alt="Picture of the author"
                  width={25}
                  height={25}
                />
              )}
            </span>
            <Link
              className={classNames(
                "hover:text-purple-400",
                index == pathParts.length - 1
                  ? "pointer-events-none text-gray-500"
                  : ""
              )}
              href={to}
            >
              {part}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}
