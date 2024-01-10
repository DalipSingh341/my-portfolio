import React from "react";
import {
  Angular,
  Bootstrap,
  Css,
  Git,
  GitHub,
  Gsap,
  Html,
  JavaScript,
  ReactICon,
  Sass,
  Tailwind,
  VsCode,
} from "../pages/common/Icons";

const TechStack = () => {
  return (
    <div className="bg-lightblack py-5 sm:py-8 md:py-10">
      <div className="my_container">
        <h2 className="font-Poppins text-[46px] sm:text-3lg font-bold leading-[140%] text-center text-offwhite ">
          My Tech Stack
        </h2>
        <p className="font-Poppins text-lightgrey text-center mt-5 sm:mt-[49px] text-[20px] sm:text-[32px] font-normal leading-[130%] sm:leading-[80%] ">
          {" "}
          Technologies I’ve been working with recently
        </p>
        <div className="flex flex-col gap-5 md:gap-[76px]    py-10 sm:py-[50px] md:py-[100px] xl:py-[146px] ">
          <div className="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 items-center justify-between ">
            <div className="flex items-center justify-center">
              <Html />
            </div>
            <div className="flex items-center justify-center">
              <Css />
            </div>
            <div className="flex items-center justify-center">
              <JavaScript />
            </div>
            <div className="flex items-center justify-center">
              <ReactICon />
            </div>
            <div className="flex items-center justify-center">
              <Angular />
            </div>
            <div className="flex items-center justify-center">
              <Bootstrap />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 items-center justify-between ">
            <div className="flex items-center justify-center">
              <Tailwind />
            </div>
            <div className="flex items-center justify-center">
              <Sass />
            </div>
            <div className="flex items-center justify-center">
              <Git />
            </div>
            <div className="flex items-center justify-center">
              <Gsap />
            </div>
            <div className="flex items-center justify-center">
              <VsCode />
            </div>
            <div className="flex items-center justify-center">
              <GitHub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
