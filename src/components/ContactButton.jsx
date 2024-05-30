// eslint-disable-next-line no-unused-vars
import React from "react";
import Beginner from ".././img/beginner.svg";
import BeginnerFlip from ".././img/beginnerFlip.svg";
const ContactButton = () => {
  return (
    <div className=" m-auto hidden w-[55%] sm:block sm:w-[30%]">
      <a href="https://resume-hub.mybabb.com/ ">
        <div className="reContactButtonWrapper  ">
          <div
            className=" reContactButton   relative 
            mt-2 flex content-center items-center  
         justify-center  whitespace-nowrap rounded-full border  border-solid
          border-slate-900 bg-gradient-to-b from-slate-300 to-slate-500 
          p-2  text-center  text-[1rem] hover:bg-gradient-to-t sm:mt-10 sm:p-3
          sm:text-3xl sm:text-[1.5rem] lg:text-[2rem]  dark:border-none"
          >
            <span className="span1">
              <img
                src={Beginner}
                alt="Beginner"
                className="inline-block h-8 w-8"
              />
            </span>
            <span className="z-50 mb-2 -mt-4 font-Aclonica-Regular text-green-400 ">
              &nbsp;Portfolio Hub&nbsp;
            </span>
            <span className="span1">
              <img
                src={BeginnerFlip}
                alt="Beginner Flip"
                className="inline-block h-8 w-8"
              />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactButton;
