// eslint-disable-next-line no-unused-vars
import React from "react";
import { GiLightningTear } from "react-icons/gi";
import { RiLinksFill } from "react-icons/ri";
import { MdOutlineTimer } from "react-icons/md";
import { SlEyeglass } from "react-icons/sl";
import { SiGooglechrome } from "react-icons/si";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TbDiamond } from "react-icons/tb";
import { GiDiamonds } from "react-icons/gi";
import { TiEqualsOutline } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import { GrVmMaintenance } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { TfiLock } from "react-icons/tfi";
import { TbMailFast } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import ScubaMask from "./ScubaManFolder/ScubaMask";
import ContactButton from "./ContactButton";
import ToolBox from "./ToolBoxFolder/ToolBox";
import { PiCrosshairSimpleFill } from "react-icons/pi";
const TopSection = () => {
  return (
    <div>
      < ToolBox />
      <section>
      
        <div
          className="objectiveWrapper z-[500]  mx-18 mt-[6rem] from-gray-700
        to-gray-800 shadow-stone-950 sm:mt-[8rem] pt-14 dark:bg-gradient-to-b"
        >
         

          <ContactButton />
        <br />
          <ScubaMask />
          <br />
          <a href="#gotoLevel1" >
            <div className="scroll-mt-[19rem]  relative m-auto w-fit text-blue-200 hover:text-opacity-50">
              <h2 className="text-center  font-Kingthings_Petrock   xs:text-7xl ">
                <u>Beginner&apos;s Kit</u>
              </h2>
            </div>
          </a>

          <p
            className="objectiveParagraph w-[90%] m-auto  text-justify
        p-[12px] text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
        md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px] "
          >
            <FaEye className="-mt-1 inline-block text-blue-400" />
            &nbsp; &nbsp;&nbsp;
            <a href="https://mybabb.github.io/BasicEmail_gh_pages/">
              <h1 className="inline-block text-amber-200 underline hover:text-blue-300">
                Email templates:
              </h1>
            </a>
            &nbsp;save time by allowing you to reuse professionally designed
            emails. Whether it&apos;s invitations, sales messages, thank-you
            notes, or holiday greetings, templates streamline the process. With
            over 4.1 billion active email users globally, having efficient
            communication is essential.
            <br />
            <br />
            <FaEye className="-mt-1 inline-block text-blue-400" />
            &nbsp; &nbsp;
            <a href="https://mybabb.github.io/BetterMcTransport/">
              <h2 className="inline-block text-amber-200 underline hover:text-blue-300">
                Custom Landing Pages:
              </h2>
            </a>
            &nbsp;can be created to appeal to different types of customers. The
            content, page style, advertising, and offer it contains will
            determine its impact on the targeted customer group. Landing pages
            can be focused on drawing customers from a specific location,
            demographic, or individuals looking at price and quality. Easier
            testing and optimization of landing pages can be done by creating
            multiple landing pages targeted toward segmented customer
            populations.
          </p>
          <p className="relative text-5xl font-Changa-Regular text-center text-green-300 ">
           <span className="whitespace-nowrap"><RiDoubleQuotesL className="mb-6 inline-block
           text-blue-400  " />
            &nbsp;What</span> you will get for 
            <span className="whitespace-nowrap">&nbsp;$100&nbsp;
           <RiDoubleQuotesR className="mb-6 inline-block text-blue-400" />
           </span>
           </p>
          <p
            className="objectiveParagraph mt-[-3rem] w-[90%] m-auto  text-justify
        p-[12px] text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
        md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px]"
          >
           
           
           <div className="my-1"> <TbDiamond className="inline-block text-blue-400 " />
            &nbsp;
            <span
              id="gotoLevel1"
              className="scroll-mt-[16rem] underline decoration-[#85bb65]"
            >
              Level 1
            </span>
            &nbsp;
            <TiEqualsOutline className="TiEqualsOutline" />
            &nbsp;$100&nbsp;
            <span className="inline-block text-blue-500">
              <TbMailFast />
            </span>
            Quick-Send Pro Email Template.
            </div>
            
            <div className="my-1"></div>
            <TbDiamond className="inline-block text-blue-400 " />
            &nbsp;
            <span className="underline decoration-[#85bb65]">Level 2</span>
            &nbsp;
            <TiEqualsOutline className="TiEqualsOutline" />
            &nbsp;$200&nbsp;
            <span className="inline-block text-blue-500">
              <TbMailFast />
            </span>
            Quick Send Pro Email Template &nbsp;
            <TiPlus className="TiPlus " />
            &nbsp;Social Media Links.
            

            <div className="my-1">
            <TbDiamond className="inline-block text-blue-400 " />
            &nbsp;
            <span className="underline decoration-[#85bb65]">Level 3</span>
            &nbsp;
            <TiEqualsOutline className="TiEqualsOutline" />
            &nbsp;$500&nbsp;
            <span className="inline-block text-blue-500">
              <TbMailFast />
            </span>
            All of  Above
            <TiPlus className="TiPlus " />
            
            <TiPlus className="TiPlus " />
            &nbsp;Custom Landing Page.
            </div>

            <div className="mt-1 mb-4">
            <TbDiamond className="inline-block text-blue-400 " />
            &nbsp;
            <span className="underline decoration-[#85bb65]">Level 4</span>
            &nbsp;
            <TiEqualsOutline className="TiEqualsOutline" />
            &nbsp;$700&nbsp;
            <span className="inline-block text-blue-500">
              <TbMailFast />
            </span>
            Everything  &nbsp;
            <TiPlus className="TiPlus " /> <TiPlus className="TiPlus " />
            &nbsp;Secure Web-Mail to Gmail Integration.
            </div>
            
            <div className="my-1">  
              <span className="block text-center">
              <GiDiamonds className="GiDiamonds" />
              &nbsp;Integrating Web-Mail with Gmail streamlines your email
              management, enhances security, and provides a seamless experience
              across devices.
            </span>
            </div>

            
          </p>
          <div className="text-center text-4xl font-LibreBaskerville-Bold text-amber-200">
          <span className="whitespace-normal">
            <RiDoubleQuotesL className="-mt-4   inline-block text-blue-400" />
            &nbsp;
        
              A Good</span> landing page is great for Capturing Attention
               <span className="whitespace-nowrap"> Quickly.
              &nbsp;
           
            <RiDoubleQuotesR className=" -mt-4 inline-block text-blue-400" />
            </span>
            </div>

          <p
            className="objectiveParagraph mt-[-4rem]   p-[12px]
                   text-center text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
                   md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px] "
           >
            <br />
            {/* custom google button  */}
            
          <div className="googleDiv relative flex justify-center m-auto  ">
            <p className="text-left ">
              <SiGooglechrome className="inline-block text-blue-400" />
              &nbsp;&nbsp;<span className="googleG1 text-red-600">G</span>
              <span className="googleO1 text-green-600">o</span>
              <span className="googleO2 text-yellow-600">o</span>
              <span className="googleG2 text-blue-600">g</span>
              <span className="googleL text-orange-400">l</span>
              <span className="googleE text-green-600">e</span>
              &nbsp; Search Engine Optimization
              <GiLightningTear className="inline-block text-blue-300" />
              lightning fast for&nbsp;
              <span className="underline">(SEO)</span>
              <br />
              <SlEyeglass className="inline-block text-blue-400" />
              &nbsp;&nbsp; I can make
              it look great on all devices.(Mobile Responsive)
              <br />
              <MdOutlineTimer className="inline-block text-blue-400" />
              &nbsp; Quality and Perfection.
              <br />
              <RiLinksFill className="inline-block text-blue-400" />
              &nbsp; Adds custom links that Channel new customers to your
              business.
              <br />
            </p>
           </div>
          </p>
        
          <div id="emailPros"  className="pb-2 scroll-mt-[12rem] text-center text-4xl  
           font-LibreBaskerville-Bold text-amber-200 underline">
            <span className="landingPage underline1">
              Email Template Pros:{" "}
            </span>
          </div>
         
          <div className="p-8 text-3xl mx-[4rem] text-justify">
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-3xl text-amber-200 underline">
             Templates Ensure:
            </span>
            <br /> Your emails will maintain a consistent brand tone and
            message. Every team member communicates with the same professional
            demeanor, reinforcing your company&apos;s identity in every
            interaction.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-3xl text-amber-200 underline">
            &nbsp;Using templates:
            </span>
            <br /> Helps you appear polished and proficient. Despite spending
            only a few minutes crafting an email, you&apos;ll still convey a
            professional image.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-3xl text-amber-200 underline">
            &nbsp;Conversion Rates:
            </span>
            <br /> Well-designed, visually appealing emails can increase
            click-through rates by up to 14% and conversion rates by 10%.
            Templates provide the foundation for creating compelling content.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-3xl text-amber-200 underline">
            &nbsp;Brand Identity:
            </span>
            <br /> Templates keep your messaging on brand, reinforcing your
            company&apos;s identity. Whether it&apos;s a sales pitch or a
            customer service response, consistency matters.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-3xl text-amber-200 underline">
            &nbsp;Efficiency:
            </span>
            <br /> Email templates save time by allowing you to reuse
            professionally designed emails. Whether it&apos;s invitations, sales
            messages, thank-you notes, or holiday greetings, templates
            streamline the process. With over 4.1 billion active email users
            globally, having efficient communication is essential.
            <br />
          </div>
          <div id="landingPagePros" className=" scroll-mt-[12rem] pb-2 text-center text-4xl font-bold text-amber-200 underline">
            <span className="landingPagePros underline1 font-LibreBaskerville-Bold">Landing Page Pros: </span>
          </div>
          <div className="p-8 text-center text-5xl">
            
             

          <span className="whitespace-nowrap inline-flex my-1   ">
            <PiCrosshairSimpleFill className="text-blue-400" />
            &nbsp;&nbsp;Serves<span></span>&nbsp;a single and focused purpose.</span>
            <br />

            <span className="whitespace-nowrap inline-flex my-1 ">
              <PiCrosshairSimpleFill className="text-blue-400"/>&nbsp;&nbsp;<span>
                Helps</span>&nbsp;Visitors to Become Customers.</span>
            <br />
             
            <span className="whitespace-nowrap inline-flex my-1 ">
              <PiCrosshairSimpleFill className="text-blue-400"/>&nbsp;&nbsp;<span>
                Can be</span>&nbsp;click-through or lead generation based.</span>
            <br />
            
            <span className="whitespace-nowrap inline-flex my-1 ">
              <PiCrosshairSimpleFill className="text-blue-400"/>&nbsp;&nbsp;<span>
                It Can</span>&nbsp;be customized to appeal to different types of
            Buyers.</span>
            <br />          
            
            <span className="whitespace-nowrap inline-flex my-1 ">
              <PiCrosshairSimpleFill className="text-blue-400"/>&nbsp;&nbsp;<span>
                It helps</span>&nbsp;to Target a Specific Type of Customer</span>
            <br />
          
            <span className="whitespace-nowrap inline-flex my-1 ">
              <PiCrosshairSimpleFill className="text-blue-400"/>&nbsp;&nbsp;<span>
                 Allows</span>&nbsp;for easier testing and optimization </span>
            <br />
            <div className="my-1">
            <span className="mt-10 block text-center  text-2xl text-green-300 md:text-5xl">
              <span className="whitespace-nowrap">
                 
              </span>
              <span className=" font-LibreBaskerville-Bold">Advanced Custom Web Parts Require Negotiation.</span>
               </span>
            </div>


            <div className="relative flex justify-center">
            <p
              className="objectiveParagraph mt-[0rem]
              p-[12px] text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
               md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px]"
            >
              <span className="block text-left mb-2 ">
                <u className="underline decoration-green-400">Levels&nbsp;1 - 2</u>&nbsp;
                < TiEqualsOutline className="inline-block text-green-400" />
               
                &nbsp; Do Not require a Domain and have No Monthly Charge.
              </span>

              <span className="block text-left ">
                <u className="underline decoration-green-400">
                  Levels&nbsp;3 - 4</u>&nbsp;
                  < TiEqualsOutline className="inline-block text-green-400" />
                  &nbsp;&nbsp;Do Require a Domain and a Monthly Charge.</span>
              <br />
               
              <span className="block text-left "> 
                <u className="underline decoration-green-400">A&nbsp;New&nbsp;&nbsp;Domain</u>&nbsp;
                &nbsp;< TiEqualsOutline className="inline-block text-green-400" />&nbsp;is $50 plus Domain Name cost and $25 a month
              </span>
              <span className="block text-left"> 
                
                  <u className="underline decoration-green-400">Domain Transfer</u>&nbsp;
               
                  < TiEqualsOutline className="inline-block text-green-400" /> a flat rate of $100 and $25 a month.
              </span>
            </p>
            </div>
            <br />
            <p className="mb-4 mt-[-3rem] text-center">
              Monthly Charges for Web Hosting Services include:
              <br />
              &nbsp;
              <GrVmMaintenance className="inline-block text-green-400" />
              &nbsp;Maintenance &nbsp;
              <MdOutlineSupportAgent className="inline-block text-green-400" />
              &nbsp;Support &nbsp;
              <MdAddShoppingCart className="inline-block text-green-400" />
              &nbsp;Bonuses &nbsp;
              <TfiLock className="inline-block text-green-400" />
              &nbsp;SSL Certificate
              <br />
            </p>
          </div>
        </div>
        <hr className="objectiveDivider" />
      </section>
    </div>
  );
};

export default TopSection;
