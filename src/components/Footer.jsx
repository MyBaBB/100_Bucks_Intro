// eslint-disable-next-line no-unused-vars
import React from "react";
import ScubaMan from "./ScubaManFolder/ScubaMan";
import { GiSadCrab } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
      <div className=" relative flex justify-center pr-4 sm:justify-end ">
        <a
          href="mailto:howdy@mybabb.com"
          className=" text-bold relative mb-2  mt-2 flex w-fit rounded-lg border-[1px]
         border-varLIGHTBLUEFEATHER bg-blue-950 p-2 text-center font-Aclonica-Regular text-lg text-gray-300
       hover:bg-gray-950 sm:mr-16"
        >
          Contact@MyBaBB.com
        </a>
        <span>
          {" "}
          <ScubaMan />
        </span>
        <span
          className=" absolute bottom-[-1.7rem] left-[13%] z-[5] 
       text-center text-red-700"
        >
          <GiSadCrab size={25} />
        </span>
      </div>
      <hr className="hrBottom"></hr>
    </div>
  );
};

export default Footer;
