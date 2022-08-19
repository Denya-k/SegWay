import React from "react";
import Battery from "./components/Battery";
import Control from "./components/Control";
import Download from "./components/Download";
import DualBrakingSystem from "./components/DualBrakingSystem";
import FastCharging from "./components/FastCharging";
import Features from "./components/Features";
import Folding from "./components/Folding";
import Gradient from "./components/Gradient";
import Header from "./components/Header";
import KickScooter from "./components/KickSkooter";
import LedLight from "./components/LedLight";
import Owner from "./components/Owner";
import PackingList from "./components/PackingList";
import Protective from "./components/Protective";
import Rectangle from "./components/Rectangle";
import Regenerative from "./components/Regenerative";
import Reviews from "./components/Reviews";
import RidingModes from "./components/RidingModes";
import Skooters from "./components/Skooters";

function App() {
  return (
    <div className="App">
      <Header />
      <Owner />
      <Skooters />
      <Rectangle />

      <PackingList />

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
      <Protective />
      <Reviews />
      <Control />
    </div>
  );
}

export default App;
