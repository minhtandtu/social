import React from "react";

export const LSServices = ({ services }) => {
  return (
    <div className="">
      {services.map((service, index) => (
        <div key={index} className="py-4 ">
          <div className="flex">
            <p className="">0{index + 1}</p>
            <div className="mx-4 mb-1 w-full border-b border-black"></div>
          </div>
          <div className="over mt-4 pl-4 md:mt-8">
            <p className="pb-2 text-4xl font-semibold">{service.name}</p>
            <div className="flex flex-wrap ">
              {service.detail.map((item, index) => (
                <div className="mr-3 flex" key={index}>
                  <img
                    src="/icon/check-circle-broken.svg"
                    alt="icon check-circle-broken"
                    className="mt-1 mr-1 h-5 w-5"
                  ></img>
                  <span className="mr-4 whitespace-nowrap leading-loose">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
