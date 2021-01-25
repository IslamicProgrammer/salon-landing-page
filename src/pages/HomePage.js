import React from "react";
import About from "../components/About/About";
import Carusel from "../components/Carusel/Carusel";
import Category from "../components/Category/Category";
import Contact from "../components/Contact/Contact";
import Expert from "../components/Expert/Expert";
import TopFooter from "../components/Footer/TopFooter";
import Galery from "../components/Galery/Galery";
import HeaderSection from "../components/Header/HeaderSection";
import MainNav from "../components/Navigation/MainNav";
import Pricing from "../components/Pricing/Pricing";
import Proccess from "../components/Process/Process";

const HomePage = ({ openBar, setOpenBar, openoScial, setOpenSocial }) => {
  return (
    <>
      <MainNav
        openBar={openBar}
        setOpenBar={setOpenBar}
        openoScial={openoScial}
        setOpenSocial={setOpenSocial}
      />
      <HeaderSection />
      <About />
      <Category />
      <Proccess />
      <Expert />
      <Carusel />
      <Pricing />
      <Galery />
      <Contact />
      <TopFooter />
    </>
  );
};

export default HomePage;
