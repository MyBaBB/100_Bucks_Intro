// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoBookSharp } from "react-icons/io5";
import AquariumDataTip from "./AquariumFolder/AquariumDataTip";
import "./AquariumFolder/AquariumStand.css";
const ThirdSection = () => {
  return (
    <div>
      <section className="m-auto    w-fit pl-8">
        <p className="text-center">
          {" "}
          <h2 className="reSkills text-[3rem]">Skills</h2>
        </p>
        <div className="relative  md:flex  ">
          <div className="relative">
            <ul
              className="reUnOrderedList2
            text-[1.2rem] sm:text-[2rem] md:text-[2.3rem]   "
            >
              <li>
                <span className="skillsSpan whitespace-nowrap"><IoBookSharp className="inline-block text-blue-400   " />
                &nbsp;&nbsp;&nbsp;React Js.</span>
              </li>
              <li>
                <span className="skillsSpan whitespace-nowrap"><IoBookSharp className="inline-block text-blue-400 " />
                &nbsp;&nbsp;&nbsp;JavaScript</span>
              </li>
              <li>
                <span className="skillsSpan whitespace-nowrap"><IoBookSharp className="inline-block text-blue-400 " />
                &nbsp;&nbsp;&nbsp;Tailwind CSS</span>
              </li>

              <li>
                <span className="skillsSpan whitespace-nowrap"><IoBookSharp className="inline-block text-blue-400 " />
                &nbsp;&nbsp;&nbsp;CSS3</span>
              </li>
              <li>
                <span className="skillsSpan whitespace-nowrap"><IoBookSharp className="inline-block text-blue-400 " />
                &nbsp;&nbsp;&nbsp;Vite with Firebase</span>
              </li>
            </ul>
          </div>

          <div className="relative ">
            <ul
              className="reUnOrderedList2 mb-[2rem]
            text-[1.2rem] sm:text-[2rem] md:text-[2.3rem]   "
            >
              <li>
                <span className="skillsSpan whitespace-nowrap"><IoBookSharp className="inline-block text-blue-400 " />
                &nbsp;&nbsp;&nbsp;Figma</span>
              </li>
              <li>
                <span className="skillsSpan whitespace-nowrap"><IoBookSharp className="inline-block text-blue-400 " />
                &nbsp;&nbsp;&nbsp;Adobe Photo-Shop</span>
              </li>
              <li>
                <span className="skillsSpan whitespace-nowrap"><IoBookSharp className="inline-block text-blue-400 " />
                &nbsp;&nbsp;&nbsp;Adobe Illustrator</span>
              </li>

              <li>
                <span className="skillsSpan whitespace-nowrap"><IoBookSharp className="inline-block text-blue-400 " />
                &nbsp;&nbsp;&nbsp;Stable Diffusion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="  relative m-auto flex w-screen justify-center">
        <AquariumDataTip />
      </div>
    </div>
  );
};

export default ThirdSection;
