// eslint-disable-next-line no-unused-vars
import React from "react";
import "../App.css";
import Header from "./HeaderFolder/Header";
import TopSection from "./TopSection";
import CopyRight from "./Copyright";
import ThirdSection from "./ThirdSection";
import Footer from "./Footer";
const App = () => {
  return (
    <div
      className="  relative flex h-full   items-center justify-center   overflow-x-hidden
     dark:bg-gray-900"
    >
      <div>
        <Header />
        <TopSection />
        <ThirdSection />
        <Footer />
        <CopyRight />
      </div>
    </div>
  );
};

export default App;
