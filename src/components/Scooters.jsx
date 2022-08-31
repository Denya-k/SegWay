import React from 'react'
import scooter1 from "../assets/img/scooters/scooter1.svg"
import scooter2 from "../assets/img/scooters/scooter2.svg"
import scooter3 from "../assets/img/scooters/scooter3.svg"
import scooter4 from "../assets/img/scooters/scooter4.svg"
import scooter5 from "../assets/img/scooters/scooter5.svg"
import scooter6 from "../assets/img/scooters/scooter6.svg"
import scooter7 from "../assets/img/scooters/scooter7.svg"
import scooter8 from "../assets/img/scooters/scooter8.svg"
import scooter9 from "../assets/img/scooters/scooter9.svg"
import scooter10 from "../assets/img/scooters/scooter10.svg"
import scooter11 from "../assets/img/scooters/scooter11.svg"
import scooter12 from "../assets/img/scooters/scooter12.svg"
import scooter13 from "../assets/img/scooters/scooter13.svg"
import accessuare1 from"../assets/img/scooters/accessuare1.svg"
import "../sass/scooters.scss"

export default function Scooters() {
    const skooters = [
        {name: "KS E22", src: `${scooter1}`},
        {name: "KS ES1L", src: `${scooter2}`},
        {name: "KS AIR T15", src: `${scooter3}`},
        {name: "KS F30", src: `${scooter4}`},
        {name: "KS E45", src: `${scooter5}`},
        {name: "KS MAX", src: `${scooter6}`},
        {name: "KS MAX", src: `${scooter7}`},
        {name: "KS ES2", src: `${scooter8}`},
        {name: "KS ES3", src: `${scooter9}`},
        {name: "EKS ZING E8", src:`${scooter10}`},
        {name: "EKS ZING E10", src: `${scooter11}`},
        {name: "EKS ZING E12", src: `${scooter12}`},
        {name: "KS ES4", src: `${scooter13}`},
        {name: "ACCSESSORIES", src: `${accessuare1}`}
    ]
  return (
    <div className="scooters">
        <div className="wrapper" >
            <div className="scooters-scooter__list" >
                {skooters.map((item,index) =>  
                    <div className="scooters-scooter__item" key={index}>
                        <div>
                            <img src={item.src} alt="Scooter img" />
                            <span>{item.name}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
