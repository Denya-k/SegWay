import React from 'react'
import icon1 from "../assets/img/compareIcon/icon1.svg"
import icon2 from "../assets/img/compareIcon/icon2.svg"
import icon3 from "../assets/img/compareIcon/icon3.svg"
import icon4 from "../assets/img/compareIcon/icon4.svg"
import icon5 from "../assets/img/compareIcon/icon5.svg"
import icon6 from "../assets/img/compareIcon/icon6.svg"
import icon7 from "../assets/img/compareIcon/icon7.svg"
import icon8 from "../assets/img/compareIcon/icon8.svg"
import icon9 from "../assets/img/compareIcon/icon9.svg"
import icon10 from "../assets/img/compareIcon/icon10.svg"
import icon11 from "../assets/img/compareIcon/icon11.2.svg"
import icon12 from "../assets/img/compareIcon/icon12.svg"
import icon13 from "../assets/img/compareIcon/icon13.svg"

export default function CompareIcons() {
  return (
    <div className="compare compare__icon__list">
        <ul>
            <li className="icon compare__icon">
                <img src={icon1} alt="Icon" />
                Max Speed
            </li>
            <li className="icon compare__icon">
                <img src={icon2} alt="Icon" />
                Range (miles)
            </li>
            <li className="icon compare__icon">
                <img src={icon3} alt="Icon" />
                Battery Capacity
            </li>
            <li className="icon compare__icon">
                <img src={icon4} alt="Icon" />
                Net Weight
            </li>
            <li className="icon compare__icon">
                <img src={icon5} alt="Icon" />
                Payload
            </li>
            <li className="icon compare__icon">
                <img src={icon6} alt="Icon" />
                Chargin Time
            </li>
            <li className="icon compare__icon">
                <img src={icon7} alt="Icon" />
                Number of Batteries
            </li>
            <li className="icon compare__icon">
                <img src={icon8} alt="Icon" />
                Motor power
            </li>
            <li className="icon compare__icon">
                <img src={icon9} alt="Icon" />
                Power Output
            </li>
            <li className="icon compare__icon">
                <img src={icon10} alt="Icon" />
                Max. Incline
            </li>
            <li className="icon compare__icon">
                <img src={icon11} alt="Icon" />
                Shock Absortion
            </li>
            <li className="icon compare__icon">
                <img src={icon12} alt="Icon" />
                Safely
            </li>
            <li className="icon compare__icon">
                <img src={icon13} alt="Icon" />
                Almosphere Light
            </li>
        </ul>
        
    </div>
  )
}
