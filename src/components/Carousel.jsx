import React, { useEffect, useState, Children, cloneElement } from 'react'
import {FaChevronLeft,FaChevronRight } from 'react-icons/fa'
import "../sass/compare.scss"

const PAGE_WIDTH = 75

export default function Carousel({children}) {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const [nextArrow, setNextArrow] = useState(true)
    const [prevArrow, setPrevArrow] = useState(false)
    
    
    const handleLeftArrow = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH

            if (newOffset > -75) {
                setPrevArrow(false);
                setNextArrow(true)
            } else {
                setNextArrow(true)
                setPrevArrow(true)
            }
            return (Math.min(newOffset, 0))
        })
        
    }

    const handleRightArrow = () => {
        setOffset(currentOffset => {

            const newOffset = currentOffset - PAGE_WIDTH
            console.log(newOffset);
            
               if (newOffset < -150) {
                setPrevArrow(true);
                setNextArrow(false)
            } else {
                setNextArrow(true)
                setPrevArrow(true)
            }
            return (Math.max(newOffset, -225))

        })
        
    }
    useEffect(() => {
        setPages(

            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        minWidth: `25%`,
                        maxWidth: `25%`
                    }
                })
            })
        )
    },[])
  return (
    <div className="main-container">
        <FaChevronLeft 
            className={prevArrow ?  "arrow" : "arrow disabled"} 
            onClick={handleLeftArrow}
        />
        <div className="window">
            <div 
                style={{transform: `translateX(${offset}%)`}}
                className="all-pages-container"
            >
                {pages}
            </div>
        </div>
        <FaChevronRight 
            className={nextArrow ?  "arrow" : "arrow disabled"} 
            onClick={handleRightArrow}
        />
    </div>
  )
}
