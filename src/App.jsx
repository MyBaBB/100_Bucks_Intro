// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Header from "./components/HeaderFolder/Header";
import ContactButton from "./components/ContactButton";
import TopSection from "./components/TopSection";

import CopyRight from "./components/Copyright";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="w-{88%] relative flex h-full items-center justify-center  dark:bg-gray-900 ">
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
