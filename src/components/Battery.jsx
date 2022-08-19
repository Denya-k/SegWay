import React from 'react'
import "../sass/battery.scss"
import bg from "../assets/img/battery1.svg"

export default function Battery() {
  return (
    <div className="battery">
        
        <div className="wrapper ">
            <div className="battery-content">
                <h1 className="battery-battery__title">SMART BATTERY MANAGEMENT SYSTEM (SMART-BMS)</h1>
                <p className="battery-battery__text">
                    The Smart-BMS closely monitors the battery status with multiple
                    protection mechanisms to ensure battery durability
                </p>
            </div>
        </div>

        <img 
            src={bg}
            alt="Battery Backgroud" 
        />
    </div>
  )
}
