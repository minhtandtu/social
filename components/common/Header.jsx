import React, { useState, useEffect } from "react";
import { request, gql } from "graphql-request";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Bars2Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Header = () => {
  const [data, setData] = useState([{ name: "", slug: "" }]);
  const [pages, setPages] = useState([{ name: "", slug: "" }]);
  const { locale } = useRouter();
  const router = useRouter();
  const [ismenuopen, setismenuopen] = useState(false);
  const [activeNumber, setActiveNumber] = useState();
  useEffect(() => {
    const query = gql`
      query MyQuery($locale: Locale!) {
        navigations(locales: [$locale]) {
          name
          slug
          locale
          logo(locales: en) {
            url
          }
        }
      }
    `;
    const querypage = gql`
      query page {
        pages {
          pageName
          slug
          locale
          logo(locales: en) {
            url
          }
        }
      }
    `;
    async function dataFetch() {
      const res = await request(
        "https://api-ap-northeast-1.hygraph.com/v2/clc47162f37wq01um739sf1lz/master",
        query,
        { locale }
      );
      console.log(res.navigations);
      setData(res.navigations);
    }
    async function pageFetch() {
      const res = await request(
        "https://api-ap-northeast-1.hygraph.com/v2/clc47162f37wq01um739sf1lz/master",
        querypage,
        { locale }
      );
      console.log("Page: ", res);
      setPages(res.pages);
    }
    dataFetch();
    pageFetch();
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
          }mx-2 mt-1 flex h-[4.75rem] w-full rounded-3xl bg-white/30 p-2 md:mx-20 md:mt-6`}
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
            {/* Menu Items */}
            <div className="hidden py-2 md:flex">
              {data.map((item) => (
                <Link
                  href={`/${item.slug}`}
                  key={item.slug}
                  className="mx-1
                whitespace-nowrap rounded-md from-primary/50 to-secondary/50 px-4 py-2 font-semibold transition-all hover:bg-gradient-to-r "
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* VN-EN */}
            <div className="rounded-lg  bg-gray-100/50  p-1">
              <div className="flex h-[2.75rem] items-center justify-center">
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
        {/*Pop up Menu  */}
        <div
          className={`${
            ismenuopen ? "" : "hidden"
          } absolute inset-x-2 top-2 rounded-xl bg-gradient-to-br from-primary/80 to-secondary/80`}
        >
          <div
            onClick={handleMenuOnClick}
            className="mt-2 ml-2 flex h-[3.75rem] cursor-pointer 
        items-center bg-transparent px-4 "
          >
            <XMarkIcon className="h-7 w-7 font-extrabold text-black" />
            <p className="mx-4 text-white/50">|</p>
            <p className="font-medium text-white/50">Đội Ngũ SuZu</p>
          </div>
          <ul className="px-4 py-8 text-base font-semibold text-white">
            {pages.map((item, index) => (
              <li
                key={item.slug}
                onClick={() => setActiveNumber(index)}
                className="flex items-center justify-between whitespace-nowrap rounded-md
                py-4 font-semibold transition-all hover:bg-white/50"
              >
                <>
                  <div className="flex">
                    <img
                      src={`${item.logo ? item.logo.url : "/image/logo.svg"}`}
                      alt="Picture of the author"
                      width={60}
                      height={44}
                      className="mr-2 h-full object-cover"
                    />
                    {item.pageName}
                  </div>

                  <ChevronDownIcon className="float-right h-6 w-6 font-bold text-white"></ChevronDownIcon>
                </>
              </li>
            ))}
          </ul>
          <ul className="mx-4 mb-4 py-3">
            <li className={`${activeNumber == 0 ? "" : "hidden"}`}>a</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
