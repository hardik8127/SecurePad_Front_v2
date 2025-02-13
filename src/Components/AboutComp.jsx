import React, { useState } from "react";

//import NavbarWithBread from "./NavWithBread";
import AboutUsHero from "./AboutUsHero";
import MeettheTeam from "./MeettheTeam";
//import Footer from "./Footer";
import FooterInAbout from "./FooterInAbout";
//import TransmissionInAbout from "./TransmissionInAbout";
import Transmission from "./Transmission";
import NavWithBread from "./NavWithBread ";

const AboutComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <NavWithBread onItemClick={handleMenuItemClick} />
      <AboutUsHero />
      <MeettheTeam />
      <Transmission />
      <FooterInAbout />
    </>
  );
};

export default AboutComp;