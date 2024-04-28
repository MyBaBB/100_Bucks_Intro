// eslint-disable-next-line no-unused-vars
import React from "react";

const ContactButton = () => {
  return (
    <div>
      <a href="https://resume-hub.mybabb.com/">
        <div className="reContactButtonWrapper ">
          <div
            className=" reContactButton -mb-5 mt-2 
         content-center
         whitespace-nowrap rounded-full 
         border 
         border-solid
          border-slate-900 bg-varMEDBLUEFEATHER 
         p-1 text-center
         
         text-[1rem]
           
         text-black 
         active:bg-varLIGHTBLUEFEATHER sm:mt-10
         sm:p-3
         sm:text-3xl
          sm:text-[1.5rem] lg:text-[2rem]
         dark:border-none"
          >
            <span className="span1">📡</span>
            <span className="z-50 text-varLIGHTBLUEFEATHER hover:text-[#FFDB58]">
              Resume Hub
            </span>
            <span>📡</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactButton;
