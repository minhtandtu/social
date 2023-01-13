// Project Gallery With Pagination
import React from "react";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { ItemGridWithPagin } from "../../components/common/ItemGridWithPagin";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const ProjectGallery = ({ projects, categories, defaultNumCard }) => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <Tab.Group>
        <div className="scrollbar-hide relative mb-8 flex w-full items-center overflow-y-auto ">
          <div className="mx-auto rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 py-1 px-1 backdrop-blur-xl">
            <Tab.List>
              <div className="flex flex-nowrap">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={classNames(
                        selected
                          ? "border border-white/50 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary shadow-xl"
                          : " text-gray-700",
                        "mr-1 whitespace-nowrap rounded-[20px] px-2 py-2 font-semibold outline-none"
                      )}
                    >
                      Tất cả
                    </button>
                  )}
                </Tab>
                {categories.map((category, index) => (
                  <Tab as={Fragment} key={index}>
                    {({ selected }) => (
                      <button
                        className={classNames(
                          selected
                            ? "border border-white/50 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary shadow-xl"
                            : " text-gray-700",
                          "mr-2 whitespace-nowrap rounded-[20px] px-2 py-2 font-semibold outline-none "
                        )}
                      >
                        {category.node.name}
                      </button>
                    )}
                  </Tab>
                ))}
              </div>
            </Tab.List>
          </div>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="w-full">
              <ItemGridWithPagin
                projects={projects}
                defaultNumCard={defaultNumCard}
              />
            </div>
          </Tab.Panel>
          {categories.map((item, index) => (
            <Tab.Panel key={index}>
              <ItemGridWithPagin
                projects={item.node.projects}
                defaultNumCard={defaultNumCard}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
