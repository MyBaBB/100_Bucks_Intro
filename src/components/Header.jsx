// eslint-disable-next-line no-unused-vars
import React from "react";
import CssLogo from "../img/cssLogoHeight80px.png";
import MeImg from "./Meimg";

const header = () => {
  return (
    <div>
      <header
        className="reheader
        text-[2rem] sm:text-[2.5rem] lg:text-[3rem] "
      >
        <h1 className="reheaderh1 ">Brett Baker</h1>
        <img src={CssLogo} alt="CssLogo" className="reheaderimg" />
        <MeImg />
        <button
          className=" border=2 textMe absolute left-[10px] top-[101px] block
         rounded-md border-solid border-black bg-gray-400 p-2
        text-xs text-black hover:bg-gray-600 hover:text-varLIGHTDUCKHEAD sm:top-[123px] md:hidden"
        >
          <a href="sms:14696673305">Send Text</a>
        </button>
        <button
          className="emailMe border=2  absolute right-[10px] top-[101px] block
         rounded-md border-solid border-black bg-gray-400 p-2
         text-xs text-black hover:bg-gray-600 hover:text-varLIGHTDUCKHEAD xs:top-[101px] sm:right-[20px] 
         sm:top-[122px] md:right-[30px] md:top-[125px] lg:right-[50px] lg:top-[135px]"
        >
          <a href="mailto:contact@mybabb.com">Email Me</a>
        </button>
      </header>
    </div>
  );
};

export default header;
