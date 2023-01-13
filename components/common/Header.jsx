import React, { useState, useEffect } from "react";
import { request, gql } from "graphql-request";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Header = () => {
  const [data, setData] = useState([{ name: "", slug: "" }]);
  const { locale } = useRouter();
  const router = useRouter();
  const [ismenuopen, setismenuopen] = useState(true);
  useEffect(() => {
    const query = gql`
      query MyQuery($locale: Locale!) {
        navigations(locales: [$locale]) {
          name
          slug
          locale
        }
      }
    `;
    async function dataFetch() {
      const res = await request(
        "https://api-ap-northeast-1.hygraph.com/v2/clc47162f37wq01um739sf1lz/master",
        query,
        { locale }
      );

      setData(res.navigations);
    }
    dataFetch();
  }, [locale]);
  function handleMenuOnClick() {
    setismenuopen(!ismenuopen);
  }
  return (
    <div className="container fixed z-50  bg-transparent">
      <div className="relative flex w-full items-center">
        <div
          className={`${
            ismenuopen ? "hidden " : " "
          }bdd  mx-2 mt-1 flex h-[4.75rem] w-full rounded-3xl bg-white/30 p-2 md:mx-20 md:mt-6`}
        >
          <div
            onClick={handleMenuOnClick}
            className="mx-2 mr-2 flex h-[3.75rem] w-[3.75rem] cursor-pointer items-center justify-center 
        rounded-2xl rounded-br-none bg-gradient-to-br from-primary/30 to-secondary/30 px-4 backdrop-blur-xl hover:bg-purple-200 active:bg-purple-50"
          >
            <Bars2Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex w-full items-center justify-between rounded-2xl rounded-bl-none bg-white/80 py-2 px-4 backdrop-blur-xl">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/image/logo.svg"
                alt="Picture of the author"
                width={75}
                height={44}
                className="h-full"
              />
            </Link>
            <div className="hidden py-2 md:flex">
              {data.map((item) => (
                <Link
                  href={`/${item.slug}`}
                  key={item.slug}
                  className="mx-1 whitespace-nowrap rounded-md 
                from-primary/50 to-secondary/50 px-4 py-2 font-semibold transition-all hover:bg-gradient-to-r "
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="rounded-lg  bg-gray-100/50  p-1">
              <div className=" flex h-[2.75rem] items-center justify-center">
                <Link
                  className={classNames(
                    "rounded-lg p-3 ",
                    locale === "vi" ? "bg-white" : " "
                  )}
                  href={router.pathname}
                  locale="vi"
                >
                  VN
                </Link>
                <Link
                  className={classNames(
                    " rounded  p-3",
                    locale === "en" ? "bg-white" : " "
                  )}
                  href={router.pathname}
                  locale="en"
                >
                  EN
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Menu */}
        <div
          className={`${
            ismenuopen ? "" : "hidden"
          } bd absolute inset-x-2 top-2 rounded-xl bg-gradient-to-br from-primary/40 to-secondary/40`}
        >
          <div
            onClick={handleMenuOnClick}
            className="bdd mt-2 ml-2 flex h-[3.75rem] w-[3.75rem] cursor-pointer items-center justify-center 
        rounded-2xl rounded-br-none bg-gradient-to-br from-primary to-secondary px-4 backdrop-blur-xl hover:bg-purple-200 active:bg-purple-50"
          >
            <XMarkIcon className="h-6 w-6 text-white" />
          </div>
          <ul className="my-4 space-y-8 pl-4 text-base font-semibold text-white">
            <li className=" ">
              <Link href="/">
                <div className="flex">
                  <Image
                    src="/vercel.svg"
                    height={88}
                    width={88}
                    alt="logo"
                    className="mr-2"
                  ></Image>
                  <p>Suzu Social</p>
                </div>
              </Link>
            </li>
            <li className=" ">
              <Link href="/projects">
                <div className="flex">
                  <Image
                    src="/logosuzugroup.svg"
                    height={88}
                    width={88}
                    alt="logo"
                    className="mr-2"
                  ></Image>
                  <p>Dự án</p>
                </div>
              </Link>
            </li>
            <li className=" ">
              <Link href="/about">
                <div className="flex">
                  <Image
                    src="/logo.svg"
                    height={77}
                    width={77}
                    alt="logo"
                    className="mr-2"
                  ></Image>
                  <p>Giới thiệu về Social</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
