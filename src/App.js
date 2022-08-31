import React from "react";
import Battery from "./components/Battery";
import Control from "./components/Control";
import Download from "./components/Download";
import DualBrakingSystem from "./components/DualBrakingSystem";
import FastCharging from "./components/FastCharging";
import Features from "./components/Features";
import Folding from "./components/Folding";
import Footer from "./components/Footer";
import Gradient from "./components/Gradient";
import Header from "./components/Header";
import KickScooter from "./components/KickScooter";
import LedLight from "./components/LedLight";
import Ninebot from "./components/Ninebot";
import Owner from "./components/Owner";
import PackingList from "./components/PackingList";
import Protective from "./components/Protective";
import Rectangle from "./components/Rectangle";
import Regenerative from "./components/Regenerative";
import Reviews from "./components/Reviews";
import RidingModes from "./components/RidingModes";
import Scooters from "./components/Scooters";
import scooterImg from "./assets/img/ninebot.svg"
import scooterCard from "./assets/img/ninebot_card.svg"
import scooterFirst from "./assets/img/scooter_ninebot.svg"
import Range from "./components/Range";
import Accessories from "./components/Accessories";
import Compare from "./components/Compare";
import OtherModels from "./components/OtherModels";

function App() {
  return (
    <div className="App">
      <Header />
      <Owner />
      <Scooters />
      <Rectangle />
      <Ninebot 
        img1={scooterFirst} 
        right={"158px"}
      />
      <Range />
      <PackingList />
      <Accessories />
      <Gradient />
      <Features />
      <KickScooter />
      <Battery />
      <DualBrakingSystem />
      <LedLight />
      <Folding />
      <Regenerative />
      <FastCharging />
      <RidingModes />
      <Download />
      <Compare />
      <Protective />
      <Reviews />
      <Control />
      <Ninebot 
        img1={scooterImg} 
        img2={scooterCard}
      />
      <OtherModels />
      <Footer />
    </div>
  );
}

export default App;
