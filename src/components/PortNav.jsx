import React, { useState } from "react";
import logo from "../assets/images/png/logo.png";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import github from "../assets/images/svg/github.svg";
import twitter from "../assets/images/svg/twitter.svg";
import linkdin from "../assets/images/svg/linkdin.svg";
import HeroSection from "./HeroSection";

const PortNav = () => {
  const [nav, setNav] = useState(true);

  function shownav() {
    setNav(false);
    document.body.classList.add("overflow-hidden");
  }
  function hidenav() {
    setNav(true);
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="bg-darkblack flex flex-col min-h-screen ">
      <div className="my_container  py-5">
        <div className="flex items-center justify-between fixed top-0  left-0 w-full px-3 py-5">
          <div>
            <img
              className="w-full h-[60px] md:h-[80px] cursor-pointer"
              src={logo}
              alt="logo"
            />
          </div>
          <label htmlFor="menuIcon" className="z-50">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <input type="checkbox" id="menuIcon" hidden className="d-none" />
          <ul
            className={
              nav
                ? "flex nav_bar mb-0 ps-0 items-center gap-8"
                : "ps-0 flex nav_bar items-center show mb-0 gap-8"
            }
          >
            <li onClick={hidenav}>
              <a
                href="#section_2"
                className="hover-line font-Sans text-lightgrey font-medium leading-normal text-[5vw] sm:text-[4vw] md:text-[19px] lg:text-[21px] mb-0 "
              >
                Home
              </a>
            </li>
            <li onClick={hidenav}>
              <a
                href="#section_3"
                className="hover-line font-Sans text-lightgrey font-medium leading-normal text-[5vw] sm:text-[4vw] md:text-[19px] lg:text-[21px] mb-0 "
              >
                About
              </a>
            </li>
            <li onClick={hidenav}>
              <a
                href="#section_4"
                className="hover-line font-Sans text-lightgrey font-medium leading-normal text-[5vw] sm:text-[4vw] md:text-[19px] lg:text-[21px] mb-0 "
              >
                Tech Stack
              </a>
            </li>
            <li onClick={hidenav}>
              <a
                href="#section_5"
                className="hover-line font-Sans text-lightgrey font-medium leading-normal text-[5vw] sm:text-[4vw] md:text-[19px] lg:text-[21px] mb-0 "
              >
                Projects
              </a>
            </li>
            <li onClick={hidenav}>
              <a
                href="#section_5"
                className="hover-line font-Sans text-lightgrey font-medium leading-normal text-[5vw] sm:text-[4vw] md:text-[19px] lg:text-[21px] mb-0 "
              >
                Contact
              </a>
            </li>
            <div className="hidden gap-5 lg:ms-8 md:flex items-center">
              <a target="_blank" className="inline-block" href="https://github.com/DalipSingh341">
                <img src={github} alt="github" />
              </a>
              <a target="_blank" className="inline-block" href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a target="_blank"
                className="inline-block"
                href="https://www.linkedin.com/in/dalip-singh-51228226b/"
              >
                <img src={linkdin} alt="linkdin" />
              </a>
            </div>
          </ul>
          <div className="md:hidden gap-5  flex items-center">
            <a target="_blank" className="inline-block" href="#">
              <img src={github} alt="github" />
            </a>
            <a target="_blank" className="inline-block" href="https://github.com/DalipSingh341">
              <img src={twitter} alt="twitter" />
            </a>
            <a target="_blank"
              className="inline-block"
              href="https://www.linkedin.com/in/dalip-singh-51228226b/"
            >
              <img src={linkdin} alt="linkdin" />
            </a>
          </div>
          <div
            className="position-relative md:hidden cross_btn z_100 "
            onClick={nav ? shownav : hidenav}
          >
            {" "}
            {nav ? (
              <Icon
                icon={menu}
                size={45}
                className="text-lightgrey cursor-pointer"
              />
            ) : (
              <Icon
                icon={x}
                size={45}
                className="icons_color2 text-lightgrey cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center grow">
        <HeroSection />
      </div>
    </div>
  );
};

export default PortNav;
