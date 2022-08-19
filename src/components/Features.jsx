import React from 'react'
import "../sass/features.scss"
import features1 from "../assets/img/features/features1.svg"
import features2 from "../assets/img/features/features2.svg"
import features3 from "../assets/img/features/features3.svg"
import features4 from "../assets/img/features/features4.svg"
import features5 from "../assets/img/features/features5.svg"
import features6 from "../assets/img/features/features6.svg"
import features7 from "../assets/img/features/features7.svg"
import features8 from "../assets/img/features/features8.svg"

const features =[
    {id:1, src:`${features1}`, title:"10''", p:"Pneumatic Tires"},
    {id:2, src:`${features2}`, title:"LED", p:"Front LED Lights"},
    {id:3, src:`${features3}`, title:"18.6 mph", p:"Max Speed"},
    {id:4, src:`${features4}`, title:"40.4 Miles", p:"Max Range"},
    {id:5, src:`${features5}`, title:"20%", p:"Hill Grade"},
    {id:6, src:`${features6}`, title:"IPX5", p:"Water-Resistant"},
    {id:7, src:`${features7}`, title:"6H", p:"Fast Charging"},
    {id:8, src:`${features8}`, title:"551Wh", p:"Battery"},
]

export default function Features() {
  return (
    <div className="features">
        <div className="wrapper ">
            <h1 className="features-features__title">IMRPESIVE FEATURES</h1>
            <div className="features-features__list">
                {features.map((item) => 
                    <div className="features-features__item" key={item.id}>
                        <div className="features-features__item-img">
                            <img src={item.src} alt="Features img" />
                        </div>
                        <h3 className="title">{item.title}</h3>
                        <span className="p">{item.p}</span>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
