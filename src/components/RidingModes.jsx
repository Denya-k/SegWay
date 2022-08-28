import React from 'react'
import "../sass/battery.scss"
import "../sass/riding_modes.scss"
import drivingModes from "../assets/img/drivingmodes.svg"

export default function RidingModes() {
  return (
    <div className="battery">
        
        <div className="wrapper ">
            <div className="battery-content">
                <h1 className="battery-battery__title">
                   3 RIDING MODES
                </h1>
                <p className="battery-battery__text riding__text">
                    Eco, Standart, and Sports modes can be directly
                    accessed by the intuitive LED dachboard, which also
                    displays maintenance signals,power levels,
                    Bluetooth connectivity and more.    
                </p>
            </div>
        </div>

        <img 
            src={drivingModes}
            alt="Driving Modes" 
        />
    </div>
  )
}