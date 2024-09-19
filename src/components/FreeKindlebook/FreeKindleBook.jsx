// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FreeKindleBook.css";

const FreeKindleBook = () => {
  return (
    <div>
      <div className="relative m-auto flex w-fit font-DMSerifDisplay-Italic  ">
        <a
          href="https://amzn.to/3XniQUG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="dataToolTip33 "
            data-tool-tip='" Building Your Personal Brand "'
          >
            <p
              className="aboutBrandingBookButton m-auto mt-2 w-fit rounded-3xl bg-gradient-to-b from-red-400
                           to-red-900 px-3 py-1 hover:from-red-900 hover:to-red-400   "
            >
              <button className="aboutBrandingBookButton  relative flex font-LibreBaskerville-Regular text-lg  ">
                Free Kindle Book
              </button>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FreeKindleBook;
