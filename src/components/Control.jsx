import React from 'react'
import "../sass/control.scss"
import icon1 from "../assets/img/control/controlIcon1.svg"
import control1 from "../assets/img/control/control1.svg"

const control = [
    {id:1, src:`${icon1}`, p:"Anti-theft protection"},
    {id:2, src:`${icon1}`, p:"Dashboard"},
    {id:3, src:`${icon1}`, p:"Firmware upgrade"},
    {id:4, src:`${icon1}`, p:"Device status"},
    {id:5, src:`${icon1}`, p:"Setting and restrictions"},
    {id:6, src:`${icon1}`, p:"Training program"}
];

export default function Control() {
  return (
    <div className="control">
        <h1 className="control-title">
            CONTROL FROM YOUR SMARTHONE
        </h1>
        <span className="control-text">
            You can easily control your Segway electric scooter with your 
            smartphone via Bluetooth. Not being the key to the kickscooter, 
            it will give a signal in case of an attempt to steal. Check the 
            current speed, data on the status of the device's systems or set 
            the speed limit with a few touches.
            And the skating training program is indispensable for beginners.
        </span>

        <div className="control-content">
            <div className="control-list">
                {control.map((item) => 
                    <div className="control-item" key={item.id}>
                        <img 
                            className="control-item-img"
                            src={item.src} 
                            alt="Icon" 
                        />
                        <p className="control-item-text">
                            {item.p}
                        </p>
                    </div>
                )}
            </div>
            <img 
                src={control1} 
                alt="Iphone" 
            />
        </div>
    </div>
  )
}
