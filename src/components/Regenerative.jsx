import React from 'react'
import "../sass/battery.scss"
import regenerative from "../assets/img/regenerative.svg"

export default function Regenerative() {
  return (
    <div className="battery">
        
        <div className="wrapper ">
            <div className="battery-content">
                <h1 className="battery-battery__title">
                    REGENERATIVE BRAKE FOR POWER RECYCLE
                </h1>
                <p className="battery-battery__text">
                    The innovative regenerative brake system turns Ninebot
                    KickScooter MAX into an electric vehicle powered by electricity
                    and recycled energy from riding. Energy will be collected from
                    regenerative braking and distrubuted when you need a boost.
                </p>
            </div>
        </div>

        <img 
            src={regenerative}
            alt="Regenerative" 
        />
    </div>
  )
}