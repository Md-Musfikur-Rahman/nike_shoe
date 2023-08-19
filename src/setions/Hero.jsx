import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collenction
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading[48px] font-bold capitalize">
          <span className="xl:whitespace-nowrap relative z-10 pr-10 ">
            the new arrival
          </span>
          <br />{" "}
          <span className=" text-coral-red inline-block mt-3">nike </span> shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>

        <Button label="Shop now" iconUrl={arrowRight} />

        <dir className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, ined) => (
            <div key={ined}>
              <p className=" text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </dir>
      </div>

      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="Shoe 1"
          width={610}
          height={500}
          className=" object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, i) => (
            <div key={i}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
