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
  const [menu, setMenu] = useState([{ name: "", slug: "" }]);
  const [site, setSite] = useState([
    {
      siteName: "",
      slug: "",
    },
  ]);
  const [sitesConn, setsitesConn] = useState([
    {
      node: {
        siteName: "",
        slug: "",
        menus: [
          { name: "demo", slug: "demo" },
          { name: "demo2", slug: "demo2" },
        ],
      },
    },
  ]);
  const { locale } = useRouter();
  const router = useRouter();
  const [ismenuopen, setismenuopen] = useState(false);
  const [activeNumber, setActiveNumber] = useState();

  useEffect(() => {
    const query = gql`
      query SocialMenu() {
        sitesConnection(where: { siteName: "SuZu Social" }) {
          edges {
            node {
              id
              locale
              logo {
                url
              }
              menus {
                locale
                name
                slug
              }
              siteName
              slug
            }
          }
        }
      }
    `;
    const querypage = gql`
      query MySites {
        sites {
          id
          locale
          logo(locales: [en]) {
            url
          }
          siteName
          slug
        }
      }
    `;
    const querySubMenus = gql`
      query SubMenus() {
        sitesConnection {
          edges {
            node {
              id
              locale
              logo {
                url
              }
              menus {
                locale
                name
                slug
              }
              siteName
              slug
            }
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

      setMenu(res.sitesConnection.edges[0].node.menus);
    }
    async function pageFetch() {
      const res = await request(
        "https://api-ap-northeast-1.hygraph.com/v2/clc47162f37wq01um739sf1lz/master",
        querypage,
        { locale }
      );
      setSite(res.sites);
    }
    async function subMenuFetch() {
      const res = await request(
        "https://api-ap-northeast-1.hygraph.com/v2/clc47162f37wq01um739sf1lz/master",
        querySubMenus,
        { locale }
      );
      setsitesConn(res.sitesConnection.edges);
    }
    dataFetch();
    pageFetch();
    subMenuFetch();
  }, [locale]);
  function handleMenuOnClick() {
    setismenuopen(!ismenuopen);
  }
  return (
    <div className="container fixed z-50  bg-transparent">
      <div className="relative flex w-full items-center">
        <div
          className={`${
            ismenuopen ? "hidden md:flex " : " "
          }mx-2 mt-1 flex h-[4.75rem] w-full rounded-3xl bg-white/30 p-2 md:mx-20 md:mt-6`}
        >
          <div
            onClick={handleMenuOnClick}
            className="mx-2 mr-2 flex h-[3.75rem] w-[3.75rem] cursor-pointer items-center justify-center 
        rounded-2xl rounded-br-none bg-gradient-to-br from-primary/30 to-secondary/30 px-4 backdrop-blur-xl hover:bg-purple-200 active:bg-purple-50"
          >
            <Bars2Icon className="h-6 w-6 text-white" />
          </div>
          <div
            className={`${
              ismenuopen ? "bg-white/30" : "bg-white/80"
            } flex w-full items-center justify-between rounded-2xl rounded-bl-none py-2  backdrop-blur-xl `}
          >
            <Link href="/" className="cursor-pointer">
              <Image
                src="/image/logo.svg"
                alt="Picture of the author"
                width={75}
                height={44}
                className="h-full min-w-[75px] shrink-0 "
              />
            </Link>
            {/* Menu Items */}
            <div className="hidden py-2 md:flex">
              {menu.map((item) => (
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
            <div className="mr-1  rounded-xl bg-gray-300/50 py-1 px-[2px]">
              <div className="flex h-[2.75rem] items-center justify-center">
                <Link
                  className={classNames(
                    "rounded-xl p-3 ",
                    locale === "vi" ? "bg-white" : " "
                  )}
                  href={router.pathname}
                  locale="vi"
                >
                  VN
                </Link>
                <Link
                  className={classNames(
                    " rounded-xl  p-3",
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
            ismenuopen ? "md:flex" : "hidden"
          } absolute inset-x-2 top-2 my-2 items-center rounded-xl rounded-br-none bg-gradient-to-br from-primary/80 to-secondary/80   transition md:right-52 md:top-6 md:ml-20 md:animate-btnAnimate md:items-center md:bg-purple-500  `}
        >
          <div
            onClick={handleMenuOnClick}
            className="flex
        h-[3.75rem] cursor-pointer items-center bg-transparent px-2 "
          >
            <div className="p-2 hover:bg-white/50">
              <XMarkIcon className="h-7 w-7 font-extrabold text-black" />
            </div>
            <p className="mx-4 text-white/50">|</p>
            <p className="font-medium text-white/50 md:hidden xl:block">
              Đội Ngũ SuZu
            </p>
          </div>
          <ul className="mt-4 rounded-full py-2 text-base font-semibold text-white md:mt-0 md:flex md:bg-purple-900/50 md:py-0">
            {site.map((item, index) => (
              <li
                key={index}
                className="flex items-center whitespace-nowrap rounded-md
                  py-[2px] px-[2px] font-semibold"
              >
                <div className="flex w-full items-center justify-between">
                  <Link
                    className="flex h-full items-center rounded-full py-2 px-4 hover:bg-white/50"
                    href={item.slug}
                  >
                    <img
                      src={`${item.logo ? item.logo.url : "/image/logo.svg"}`}
                      alt="Picture of the author"
                      className="mr-2 h-7 object-cover"
                    />
                    {item.siteName}
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center rounded px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm  focus:outline-none focus:ring-1 focus:ring-white/50 focus:ring-offset-1 md:hidden"
                  >
                    <ChevronDownIcon
                      onClick={() => setActiveNumber(index)}
                      className="float-right h-6 w-6 cursor-pointer font-bold text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1"
                    ></ChevronDownIcon>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <ul className="mb-4 bg-white/50 ">
            {sitesConn.map((item, index) => (
              <li
                key={index}
                className={`${
                  activeNumber == index ? "flex flex-col" : "hidden"
                }`}
              >
                {item.node.menus.map((itm, idx) => (
                  <Link
                    key={idx}
                    onClick={handleMenuOnClick}
                    href={`/${itm.slug}`}
                    className="py-4 pl-16 text-sm font-semibold text-[#FFF4F2] first:text-primary"
                  >
                    {itm.name}
                  </Link>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
