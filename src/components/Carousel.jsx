import React, { useEffect, useState, Children, cloneElement } from 'react'
import {FaChevronLeft,FaChevronRight, FaSnapchat } from 'react-icons/fa'
import "../sass/compare.scss"
const PAGE_WIDTH = 705
// const PAGE_WIDTH = 75 

export default function Carousel({children}) {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const [nextArrow, setNextArrow] = useState(true)
    const [prevArrow, setPrevArrow] = useState(false)
    

    const handleLeftArrow = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH
            // newOffset > 0 ?  (setPrevArrow(false), setNextArrow(true)) :  setPrevArrow(true)
            console.log(newOffset);
            if (newOffset > -700) {
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
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

            if (newOffset < -1415) {
                setPrevArrow(true);
                setNextArrow(false)
            } else {
                setNextArrow(true)
                setPrevArrow(true)
            }
            // console.log(newOffset);
            // console.log(maxOffset);
            return (Math.max(newOffset, -2115))
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
                style={{transform: `translateX(${offset}px)`}}
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
