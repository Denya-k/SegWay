import React from 'react'
import "../sass/ledlight.scss"
import ledLight from "../assets/img/ledlight.svg"

export default function LedLight() {
  return (
    <div className="light">
        
        <div className="wrapper ">
            <div className="light light-content">
                <h1 className="light-light__title">
                    BUILT-IN FRONT LED LIGTH
                </h1>
                <p className="light-light__text">
                   Front-facing lights are designed with 2.5w high-bightness
                   LED light to illuminate the path ahead of you and increase
                   your visibility to others around you. 
                </p > 
                <p className="light-light__desclimer">
                    *Disclaimer: for your safety, please try not to ride at night
                </p>
            </div>
        </div>

        <img 
            className="img light__img"
            src={ledLight}
            alt="light Backgroud" 
        />
    </div>
  )
}