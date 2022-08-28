import React from 'react'
import video from "../assets/img/packing1.png";
import img2 from "../assets/img/packing2.png";
import "../sass/packing.scss"

export default function PackingList() {
  return (
    <div className="packing">
      <div className="wrapper packing__list">
          <div className="">
              <h1 className="packing__list-title">PACKING LIST</h1>
              {/* <iframe src="" frameborder="0"> */}
                  <img src={video} alt="video" />
              {/* </iframe> */}
          </div>
          <div className="packing__img">
              <img className="ellipse__img" src={img2} alt="Ellipse" />
          </div>
      </div>
    </div>
  )
}
