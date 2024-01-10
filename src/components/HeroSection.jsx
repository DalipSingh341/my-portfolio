import React from "react";
import hero1 from "../assets/images/png/hero1.png";

const HeroSection = () => {
  return (
    <div className="my_container">
      <div className="flex flex-col-reverse md:flex-row items-center gap-5 justify-between w-full py-10">
        <div className="md:w-[52%] ">
          <h1 className="font-Poppins max-w-[400px] lg:max-w-[636px] text-darkgrey text-center md:text-start tracking-[-1px] text-[37px] md:text-[37px] lg:text-3lg xl:text-xl font-bold leading-[133%] ">
            Hi 👋, <span className="md:block">My name is</span>{" "}
            <span className="md:block DevName">Pavan MG </span>
            <span className="md:block">I build things for web</span>
          </h1>
        </div>
        <div className="w-[80%] sm:w-[50%] md:w-[40%]">
          <img className="w-full" src={hero1} alt="hero1" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
