import React, { useState } from "react";
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
import scooterImg from "./assets/img/ninebot_scooter2.svg"
import scooterCard from "./assets/img/ninebot_card.svg"
import scooterFirst from "./assets/img/scooter_ninebot.svg"
import Range from "./components/Range";
import Accessories from "./components/Accessories";
import Compare from "./components/Compare";
import OtherModels from "./components/OtherModels";
import SegWayNinebot from "./components/SegWayNinebot";
import scootersArr from "./components/CompareArr";
import { Provider } from "react-redux";
import { store } from "./redux"; 

function App() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const handlerClick = () => {
    setIsCartMenuVisible(false)
  }
  return (
    <Provider store={store}>
      <div className="App" >
        <Header isCartMenuVisible={isCartMenuVisible} setIsCartMenuVisible={setIsCartMenuVisible}/>
        <div className="main" onClick={handlerClick}>
          <Owner />
          <Scooters />
          <Rectangle />
          <SegWayNinebot 
            img1={scooterFirst} 
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
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
