// eslint-disable-next-line no-unused-vars
import React from 'react'
import './FreeKindleBook.css'
 
const FreeKindleBook = () => {
  return (
    <div>
      <div className="relative flex w-fit m-auto font-DMSerifDisplay-Italic  ">
        <a href="https://amzn.to/3XniQUG" target="_blank" rel="noopener noreferrer">
          <div
            className="dataToolTip33 "
            data-tool-tip='" Building Your Personal Brand "'
          >
            <p className="aboutBrandingBookButton rounded-3xl py-1 px-3 mt-2 w-fit m-auto
                           bg-gradient-to-b from-red-400 to-red-900 hover:from-red-900 hover:to-red-400   ">
              <button className="aboutBrandingBookButton  relative flex text-lg font-LibreBaskerville-Regular  ">
                Free Kindle Book
              </button>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default FreeKindleBook
