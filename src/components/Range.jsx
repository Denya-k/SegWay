import React, { useState } from 'react'
import "../sass/range.scss"

export default function Range() {
    const [hoverImg1, seHoverImg1] = useState(false)
    const [hoverImg2, seHoverImg2] = useState(false)
    const [hoverImg3, seHoverImg3] = useState(false)
    const [hoverImg4, seHoverImg4] = useState(false)
  return (
    <div className="wrapper">
        <div className="range-icons__list">
                <div 
                    onMouseOver={e => seHoverImg1(true)}
                    onMouseOut={e => seHoverImg1(false)}
                    className="range-icons__item"
                >
                    <img 
                        src={!hoverImg1 ? 
                            require("../assets/img/range/range1_gr.svg").default
                        :
                            require("../assets/img/range/range1_wh.svg").default
                        } 
                        alt="range icon" 
                    />
                    <span>
                        Delivery within 1 business day
                    </span>
            </div>
            <div 
                onMouseOver={e => seHoverImg2(true)}
                onMouseOut={e => seHoverImg2(false)}
                className="range-icons__item"
            >
                    <img 
                        src={!hoverImg2 ? 
                            require("../assets/img/range/range2_gr.svg").default
                        :
                            require("../assets/img/range/range2_wh.svg").default
                        }
                        alt="range icon" 
                    />
                    <span>
                        Basic 1 year arranty
                    </span>
            </div>
            <div 
                onMouseOver={e => seHoverImg3(true)}
                onMouseOut={e => seHoverImg3(false)}
                className="range-icons__item"
            >
                    <img 
                       src={!hoverImg3 ? 
                            require("../assets/img/range/range3_gr.svg").default
                        :
                            require("../assets/img/range/range3_wh.svg").default
                        }
                        alt="range icon" 
                    />
                    <span>
                        After Sales Support
                    </span>
            </div>
            <div 
                 onMouseOver={e => seHoverImg4(true)}
                 onMouseOut={e => seHoverImg4(false)}
                 className="range-icons__item"
            >
                    <img 
                        src={!hoverImg4 ? 
                            require("../assets/img/range/range4_gr.svg").default
                        :
                            require("../assets/img/range/range4_wh.svg").default
                        }
                        alt="range icon" 
                    />
                    <span>
                        Up to 40 miles per charge
                    </span>
            </div>
        </div>

        <div className="range-card">
            <div className="range-card__text">
                <h2 className="range-title">
                    Up to 40 miles of range 
                    on a single charge
                </h2>
                <p>
                    With a range of up to 40 miles, the longest range on the market, and a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from San Francisco Bay Area to Palo Alto on a single charge.
                </p>
            </div>

            <div className="range-card__img">
                <img 
                    src={require("../assets/img/range/range40m.svg").default} 
                    alt="40 miles" 
                />
            </div>
            
        </div>
    </div>
  )
}
