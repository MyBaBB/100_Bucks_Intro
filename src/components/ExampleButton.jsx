import React from 'react'

const ExampleButton = () => {
  return (
    <div>
      <div className="relative m-auto mt-4  flex justify-between  w-[30%]  ">
            <a href=" https://mybabb.github.io/New-Email-Template/">
              <button
                className="
                     relative   inline-flex items-center justify-center rounded-md
                     bg-gradient-to-r from-green-400 to-blue-500   px-4 py-2 text-2xl
                     font-medium text-white shadow-sm hover:bg-gradient-to-br focus:outline-none focus:ring-2
                     focus:ring-green-500 focus:ring-offset-2 
                  "
              >
                Example #1
              </button>
            </a>

            <a href="https://mybabb.github.io/BasicEmail_gh_pages/">
              <button
                className="
                     relative   inline-flex items-center justify-center
                     rounded-md bg-gradient-to-r from-green-400 to-blue-500  px-4 py-2 text-2xl
                     font-medium text-white shadow-sm hover:bg-gradient-to-br focus:outline-none focus:ring-2
                     focus:ring-green-500 focus:ring-offset-2 
                  "
              >
                Example #2
              </button>
            </a>
            <a href="https://mybabb.github.io/Pergola-Email/ ">
              <button
                className="
                     relative   inline-flex items-center justify-center
                     rounded-md bg-gradient-to-r from-green-400 to-blue-500  px-4 py-2 text-2xl
                     font-medium text-white shadow-sm hover:bg-gradient-to-br focus:outline-none focus:ring-2
                     focus:ring-green-500 focus:ring-offset-2 
                  "
              >
                Example #3
              </button>
            </a>
          </div>
    </div>
  )
}

export default ExampleButton
