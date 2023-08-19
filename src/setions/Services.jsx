import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="flex max-container justify-center flex-wrap gap-9">
      {services.map((service, i) => (
        <div
          key={i}
          className="flex flex-1 flex-col sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
        >
          <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full flex">
            <img
              src={service.imgURL}
              alt={service.label}
              width={24}
              height={24}
            />
          </div>

          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
            {service.label}
          </h3>
          <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
            {service.subtext}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;
