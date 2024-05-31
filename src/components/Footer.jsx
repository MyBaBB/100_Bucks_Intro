// eslint-disable-next-line no-unused-vars
import React from "react";
import ScubaSpear from "../components/ScubaManFolder/ScubaSpear";
import "../components/ScubaManFolder/ScubaSpear.css";

const Footer = () => {
  return (
    <div>
      <div className=" relative flex justify-center sm:justify-end ">
        <a
          href="mailto:howdy@mybabb.com"
          className=" text-bold relative  mb-[-1rem] mt-[-.85rem] flex w-fit rounded-lg border-[1px]
         border-varLIGHTBLUEFEATHER bg-blue-950 p-2 text-center font-Aclonica-Regular text-sm text-gray-300 hover:bg-gray-950
       sm:mr-16  sm:text-lg"
        >
          Contact@MyBaBB.com
        </a>
        <div
          className="dataToolTip13 z-50 hidden  font-Aclonica-Regular xxs:block"
          data-tool-tip="Back To Top"
        >
          <a href="#">
            <div
              id="ScubaMan"
              className="scubaSpearWrapper absolute bottom-0 left-8"
            >
              <ScubaSpear />
            </div>
          </a>
        </div>
      </div>
      <hr className="hrBottom"></hr>
    </div>
  );
};

export default Footer;
