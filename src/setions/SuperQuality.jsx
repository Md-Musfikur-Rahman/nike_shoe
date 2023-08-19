import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex max-lg:flex-col justify-between items-center gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl font-bold lg:max-w-lg capitalize">
          We provide you
          <br />
          <span className=" text-coral-red">Super </span>{" "}
          <span className=" text-coral-red">Quality </span>shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={520}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
