// eslint-disable-next-line no-unused-vars
import React from "react";
import { GiLightningTear, GiScubaMask } from "react-icons/gi";
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
const TopSection = () => {
  return (
    <div>
      <section>
        <div
          className="objectiveWrapper  mx-8 mt-[1.67rem] from-gray-700
        to-gray-800 shadow-stone-950 sm:mt-[4rem] dark:bg-gradient-to-b"
        >
          <ScubaMask />
          <br />
          <a href="#gotoLevel1">
            <div className=" w-fit relative m-auto text-white hover:text-opacity-50">
          <h2 className="text-center  font-Kingthings_Petrock   xs:text-7xl ">
            <u>Beginner&apos;s Kit</u>
          </h2>
          </div>
          </a>

          <p
            className="objectiveParagraph 
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
          <p
            className="objectiveParagraph mt-[-3rem]
        p-[12px] text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
        md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px]"
          >
            <RiDoubleQuotesL className="mb-6 inline-block text-blue-400" />
            What you will get for $100
            <RiDoubleQuotesR className="mb-6 inline-block text-blue-400" />
            <br />
            <TbDiamond className="inline-block text-blue-400 " />
            &nbsp;
            <span id="gotoLevel1" className="underline decoration-[#85bb65] scroll-mt-24">Level 1</span>
            &nbsp;
            <TiEqualsOutline className="TiEqualsOutline" />
            &nbsp;$100&nbsp;
            <span className="inline-block text-blue-500">
              <TbMailFast />
            </span>
            Quick-Send Pro Email Template.
            <br />
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
            <br />
            <TbDiamond className="inline-block text-blue-400 " />
            &nbsp;
            <span className="underline decoration-[#85bb65]">Level 3</span>
            &nbsp;
            <TiEqualsOutline className="TiEqualsOutline" />
            &nbsp;$500&nbsp;
            <span className="inline-block text-blue-500">
              <TbMailFast />
            </span>
            Quick-Send Pro Email Template &nbsp;
            <TiPlus className="TiPlus " />
            &nbsp;Social Media Links. &nbsp;
            <TiPlus className="TiPlus " />
            &nbsp;Custom Landing Page.
            <br />
            <TbDiamond className="inline-block text-blue-400 " />
            &nbsp;
            <span className="underline decoration-[#85bb65]">Level 4</span>
            &nbsp;
            <TiEqualsOutline className="TiEqualsOutline" />
            &nbsp;$700&nbsp;
            <span className="inline-block text-blue-500">
              <TbMailFast />
            </span>
            Everything Above &nbsp;
            <TiPlus className="TiPlus " />
            &nbsp;Secure Web-Mail to Gmail Integration.
            <br />
            <br />
            <span className="block text-center">
              <GiDiamonds className="GiDiamonds" />
              &nbsp;Integrating Web-Mail with Gmail streamlines your email
              management, enhances security, and provides a seamless experience
              across devices.
            </span>
            <span className="block text-center mt-4 -mb-4 text-5xl text-green-300">
              <span className="whitespace-nowrap">
                <GiDiamonds className="GiDiamonds" />
              </span>
              &nbsp;Advanced Custom Web Parts Require Negotiation.
            </span>
          </p>

          <p
            className="objectiveParagraph mt-[-4rem]   p-[12px]
        
        text-center text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
        md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px] "
          >
            <RiDoubleQuotesL className="-mt-4   inline-block text-blue-400" />
            &nbsp;
            <span>
              A Good landing page is great for Capturing Attention Quickly.
              &nbsp;
            </span>
            <RiDoubleQuotesR className=" -mt-4 inline-block text-blue-400" />
            <br />
            <br />
            <p className="text-left translate-x-[22%]">
            <SiGooglechrome className="inline-block text-blue-400" />
            &nbsp;<span className="googleG1 text-red-600">G</span>
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
            <SlEyeglass className="inline-block text-blue-400" /> I can make it
            look great on all devices.(Mobile Responsive)
            <br />
            <MdOutlineTimer className="inline-block text-blue-400" />
            &nbsp; Quality and Perfection.
            <br />
            <RiLinksFill className="inline-block text-blue-400" />
            &nbsp; Adds custom links that Channel new customers to your
            business.
            <br />
          </p>
          </p>
            
            

          <div className="pb-2 text-center text-4xl font-bold text-amber-200 underline">
            <span className="landingPage underline1">
              Email Template Pros:{" "}
            </span>
          </div>
          <div className="p-8 text-2xl ">
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-amber-200 text-3xl underline">Templates Ensure:</span>
            <br />   Your emails will maintain a consistent brand tone and
            message. Every team member communicates with the same professional
            demeanor, reinforcing your company&apos;s identity in every
            interaction. 
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-amber-200 text-3xl underline">Using templates:</span>
            <br />  Helps you appear polished and proficient. Despite spending
            only a few minutes crafting an email, you&apos;ll still convey a
            professional image. 
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-amber-200 text-3xl underline">Conversion Rates:</span>
            <br /> Well-designed, visually appealing emails can increase
            click-through rates by up to 14% and conversion rates by 10%.
            Templates provide the foundation for creating compelling content. 
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-amber-200 text-3xl underline">Brand Identity:</span>
            <br /> Templates keep your messaging on brand, reinforcing your
            company&apos;s identity. Whether it&apos;s a sales pitch or a
            customer service response, consistency matters. 
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-amber-200 text-3xl underline">Efficiency:</span>
            <br /> Email templates save time by allowing you to reuse
            professionally designed emails. Whether it&apos;s invitations, sales
            messages, thank-you notes, or holiday greetings, templates
            streamline the process. With over 4.1 billion active email users
            globally, having efficient communication is essential. 
            <br />
          </div>
          <div className="pb-2 text-center text-4xl font-bold text-amber-200 underline">
            <span className="landingPage underline1">
              Landing Page Pros:{" "}
            </span>
          </div>
          <div className="p-8 text-2xl">
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            &nbsp;&nbsp;It Serves a single and focused purpose.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            &nbsp;&nbsp;Helps Visitors to Become Customers.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            &nbsp;&nbsp;Can be click-through or lead generation based.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            &nbsp;&nbsp;It Can be customized to appeal to different types of
            Buyers.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            &nbsp;&nbsp;It Can be focused on drawing customers from a specific
            location, demographic, or individuals looking at price and quality.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            &nbsp;&nbsp;Allow for easier testing and optimization by creating
            multiple landing pages targeted toward segmented customer
            populations.
            <p
              className="objectiveParagraph mt-[0rem]
              p-[12px] text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
               md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px]"
            >
              <span className="block text-left underline decoration-[#85bb65]">
                Levels&nbsp;1 - 2&nbsp;
              </span>
              <span>
                &nbsp; Do Not require a Domain and have No Monthly Charge.
              </span>

              <span className="block text-left underline decoration-[#85bb65]">
                Levels&nbsp;3 - 4
              </span>
              <span>&nbsp; Do Require a Domain and a Monthly Charge.</span>
              <br />
              <br />
              <span className="block text-left ">
                <span className="underline decoration-[#85bb65]">
                  New Domain
                </span>{" "}
                is $50 plus Domain Name cost and $25 a month
              </span>
              <span className="block text-center"></span>
              <span>
                <span className="underline decoration-[#85bb65] ">
                  Domain Transfer
                </span>{" "}
                to MyBaBB is a flat rate of $100 and $25 a month.
              </span>
            </p>
            <br />
            <p className="mb-4 mt-[-3rem] text-center">
              Monthly Charges for Web Hosting Services include:
              <br />
              &nbsp;
              <GrVmMaintenance className="inline-block text-blue-400" />
              &nbsp;Maintenance &nbsp;
              <MdOutlineSupportAgent className="inline-block text-blue-400" />
              &nbsp;Support &nbsp;
              <MdAddShoppingCart className="inline-block text-blue-400" />
              &nbsp;Bonuses &nbsp;
              <TfiLock className="inline-block text-blue-400" />
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
