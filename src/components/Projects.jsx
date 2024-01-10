import React from "react";
import projectimg1 from "../assets/images/png/projectimg1.png";
import projectimg2 from "../assets/images/png/projectimg2.png";
import projectimg3 from "../assets/images/png/projectimg3.png";
import projectimg4 from "../assets/images/png/projectimg4.png";
import projectimg5 from "../assets/images/png/projectimg5.png";
import projectimg6 from "../assets/images/png/projectimg6.png";
import { GitHubCard, LivePreview } from "../pages/common/Icons";

const Projects = () => {
  return (
    <div className="pt-10">
      <div className="my_container">
        <h2 className="font-Poppins text-[46px] sm:text-3lg font-bold leading-[140%] text-center text-offwhite ">
          Projects
        </h2>
        <p className="font-Poppins text-lightgrey text-center mt-5 sm:mt-[49px] text-[20px] sm:text-[32px] font-normal leading-[130%] sm:leading-[80%] ">
          {" "}
          Things I’ve built so far
        </p>
        <div className="py-10 sm:py-[50px] md:py-[100px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-5 lg:gap-7 xl:gap-12">
            <div className="ProjectCard max-w-[320px] sm:max-w-[600px] w-[100%] mx-auto bg-[#363636] rounded-[20px]  overflow-hidden">
              <img
                className="w-full h-[260px] sm:h-[260px] object-fill sm:object-fill"
                src={projectimg1}
                alt="projectimg1"
              />
              <div className="p-7 sm:pt-[27px] sm:pr-[30px] sm:pb-[25px] sm:ps-[28px]">
                <h2 className="font-Poppins text-[24px] md:text-[28px] font-medium text-offwhite leading-[92%] ">
                  Project RepForce
                </h2>
                <p className="font-Poppins text-[15px] md:text-[18px] font-light text-offwhite leading-[144%] mt-[17px] mb-3 max-w-[314px]">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="font-Poppins text-[14px] md:text-[16px] font-normal text-offwhite leading-[162%] mb-3 sm:mb-[21px]">
                  Tech stack :{" "}
                  <span className="font-light"> HTML ,Css, JavaScript</span>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      {" "}
                      <LivePreview />
                    </a>
                    <a
                      target="_blank"
                      href="https://rep-force-341.netlify.app/"
                      className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white"
                    >
                      Live Preview
                    </a>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      {" "}
                      <GitHubCard />
                    </a>

                    <a
                      target="_blank"
                      href="https://github.com/DalipSingh341/RepForce.git"
                      className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ProjectCard max-w-[320px] sm:max-w-[600px] w-[100%] mx-auto bg-[#363636] rounded-[20px]  overflow-hidden">
              <img
                className="w-full h-[260px] sm:h-[260px] object-fill sm:object-fill"
                src={projectimg2}
                alt="projectimg2"
              />
              <div className="p-7 sm:pt-[27px] sm:pr-[30px] sm:pb-[25px] sm:ps-[28px]">
                <h2 className="font-Poppins text-[24px] md:text-[28px] font-medium text-offwhite leading-[92%] ">
                  Project Cyber-Drops
                </h2>
                <p className="font-Poppins text-[15px] md:text-[18px] font-light text-offwhite leading-[144%] mt-[17px] mb-3 max-w-[314px]">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="font-Poppins text-[14px] md:text-[16px] font-normal text-offwhite leading-[162%] mb-3 sm:mb-[21px]">
                  Tech stack :{" "}
                  <span className="font-light"> HTML,Bootstrap,JS,React</span>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      {" "}
                      <LivePreview />
                    </a>
                    <a
                      target="_blank"
                      href="https://cyber-drops-app.netlify.app/"
                      className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white"
                    >
                      Live Preview
                    </a>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      {" "}
                      <GitHubCard />
                    </a>
                    <a>
                      <a
                        target="_blank"
                        href="https://github.com/DalipSingh341/cyberdrops.git"
                        className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white"
                      >
                        View Code
                      </a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ProjectCard max-w-[320px] sm:max-w-[600px] w-[100%] mx-auto bg-[#363636] rounded-[20px]  overflow-hidden">
              <img
                className="w-full h-[260px] sm:h-[260px] object-fill sm:object-fill"
                src={projectimg3}
                alt="projectimg3"
              />
              <div className="p-7 sm:pt-[27px] sm:pr-[30px] sm:pb-[25px] sm:ps-[28px]">
                <h2 className="font-Poppins text-[24px] md:text-[28px] font-medium text-offwhite leading-[92%] ">
                  Project CV-Hawk
                </h2>
                <p className="font-Poppins text-[15px] md:text-[18px] font-light text-offwhite leading-[144%] mt-[17px] mb-3 max-w-[314px]">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="font-Poppins text-[14px] md:text-[16px] font-normal text-offwhite leading-[162%] mb-3 sm:mb-[21px]">
                  Tech stack :{" "}
                  <span className="font-light"> HTML ,Bootstrap JS, React</span>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      {" "}
                      <LivePreview />
                    </a>
                    <a target="_blank" href="https://cv-hawk-341.netlify.app/">
                      {" "}
                      <p className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white">
                        Live Preview
                      </p>
                    </a>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      {" "}
                      <GitHubCard />
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/DalipSingh341/cv-hawk.git"
                    >
                      <p className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white">
                        View Code
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ProjectCard max-w-[320px] sm:max-w-[600px] w-[100%] mx-auto bg-[#363636] rounded-[20px]  overflow-hidden">
              <img
                className="w-full h-[260px] sm:h-[260px] object-fill sm:object-fill"
                src={projectimg4}
                alt="projectimg4"
              />
              <div className="p-7 sm:pt-[27px] sm:pr-[30px] sm:pb-[25px] sm:ps-[28px]">
                <h2 className="font-Poppins text-[24px] md:text-[28px] font-medium text-offwhite leading-[92%] ">
                  Project Coffee
                </h2>
                <p className="font-Poppins text-[15px] md:text-[18px] font-light text-offwhite leading-[144%] mt-[17px] mb-3 max-w-[314px]">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="font-Poppins text-[14px] md:text-[16px] font-normal text-offwhite leading-[162%] mb-3 sm:mb-[21px]">
                  Tech stack :{" "}
                  <span className="font-light"> HTML, Tailwind, JS</span>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[10px] items-center">
                    <a target="_blank" href="#">
                      {" "}
                      <LivePreview />
                    </a>

                    <a
                      target="_blank"
                      href="https://spontaneous-melba-9cac01.netlify.app/"
                      className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white"
                    >
                      Live Preview
                    </a>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      {" "}
                      <GitHubCard />
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/DalipSingh341/bean-coffee2.git"
                      className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ProjectCard max-w-[320px] sm:max-w-[600px] w-[100%] mx-auto bg-[#363636] rounded-[20px]  overflow-hidden">
              <img
                className="w-full h-[260px] sm:h-[260px] object-fill sm:object-fill"
                src={projectimg5}
                alt="projectimg5"
              />
              <div className="p-7 sm:pt-[27px] sm:pr-[30px] sm:pb-[25px] sm:ps-[28px]">
                <h2 className="font-Poppins text-[24px] md:text-[28px] font-medium text-offwhite leading-[92%] ">
                  Project Aleph Zero
                </h2>
                <p className="font-Poppins text-[15px] md:text-[18px] font-light text-offwhite leading-[144%] mt-[17px] mb-3 max-w-[314px]">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="font-Poppins text-[14px] md:text-[16px] font-normal text-offwhite leading-[162%] mb-3 sm:mb-[21px]">
                  Tech stack :
                  <span className="font-light"> HTML , bootstrap, JS</span>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      <LivePreview />
                    </a>
                    <a
                      target="_blank"
                      href="
                   https://idyllic-hotteok-df9e2d.netlify.app/"
                      className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white"
                    >
                      Live Preview
                    </a>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      {" "}
                      <GitHubCard />
                    </a>

                    <a
                      target="_blank"
                      href="https://github.com/DalipSingh341/project-13-aleph.git"
                      className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ProjectCard max-w-[320px] sm:max-w-[600px] w-[100%] mx-auto bg-[#363636] rounded-[20px]  overflow-hidden">
              <img
                className="w-full h-[260px] sm:h-[260px] object-fill sm:object-fill"
                src={projectimg6}
                alt="projectimg6"
              />
              <div className="p-7 sm:pt-[27px] sm:pr-[30px] sm:pb-[25px] sm:ps-[28px]">
                <h2 className="font-Poppins text-[24px] md:text-[28px] font-medium text-offwhite leading-[92%] ">
                  Project Nexai
                </h2>
                <p className="font-Poppins text-[15px] md:text-[18px] font-light text-offwhite leading-[144%] mt-[17px] mb-3 max-w-[314px]">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="font-Poppins text-[14px] md:text-[16px] font-normal text-offwhite leading-[162%] mb-3 sm:mb-[21px]">
                  Tech stack :{" "}
                  <span className="font-light">
                    {" "}
                    HTML ,bootstrap, Js, React
                  </span>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      {" "}
                      <LivePreview />
                    </a>
                    <a target="_blank" href="https://nexa-ai-app.netlify.app/">
                      {" "}
                      <p className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white">
                        Live Preview
                      </p>
                    </a>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <a href="#">
                      {" "}
                      <GitHubCard />
                    </a>
                      <a
                        target="_blank"
                        href="https://github.com/DalipSingh341/ai-app.git"
                        className="font-Poppins text-[14px] md:text-[16px] font-normal leading-[162%] underline text-white"
                      >
                        View Code
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
