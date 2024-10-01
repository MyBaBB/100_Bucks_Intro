// eslint-disable-next-line no-unused-vars
import React from "react";
import NewMe from "./MeImg.png";
import OctoArmy from "./OctoGlasses.png";
import "../NavbarFolder/Navbar.css";

import "./Header.css";
import Navbar from "../NavbarFolder/Navbar";
const Header = () => {
  return (
    <div>
      <Navbar />
      <div
        className="headerWrapper fixed
      "
      >
        <div className="m-auto   w-fit pl-4">
          <a href="https://mybabb.com">
            <div className="outerNewMeWrapper hidden md:block">
              <div className="newMeWrapper">
                <div
                  className="dataToolTip81 font-Aclonica-Regular "
                  data-tool-tip="To My Homepage"
                >
                  <div className=" relative ">
                    <img
                      id="newMew"
                      src={NewMe}
                      alt="New Me"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="https://mybabb.github.io/BetterMcTransport/">
            <p
              className="headerCenterTextBox mx-auto w-fit font-Kingthings_Petrock   text-[16px] 
         text-amber-100  hover:text-opacity-50  md:text-[20px] lg:text-[25px] xl:text-[30px]  "
            >
              <h1>Web Starter Kit</h1>
            </p>
          </a>

          <a href="https://resume-hub.mybabb.com/">
            <div className="outerOctoglassesWrapper hidden md:block">
              <div
                className="dataToolTip82 font-Aclonica-Regular"
                data-tool-tip="To Kraken"
              >
                <div className="octoglassesWrapper ">
                  <div className=" relative">
                    <img
                      src={OctoArmy}
                      alt="Octo Glasses"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
