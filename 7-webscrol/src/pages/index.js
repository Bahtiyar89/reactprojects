import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/navbar";
import Sidebar from "../components/sideBar";
import {
  hemoObjOne,
  hemoObjThree,
  hemoObjTwo,
} from "../components/InfoSection/Data";
import Services from "../components/services";
import AboutPage from "../components/about";
import OurPlansPage from "../components/ourPlans";
import WalkFamePage from "../components/walkFame";
import RoadMap from "../components/roadmap";
import Footer from "../components/footer";
import Tcelebrity from "../components/tCelebrity";
import Tclb from "../components/tCLB";
import WtireToUs from "../components/writeToUs";
import "../App.css";

const Home = () => {
  const [isOpen, seTisOpen] = useState(false);

  const toggle = () => {
    seTisOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutPage />
      <OurPlansPage />
      <WalkFamePage />
      <Tcelebrity />
      <Tclb />
      <RoadMap />
      <WtireToUs />

      {/*
      <InfoSection {...hemoObjOne} />
      <InfoSection {...hemoObjTwo} />
      <Services />
      <InfoSection {...hemoObjThree} />
      <Footer />
      */}
    </>
  );
};

export default Home;
