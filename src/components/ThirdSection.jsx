// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoBookSharp } from "react-icons/io5";
import AquariumDataTip from "./AquariumFolder/AquariumDataTip";
import "./AquariumFolder/AquariumStand.css";
const ThirdSection = () => {
  return (
    <div>
      <section className="pl-8">
        <h2 className="reSkills text-[3rem]">Skills</h2>
        <ul
          className="reUnOrderedList2
            text-[1.2rem] sm:text-[2rem] md:text-[2.3rem]   "
        >
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;React Js.
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;HTML5
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;CSS3
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Tailwind CSS
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;JavaScript
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Adobe Photo-Shop
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Adobe Illustrator
          </li>

          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Stable Diffusion
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Vite with Firebase
          </li>
        </ul>
      </section>
      br
      <div className="  relative m-auto flex w-screen justify-center">
        <AquariumDataTip />
      </div>
    </div>
  );
};

export default ThirdSection;
