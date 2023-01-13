import React from "react";
import Image from "next/image";
import useTrans from "../hooks/useTrans";
export const Footer = () => {
  const trans = useTrans();
  return (
    <div className="bg-gray-50">
      <div className="mx-auto flex w-[90%] max-w-[78.75rem] flex-col justify-between space-y-8 pr-8 pt-24  pb-12 md:flex-row md:space-y-0">
        {/* Cot 1 */}
        <div className="max-w-[24.313rem]">
          <Image
            src="/image/logosuzugroup.svg"
            alt="Logo of Suzu group"
            width={88}
            height={44}
            className="h-[44px] w-[88px] "
          />
          <div className="">
            {trans.footer.contact.map((item, index) => (
              <p
                key={index}
                className="mt-4 text-base font-normal text-gray-500"
              >
                {item.title} : {item.content}
              </p>
            ))}
          </div>
        </div>
        {/* Cot 2 */}
        <div className="">
          <h3 className="whitespace-nowrap text-sm font-semibold text-gray-400">
            SuZu Group
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {trans.footer.navigation.suzugroup.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Cot 3 */}
        <div className="">
          <h3 className="whitespace-nowrap text-sm font-semibold text-gray-400">
            Suzu Studio
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {trans.footer.navigation.lienketnhanh.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Cot 4 */}
        <div className="">
          <h3 className="whitespace-nowrap text-sm font-semibold text-gray-400">
            Suzu Social
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {trans.footer.navigation.doingucuachungtoi.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* LINK */}
        </div>
        {/* Cot 5 */}
        <div className="">
          <h3 className="whitespace-nowrap text-sm font-semibold text-gray-400">
            Liên kết với chúng tôi
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {trans.footer.navigation.doingucuachungtoi.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* LINK */}
        </div>
      </div>
      <div className="flex h-[5.5rem] items-center justify-center bg-purple-300">
        <p>{trans.footer.copyright}</p>
      </div>
    </div>
  );
};
