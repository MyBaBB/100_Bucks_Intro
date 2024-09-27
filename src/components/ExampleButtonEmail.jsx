// eslint-disable-next-line no-unused-vars
import { useState,useRef, useEffect } from "react";
 import { gsap } from "gsap";


const ExampleButton = () => {
  let Example1 = useRef('null');
  useEffect(() => {
    console.log(Example1);
    gsap.from(
      Example1,
    
       { scale: 0,
        ease: "bounce", 
        duration: 2.2,
        y: 100,
        x:-300,
        opacity: 1,
       });
   
  }, []);
   console.log(Example1);


  let Example2 = useRef('null');
  useEffect(() => {
  
    gsap.from(
      Example2,
    
      { scale: 0,
        ease: "bounce", 
        duration: 2.2,
        y: 100,
        
        opacity: 1,
       });
   
  }, []);
   console.log(Example2);


  let Example3= useRef('null');
  useEffect(() => {
  
    gsap.from(
      Example3,
    
      { scale: 0,
        ease: "bounce", 
        duration: 2.2,
        y: 100,
        x: 300,
        opacity: 1,
       });
   
   
  }, []);
   console.log(Example3);







 
  return (
    <div>
      <div className="relative m-auto mt-4  flex justify-center      ">
            <a href=" https://mybabb.github.io/New-Email-Template/" target="_blank" rel="noopener noreferrer">
              <button
                ref={el => (Example1 = el)}
                className="exampleButton1
                     relative   inline-flex items-center justify-center rounded-md
                     bg-gradient-to-b from-green-400 to-blue-500 mx-4  px-4 py-2 text:xs xs:text-2xl
                     font-medium text-white shadow-sm hover:bg-gradient-to-t focus:outline-none focus:ring-2
                     focus:ring-green-500 focus:ring-offset-2 hover:text-blue-900
                  "
              >
                Example #1
              </button>
            </a>

            <a href="https://mybabb.github.io/BasicEmail_gh_pages/" target="_blank" rel="noopener noreferrer">
              <button
                ref={el => (Example2 = el)}
                className="exampleButton2
                     relative   inline-flex items-center justify-center
                     rounded-md bg-gradient-to-b from-green-400 to-blue-500 mx-4 px-4 py-2 text:xs xs:text-2xl
                     font-medium text-white shadow-sm hover:bg-gradient-to-t focus:outline-none focus:ring-2
                     focus:ring-green-500 focus:ring-offset-2 hover:text-blue-900
                  "
              >
                Example #2
              </button>
            </a>
            <a href="https://mybabb.github.io/Pergola-Email/ " target="_blank" rel="noopener noreferrer">
              <button
                ref={el => (Example3 = el)}
                className="exampleButton3
                     relative   inline-flex items-center justify-center
                     rounded-md bg-gradient-to-b from-green-400 to-blue-500 mx-4 px-4 py-2 text:xs xs:text-2xl
                     font-medium text-white shadow-sm hover:bg-gradient-to-t focus:outline-none focus:ring-2
                     focus:ring-green-500 focus:ring-offset-2 hover:text-blue-900 
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
