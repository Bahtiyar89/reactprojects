import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import SectionOne from "../components/SectionOne";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/navbar";
import Sidebar from "../components/sideBar";
import {
  hemoObjOne,
  hemoObjThree,
  hemoObjTwo,
} from "../components/InfoSection/Data";
import Services from "../components/services";
import Footer from "../components/footer";

const Home = () => {
  const [isOpen, seTisOpen] = useState(false);

  const toggle = () => {
    seTisOpen(!isOpen);
  };

  //console.log(JSON.parse(localStorage.getItem("user")));
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <HeroSection /> }*/}
      <SectionOne />
      {/* <InfoSection {...hemoObjOne} />
      <InfoSection {...hemoObjTwo} />
      <Services />
      <InfoSection {...hemoObjThree} />*/}
      <Footer />
    </>
  );
};

export default Home;
