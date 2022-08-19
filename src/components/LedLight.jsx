import React from 'react'
import "../sass/ledlight.scss"
import ledLight from "../assets/img/ledlight.svg"

export default function LedLight() {
  return (
    <div className="battery">
        
        <div className="wrapper ">
            <div className="battery-content">
                <h1 className="battery-battery__title">
                    BUILT-IN FRONT LED LIGTH
                </h1>
                <p className="battery-battery__text">
                   Front-facing lights are designed with 2.5w high-bightness
                   LED light to illuminate the path ahead of you and increase
                   your visibility to others around you. 
                </p > 
                <p className="battery-battery__desclimer">
                    *Disclaimer: for your safety, please try not to ride at night
                </p>
            </div>
        </div>

        <img 
            src={ledLight}
            alt="Battery Backgroud" 
        />
    </div>
  )
}