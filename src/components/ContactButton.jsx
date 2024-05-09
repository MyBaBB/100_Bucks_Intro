// eslint-disable-next-line no-unused-vars
import React from "react";
import  Beginner from  ".././img/beginner.svg";
import  BeginnerFlip  from   ".././img/beginnerFlip.svg";
const ContactButton = () => {
  return (
    <div className=" w-[55%] sm:w-[25%] m-auto">
      <a href="https://resume-hub.mybabb.com/ "    >
        <div className="reContactButtonWrapper  ">
          <div
            className=" reContactButton   mt-2 
            relative flex items-center justify-center  
         content-center  whitespace-nowrap rounded-full border  border-solid
          border-slate-900 bg-gradient-to-b from-slate-300 to-slate-500 
          hover:bg-gradient-to-t  p-2  text-center text-[1rem] sm:mt-10 sm:p-3
          sm:text-3xl sm:text-[1.5rem] lg:text-[2rem]  dark:border-none"
          >
            <span className="span1">
              <img
                src={Beginner}
                alt="Beginner"
                className="w-8 h-8 inline-block"/>
             </span>
            <span className="z-50 mb-2 text-green-400 font-Aclonica-Regular ">
              &nbsp;Portfolio Hub&nbsp;
            </span>
            <span className="span1">
              <img
                src={BeginnerFlip}
                alt="Beginner Flip"
                className="w-8 h-8 inline-block"/>
             </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactButton;
