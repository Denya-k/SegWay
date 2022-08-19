import React from 'react'
import img1 from "../assets/img/skooters/image1.png"
import img2 from "../assets/img/skooters/image2.png"
import img3 from "../assets/img/skooters/image3.png"
import img4 from "../assets/img/skooters/image4.png"
import img5 from "../assets/img/skooters/image5.png"
import img6 from "../assets/img/skooters/image6.png"
import img7 from "../assets/img/skooters/image7.png"
import img8 from "../assets/img/skooters/image8.png"
import img9 from "../assets/img/skooters/image9.png"
import img12 from "../assets/img/skooters/image12.png"
import img13 from "../assets/img/skooters/image13.png"
import img15 from "../assets/img/skooters/image15.png"
import img17 from "../assets/img/skooters/image17.png"
import img18 from "../assets/img/skooters/image18.png"
import "../sass/skooters.scss"

export default function Skooters() {
    const skooters = [
        {name: "KS E22", src: `${img1}`},
        {name: "KS ES1L", src: `${img2}`},
        {name: "KS AIR T15", src: `${img3}`},
        {name: "KS F30", src: `${img4}`},
        {name: "KS E45", src: `${img5}`},
        {name: "KS MAX", src: `${img6}`},
        {name: "KS MAX", src: `${img7}`},
        {name: "KS ES2", src: `${img8}`},
        {name: "KS ES3", src: `${img9}`},
        {name: "EKS ZING E8", src:`${img12}`},
        {name: "EKS ZING E10", src: `${img13}`},
        {name: "EKS ZING E12", src: `${img15}`},
        {name: "KS ES4", src: `${img17}`},
        {name: "ACCSESSORIES", src: `${img18}`}
    ]
  return (
    <div className="skooters">
        <div className="wrapper" >
            <div className="skooters-skooter__list" >
                {skooters.map((item,index) =>  
                    <div className="skooters-skooter__item" key={index}>
                        <div>
                            <img src={item.src} alt="Skooter img" />
                            <span>{item.name}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
