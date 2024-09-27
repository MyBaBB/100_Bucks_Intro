// eslint-disable-next-line no-unused-vars
import React from "react";
import { GiLightningTear } from "react-icons/gi";
import { RiLinksFill } from "react-icons/ri";
import { MdOutlineTimer } from "react-icons/md";
import { SlEyeglass } from "react-icons/sl";
import { SiGooglechrome } from "react-icons/si";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { GiTropicalFish } from "react-icons/gi";
import { TbFishHook } from "react-icons/tb";
import { FaPlusCircle } from "react-icons/fa";
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
import { GiAnglerFish } from "react-icons/gi";
import ScubaSpear from "./ScubaManFolder/ScubaSpear";
import DiverDown from "./ScubaManFolder/DiverDown";
import "./ScubaManFolder/DiverDown.css";
import FreeKindleBook from "./FreeKindlebook/FreeKindleBook";
import ExampleButton from "./ExampleButtonEmail";
import ExampleButtonLandingPage from "./ExampleButtonLandingPage";
const TopSection = () => {
  return (
    <div>
      <a href="#ScubaMan">
        <div
          className=" dataToolTip3 diverDownWrapper absolute left-[1rem]
             top-[9rem] w-fit
             font-Aclonica-Regular sm:top-[10.5rem]
            xxxs:left-[2rem]"
          data-tool-tip="To The Bottom"
        >
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
          <FreeKindleBook />
          <div className="anchorWrapper relative flex justify-center ">
            <a href="https://mybabb.github.io/BasicEmail_gh_pages/">
              <div
                id="emailPros"
                className="scroll-mt-[7rem] mt-4 justify-center pb-2 text-center font-LibreBaskerville-Bold  
           text-4xl text-green-400 underline"
              >
                <span className="landingPage ">Email Template Pros: </span>
                <button></button>

                {/* make tricky lg:hidden */}
                <a href="#">
                  <span
                    className="dataToolTip15   scubaSpearWrapper absolute   -top-2 right-20 z-0 
                    hidden font-Aclonica-Regular sm:block lg:hidden  "
                    data-tool-tip="Back To Top"
                  >
                    <ScubaSpear />
                  </span>
                </a>
              </div>
            </a>
          </div>
          < ExampleButton />
          <p
            className="objectiveParagraph m-auto w-[90%]  p-[12px]
        text-justify text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]
        md:text-[28px] lg:p-[52px] xxs:p-[22px] xxs:text-[16px] xs:p-[32px] xs:text-[20px] "
          >
            <PiLinkBold className="-mt-1 inline-block text-blue-400" />
            &nbsp;
            <a href="https://mybabb.github.io/New-Email-Template/">
              <h1 className="inline-block text-4xl text-green-400 underline hover:text-blue-300">
                Email template:
              </h1>
            </a>
            &nbsp;Save time by allowing you to reuse professionally designed
            emails. Whether it&apos;s invitations, sales messages, thank-you
            notes, or holiday greetings, templates streamline the process. With
            over 4.1 billion active email users globally, having efficient
            communication is essential.
           

            
            < ExampleButtonLandingPage />
            <PiLinkBold className="-mt-1 inline-block text-blue-400" />

            &nbsp;
            <a href="https://mybabb.github.io/BetterMcTransport/">
              <h2 className="inline-block text-4xl text-green-400 underline hover:text-blue-300">
                Custom Landing Page:
              </h2>
            </a>
            &nbsp;Created to appeal to different types of customers. The
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
              <span className="font-LibreBaskerville-Bold text-2xl text-green-300 ">
                Advanced Custom Web Parts Require Negotiation.
              </span>
              <a href="#commissionService">
                <p className="my-4 text-4xl text-amber-200 transition duration-300 hover:opacity-70">
                  <u>Unless your Commission Based - See Below/click</u>
                </p>
              </a>
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
                  <RiDoubleQuotesR className="Quotes mb-6 inline-block text-blue-400" />
                </span>
              </p>
              {/*make tricky lg:hidden  */}
              <a href="#">
                <span
                  className="dataToolTip14 scubaSpearWrapper absolute -top-2 right-20 z-0 hidden 
                   font-Aclonica-Regular sm:block lg:hidden"
                  data-tool-tip="Back To Top"
                >
                  <ScubaSpear />
                </span>
              </a>
            </div>
          </div>
          <section className="tropicalFish  mx-32 text-[8px] xxxs:text-[10px] xxs:text-[12px] xs:text-[20px] ">
            <div className="my-1">
              {" "}
              <GiTropicalFish className="inline-block text-green-400 " />
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
              <span className="inline-block text-green-500">
                <TbMailFast />
              </span>
              Quick-Send Pro Email Template.
            </div>
            <GiTropicalFish className="inline-block text-green-400 " />
            &nbsp;
            <span className="underline decoration-green-400">Level 2</span>
            &nbsp;
            <TiEqualsOutline className="TiEqualsOutline text-green-400" />
            &nbsp;$200&nbsp;
            <span className="inline-block text-green-500">
              <TbMailFast />
            </span>
            Quick Send Pro Email Template &nbsp;
            <TiPlus className="TiPlus " />
            &nbsp;Social Media Links.
            <div className="my-1">
              <GiTropicalFish className="inline-block text-green-400 " />
              &nbsp;
              <span className="underline decoration-green-400">Level 3</span>
              &nbsp;
              <TiEqualsOutline className="TiEqualsOutline text-green-400" />
              &nbsp;$500&nbsp;
              <span className="inline-block text-green-500">
                <TbMailFast />
              </span>
              All of Above
              <TiPlus className="TiPlus text-green-400 " />
              <TiPlus className="TiPlus text-green-400" />
              &nbsp;Custom Landing Page.
            </div>
            <div className="mb-4 mt-1">
              <GiTropicalFish className="inline-block text-green-400 " />
              &nbsp;
              <span className="underline decoration-green-400">Level 4</span>
              &nbsp;
              <TiEqualsOutline className="TiEqualsOutline text-green-400" />
              &nbsp;$700&nbsp;
              <span className="inline-block text-green-500">
                <TbMailFast />
              </span>
              Everything &nbsp;
              <TiPlus className="TiPlus text-green-400 " />{" "}
              <TiPlus className="TiPlus text-green-400 " />
              &nbsp;Secure Web-Mail to Gmail Integration.
            </div>
          </section>
          <div className="m-auto mb-[2rem] mt-8 w-[80%] font-Itim-Regular text-green-300">
            <span className="inline-block text-center ">
              <span className=" xxxs:text-[10px] xxs:text-[12px] xs:text-[20px] ">
                &nbsp;Integrating A{" "}
                <span className="text-green-200">Custom Landing Page</span>{" "}
                &nbsp;
                <span className="inline-block  text-green-400">
                  {" "}
                  <FaPlusCircle size={10} />
                </span>
                &nbsp;&nbsp;<span className="text-green-200">Web-Mail</span>{" "}
                will streamline management, enhance security, and provide a
                seamless experience across devices.
              </span>
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
         
          <div className="p-8 text-justify  text-3xl sm:mx-[4rem]">
            <span className="IoDiamondSharp inline-block pb-1">
              <TbFishHook />
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
              <TbFishHook />
            </span>
            <span className="text-3xl text-green-400 underline">
              &nbsp;Using templates:
            </span>
            <br /> Helps you appear polished and proficient. Despite spending
            only a few minutes crafting an email, you&apos;ll still convey a
            professional image.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <TbFishHook />
            </span>
            <span className="text-3xl text-green-400 underline">
              &nbsp;Conversion Rates:
            </span>
            <br /> Well-designed, visually appealing emails can increase
            click-through rates by up to 14% and conversion rates by 10%.
            Templates provide the foundation for creating compelling content.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <TbFishHook />
            </span>
            <span className="text-3xl text-green-400 underline">
              &nbsp;Brand Identity:
            </span>
            <br /> Templates keep your messaging on brand, reinforcing your
            company&apos;s identity. Whether it&apos;s a sales pitch or a
            customer service response, consistency matters.
            <br />
            <span className="IoDiamondSharp inline-block pb-1">
              <TbFishHook />
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
                    className="dataToolTip16 scubaSpearWrapper absolute -top-2 right-20 z-0 hidden font-Aclonica-Regular 
                     sm:block"
                    data-tool-tip="Back To Top"
                  >
                    <ScubaSpear />
                  </span>
                </a>
              </div>
            </a>
          </div>

          <div className="p-8 text-center text-3xl sm:text-4xl">
            <span className="my-4 inline-flex    ">
              <GiAnglerFish size={18} className="text-blue-300" />
            </span>
            &nbsp;&nbsp;Serves a single and focused purpose.
            <br />
            <span className="my-4 inline-flex  ">
              <GiAnglerFish size={18} className="text-blue-300" />
            </span>
            &nbsp;&nbsp;Helps Visitors to Become Customers.
            <br />
            <span className="my-4 inline-flex  ">
              <GiAnglerFish size={18} className="text-blue-300" />
            </span>
            &nbsp;&nbsp;Can be click-through or lead generation based.
            <br />
            <span className="my-4 inline-flex  ">
              <GiAnglerFish size={18} className="text-blue-300" />
            </span>
            &nbsp;&nbsp;It Can be customized to appeal to different types of
            Buyers.
            <br />
            <span className="my-4 inline-flex  ">
              <GiAnglerFish size={18} className="text-blue-300" />
            </span>
            &nbsp;&nbsp;It helps to Target a Specific Type of Customer
            <br />
            <span className="my-4 inline-flex  ">
              <GiAnglerFish size={18} className="text-blue-300" />
            </span>
            &nbsp;&nbsp;Allows for easier testing and optimization
            <br />
          </div>

          <div className="relative flex justify-center p-8 text-center text-3xl sm:text-5xl">
            <p
              className="objectiveParagraph mt-[0rem]
                
               p-[12px]  text-[12px] sm:p-[42px] sm:text-[24px] md:p-[52px]

               md:text-[32px]  lg:p-[52px]  xxs:p-[22px] xxs:text-[12px]  xs:p-[32px]  xs:text-[14px]"
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

        <hr className="objectiveDivider" />
        <div className="m-auto my-1 w-[80%]">
          <div
            id="commissionService"
            className="mt-4 scroll-mt-[12rem] text-center font-Changa-Regular
               text-2xl text-white sm:text-3xl"
          >
            Commission Service
          </div>
          <span className="mt-4 block text-center  text-2xl text-green-300 md:text-5xl">
            <p className="m-auto mt-2 text-base xs:text-3xl">
              If your on Commission - I take care of everything for only{" "}
              <span className="text-green-100">
                <span className="whitespace-nowrap">$100 earnest money.</span>
              </span>
              <br />
              Upon approval of your product, I will become an Affiliate of your
              Wordpress/Woo-Commerce Website.
              <br />
              I will receive a commission based on your sales that I send your
              way.
              <br /> I will send you customers from my SEO optimized Landing
              website and use various other optical techniques to increase
              <span className="whitespace-nowrap"> Organic Viewers</span>
            </p>
            <p className="m-auto mt-2 text-base xs:text-3xl">
              Are you struggling to attract customers to your website? Are you
              tired of investing in websites that yield no results, or have you
              spent valuable time creating a website that falls short of your
              expectations and looks generic? While your website may function
              well for sales and inventory management, are your sales still
              lacking?
            </p>

            <p className="m-auto mt-2 text-base xs:text-3xl">
              I can help drive sales and bring customers your way. I work on
              commission, meaning you only pay a small percentage of your sales.
              I specialize in creating effective landing pages that boost sales
              without costing you thousands upfront.
            </p>
            <p className="m-auto mt-2  text-base xs:text-3xl">
              If, in the future, you decide you no longer wish to pay
              commission, you can purchase your advertising campaign from me and
              continue independently or just tell me to stop at any time. My
              expertise lies in helping struggling businesses achieve full
              stride with only a $100 budget.
            </p>
          </span>
        </div>
      </section>
    </div>
  );
};

export default TopSection;
