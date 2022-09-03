import React from 'react'

export default function RangeCard({img, title, p}) {
  return (
    <div className="range-card">
    <div className="range-card__text">
        <h2 className="range-title">
           {title}
        </h2>
        <p>
            {p}
        </p>
    </div>

    <div className="range-card__img">
        <img 
            src={img} 
            alt="40 miles" 
        />
    </div>
    
</div>
  )
}
