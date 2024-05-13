// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ScubaMask.css";

import { MdOutlineScubaDiving } from "react-icons/md";

const ScubaMan = () => {
  return (
    <div id="ScubaMan" className=" absolute bottom-2 left-4 ml-4 flex  ">
      <a href="#">
        <div
          className="dataToolTip13 font-Aclonica-Regular z-50"
          data-tool-tip="Back To Top"
        >
          <div
            className="z-50   h-[fit] w-[fit] rounded-xl 
                       border-[1px] border-varLIGHTBLUEFEATHER bg-gray-700
                       hover:bg-black sm:block "
          >
            <div className="scubaManThird  rounded-xl  border-[2px] border-black">
              <div className="scubaManSecond rounded-xl border-[1px] border-varLIGHTBLUEFEATHER p-2 ">
                <div className="scubaManFirst rotate-[240deg] border-transparent  ">
                  <MdOutlineScubaDiving
                    size={20}
                    className="scubaMan  text-blue-200  "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ScubaMan;
