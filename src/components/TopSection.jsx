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
import { PiLinkBold } from "react-icons/pi";
 
import ContactButton from "./ContactButton";
import ToolBox from "./ToolBoxFolder/ToolBox";
import { PiCrosshairSimpleFill } from "react-icons/pi";
import ScubaSpear from "./ScubaManFolder/ScubaSpear";
import DiverDown from "./ScubaManFolder/DiverDown";
import "./ScubaManFolder/DiverDown.css";
  
const TopSection = () => {
  return (
    <div>
       <a href="#ScubaMan">
            
            <div className=" dataToolTip3 diverDownWrapper absolute w-fit left-[2.5rem] top-[12rem]
            font-Aclonica-Regular"  data-tool-tip="To The Bottom">
            <DiverDown />
            </div>
            </a>
      <ToolBox />
      <section>
        <div
          className="objectiveWrapper mx-18  z-[1] mt-[6rem] from-gray-700
        to-gray-800 pt-14 shadow-stone-950 sm:mt-[8rem] dark:bg-gradient-to-b"
        >
          <ContactButton />
          <br />
          
          <br />
          <a href="#gotoLevel1">
            <div className="relative m-auto  mt-[2rem] w-fit scroll-mt-[19rem] text-blue-200 hover:text-opacity-50">
              <h2 className="text-center  font-Kingthings_Petrock text-5xl  xs:text-7xl ">
                <u className="decoration-green-400">Free Branding Service</u>
              </h2>
              <span className="relative flex justify-center">
                (with purchase of a Custom Starter Kit)
              </span>
            </div>
          </a>

          <p
            className="objectiveParagraph m-auto w-[90%]  p-[12px]
        text-justify text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
        md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px] "
          >
            <PiLinkBold className="-mt-1 inline-block text-blue-400" />
            &nbsp;
            <a href="https://mybabb.github.io/BasicEmail_gh_pages/">
              <h1 className="inline-block text-4xl text-green-400 underline hover:text-blue-300">
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
            <PiLinkBold className="-mt-1 inline-block text-blue-400" />
            &nbsp;
            <a href="https://mybabb.github.io/BetterMcTransport/">
              <h2 className="inline-block text-4xl text-green-400 underline hover:text-blue-300">
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
          <div className="anchorWrapper relative flex justify-center ">
            <div className="text-center  ">
              <p className="relative mb-4 text-center font-Changa-Regular text-3xl text-green-300 sm:text-5xl ">
                <span className="whitespace-nowrap">
                  <RiDoubleQuotesL
                    className="mb-6 inline-block
           text-blue-400  "
                  />
                  &nbsp;What
                </span>{" "}
                you will get for
                <span className="whitespace-nowrap">
                  &nbsp;$100&nbsp;
                  <RiDoubleQuotesR className="mb-6 inline-block text-blue-400" />
                </span>
              </p>
              {/*make  lg:hidden */}
              <a href="#">
                <span
                  className="dataToolTip14 scubaSpearWrapper absolute   -top-2 right-20 z-0 font-Aclonica-Regular  lg:hidden"
                  data-tool-tip="Back To Top"
                >
                  <ScubaSpear />
                </span>
              </a>
            </div>
          </div>

          <p
            className="objectiveParagraph m-auto mt-[-3rem] w-[90%]  p-[12px]
        text-justify text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
        md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px]"
          >
            <div className="my-1">
              {" "}
              <TbDiamond className="inline-block text-blue-400 " />
              &nbsp;
              <span
                id="gotoLevel1"
                className="scroll-mt-[18rem] underline decoration-green-400"
              >
                Level 1
              </span>
              &nbsp;
              <TiEqualsOutline className="TiEqualsOutline text-green-400" />
              &nbsp;$100&nbsp;
              <span className="inline-block text-blue-500">
                <TbMailFast />
              </span>
              Quick-Send Pro Email Template.
            </div>
            <div className="my-1"></div>
            <TbDiamond className="inline-block text-blue-400 " />
            &nbsp;
            <span className="underline decoration-green-400">Level 2</span>
            &nbsp;
            <TiEqualsOutline className="TiEqualsOutline text-green-400" />
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
              <span className="underline decoration-green-400">Level 3</span>
              &nbsp;
              <TiEqualsOutline className="TiEqualsOutline text-green-400" />
              &nbsp;$500&nbsp;
              <span className="inline-block text-blue-500">
                <TbMailFast />
              </span>
              All of Above
              <TiPlus className="TiPlus text-green-400 " />
              <TiPlus className="TiPlus text-green-400" />
              &nbsp;Custom Landing Page.
            </div>
            <div className="mb-4 mt-1">
              <TbDiamond className="inline-block text-blue-400 " />
              &nbsp;
              <span className="underline decoration-green-400">Level 4</span>
              &nbsp;
              <TiEqualsOutline className="TiEqualsOutline text-green-400" />
              &nbsp;$700&nbsp;
              <span className="inline-block text-blue-500">
                <TbMailFast />
              </span>
              Everything &nbsp;
              <TiPlus className="TiPlus text-green-400 " />{" "}
              <TiPlus className="TiPlus text-green-400 " />
              &nbsp;Secure Web-Mail to Gmail Integration.
            </div>
            <div className="my-1">
              <span className="block text-center">
                <GiDiamonds className="GiDiamonds" />
                &nbsp;Integrating Web-Mail with Gmail streamlines your email
                management, enhances security, and provides a seamless
                experience across devices.
              </span>
            </div>
          </p>
          <div className="mb-8 text-center font-LibreBaskerville-Bold text-2xl text-amber-200 xs:text-4xl">
            <span className="whitespace-normal">
              <RiDoubleQuotesL className="-mt-4   inline-block text-blue-400" />
              &nbsp; A Good
            </span>{" "}
            landing page is great for Capturing Attention
            <span className="whitespace-nowrap">
              {" "}
              Quickly. &nbsp;
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

            <div className="googleDiv relative m-auto flex justify-center  ">
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
                &nbsp;&nbsp; I can make it look great on all devices.(Mobile
                Responsive)
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
          <div className="anchorWrapper relative flex justify-center ">
            <a href="https://mybabb.github.io/BasicEmail_gh_pages/">
              <div
                id="emailPros"
                className="   scroll-mt-[12rem] justify-center pb-2 text-center font-LibreBaskerville-Bold  
           text-4xl text-green-400 underline"
              >
                <span className="landingPage underline1">
                  Email Template Pros:{" "}
                </span>
                {/* make lg:hidden */}
                <a href="#">
                  <span
                    className="dataToolTip15 scubaSpearWrapper absolute   -top-2 right-20 z-0 font-Aclonica-Regular lg:hidden  "
                    data-tool-tip="Back To Top"
                  >
                    <ScubaSpear z-1 />
                  </span>
                </a>
              </div>
            </a>
          </div>
          <div className="p-8 text-justify  text-3xl sm:mx-[4rem]">
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-3xl text-green-400 underline">
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
            <span className="text-3xl text-green-400 underline">
              &nbsp;Using templates:
            </span>
            <br /> Helps you appear polished and proficient. Despite spending
            only a few minutes crafting an email, you&apos;ll still convey a
            professional image.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-3xl text-green-400 underline">
              &nbsp;Conversion Rates:
            </span>
            <br /> Well-designed, visually appealing emails can increase
            click-through rates by up to 14% and conversion rates by 10%.
            Templates provide the foundation for creating compelling content.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-3xl text-green-400 underline">
              &nbsp;Brand Identity:
            </span>
            <br /> Templates keep your messaging on brand, reinforcing your
            company&apos;s identity. Whether it&apos;s a sales pitch or a
            customer service response, consistency matters.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <GiDiamonds />
            </span>
            <span className="text-3xl text-green-400 underline">
              &nbsp;Efficiency:
            </span>
            <br /> Email templates save time by allowing you to reuse
            professionally designed emails. Whether it&apos;s invitations, sales
            messages, thank-you notes, or holiday greetings, templates
            streamline the process. With over 4.1 billion active email users
            globally, having efficient communication is essential.
            <br />
          </div>
          <div className="anchorWrapper placeholder: relative flex  justify-center">
            <a href="https://mybabb.github.io/BetterMcTransport/">
              <div
                id="landingPagePros"
                className="scroll-mt-[12rem] pt-2 text-center   text-4xl font-bold
                text-green-400 underline"
              >
                <span className="landingPagePros   underline1 font-LibreBaskerville-Bold">
                  Landing Page Pros:{" "}
                </span>

                <a href="#">
                  <span
                    className="dataToolTip16 scubaSpearWrapper absolute -top-2 right-20 z-0 
                     font-Aclonica-Regular"
                    data-tool-tip="Back To Top"
                  >
                    <ScubaSpear />
                  </span>
                </a>
              </div>
            </a>
          </div>
          <div className="p-8 text-center text-3xl sm:text-5xl">
            <span className="my-1 inline-flex whitespace-nowrap   ">
              <PiCrosshairSimpleFill className="text-blue-400" />
              &nbsp;&nbsp;Serves
            </span>
            <span>&nbsp;a single and focused purpose.</span>
            <br />

            <span className="my-1 inline-flex whitespace-nowrap ">
              <PiCrosshairSimpleFill className="text-blue-400" />
              &nbsp;&nbsp; Helps
            </span>
            <span>&nbsp;Visitors to Become Customers.</span>
            <br />

            <span className="my-1 inline-flex whitespace-nowrap ">
              <PiCrosshairSimpleFill className="text-blue-400" />
              &nbsp;&nbsp; Can be
            </span>
            <span>&nbsp;click-through or lead generation based.</span>
            <br />

            <span className="my-1 inline-flex whitespace-nowrap ">
              <PiCrosshairSimpleFill className="text-blue-400" />
              &nbsp;&nbsp; It Can
            </span>
            <span>
              &nbsp;be customized to appeal to different types of Buyers.
            </span>
            <br />

            <span className="my-1 inline-flex whitespace-nowrap ">
              <PiCrosshairSimpleFill className="text-blue-400" />
              &nbsp;&nbsp; It helps
            </span>
            <span>&nbsp;to Target a Specific Type of Customer</span>
            <br />

            <span className="my-1 inline-flex whitespace-nowrap ">
              <PiCrosshairSimpleFill className="text-blue-400" />
              &nbsp;&nbsp; Allows
            </span>
            <span>&nbsp;for easier testing and optimization </span>
            <br />
            <div className="my-1">
              <span className="mt-10 block text-center  text-2xl text-green-300 md:text-5xl">
                <span className="whitespace-nowrap"></span>
                <span className=" font-LibreBaskerville-Bold">
                  Advanced Custom Web Parts Require Negotiation.
                </span>
              </span>
            </div>

            <div className="relative flex justify-center">
              <p
                className="objectiveParagraph mt-[0rem]
              p-[12px] text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
               md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px]"
              >
                <span className="mb-2 block text-left ">
                  <u className="underline decoration-green-400">
                    Levels&nbsp;1 - 2
                  </u>
                  &nbsp;
                  <TiEqualsOutline className="inline-block text-green-400" />
                  &nbsp; Do Not require a Domain and have No Monthly Charge.
                </span>

                <span className="block text-left ">
                  <u className="underline decoration-green-400">
                    Levels&nbsp;3 - 4
                  </u>
                  &nbsp;
                  <TiEqualsOutline className="inline-block text-green-400" />
                  &nbsp;&nbsp;Do Require a Domain and a Monthly Charge.
                </span>
                <br />

                <span className="block text-left ">
                  <u className="underline decoration-green-400">
                    A&nbsp;New&nbsp;&nbsp;Domain
                  </u>
                  &nbsp; &nbsp;
                  <TiEqualsOutline className="inline-block text-green-400" />
                  &nbsp;is $50 plus Domain Name cost and $25 a month
                </span>
                <span className="block text-left">
                  <u className="underline decoration-green-400">
                    Domain Transfer
                  </u>
                  &nbsp;
                  <TiEqualsOutline className="inline-block text-green-400" /> a
                  flat rate of $100 and $25 a month.
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
